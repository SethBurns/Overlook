import {
  username,
  password,
  loginMessage,
  loginPage,
  loginName,
  mainDashboard,
  displayResults,
  totalSpent,
  dateSelect,
  roomSelect,
  availableRooms,
  availableRoomsHeader,
  searchedRooms,
  bookingMessage,
  dataModel,
} from './scripts';

import { filterAvailableRooms, returnBookings, getChoiceIndex } from './testableFunctions';

// API //
const fetchAPI = (dataType) => {
  return fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then((response) => {
      return response.json();
    })
    .catch((err) => errorHandling(err));
};

const errorHandling = (err) => {
  alert(`${err.name}: ${err.message} Overlook failed to obtain data from the server!`);
};

const postBooking = (booking) => {
  fetch('http://localhost:3001/api/v1/bookings', {
    method: 'POST',
    body: JSON.stringify(booking),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch(() => alert('Something went wrong, your booking was not completed!'));
};

// Hide and Unhide functions //
const hide = (e) => {
  e.forEach((element) => {
    element.classList.add('hidden');
  });
};

const show = (e) => {
  e.forEach((element) => {
    element.classList.remove('hidden');
  });
};

const loginButtonClicked = () => {
  // if (username.value.includes('customer')) {
  //   dataModel.loginID = username.value.replace('customer', '');
  // }
  // loginMessage.innerHTML = '';
  // loginName.innerHTML = '';

  // if (password.value !== 'overlook2021') {
  //   showLoginError();
  // } else if (dataModel.loginID) {
    fetchSingleCustomer(13);
  // } else if (username.value === 'manager') {
  //   fetchManagerView();
  // }
};

const fetchSingleCustomer = (loginID) => {
  fetch(`http://localhost:3001/api/v1/customers/${loginID}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.message && loginID) {
        dataModel.loginCustomer = data;
        loginName.innerHTML = `${dataModel.loginCustomer.name}`;
        // hide([loginPage]);
        show([mainDashboard]);

        renderBookings();
        renderTotalSpent();
      } else {
        showLoginError();
      }
    })
    .catch((err) => errorHandling(err));
};

const fetchManagerView = () => {
  fetch(`http://localhost:3001/api/v1/customers`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.message) {
        dataModel.allCustomerData = data;
        // hide([loginPage]);
        show([mainDashboard]);
      } else {
        showLoginError();
      }
    })
    .catch((err) => errorHandling(err));
};

// const showLoginError = () => {
//   show([loginMessage]);
//   loginMessage.innerHTML = `Invalid Username or Password`;
// };

const renderBookings = () => {
  dataModel.customerBookings = returnBookings(dataModel.loginCustomer.id);
  displayResults.innerHTML = ``;
  dataModel.customerBookings.forEach((booking) => {
    let className = dataModel.rooms.rooms
      .find((room) => room.number === booking.roomNumber)
      .roomType.split(' ')
      .join('-');
    let roomIndex = dataModel.rooms.rooms[booking.roomNumber - 1];
    let roomStyle = className.split('-').join(' ').toUpperCase();

    displayResults.innerHTML += `<div class="${className}"><div class="info"><p>Date: ${booking.date}</p><p>${roomStyle}</p><p>Room Number: ${booking.roomNumber}</p><p>Bed(s): ${roomIndex.numBeds} ${roomIndex.bedSize}</p><p>Price: ${roomIndex.costPerNight}</p></div></div>`;
  });
};

const renderTotalSpent = () => {
  let total = 0;

  dataModel.customerBookings.forEach((booking) => {
    return (total += dataModel.rooms.rooms[booking.roomNumber - 1].costPerNight);
  });
  totalSpent.innerHTML = `Your Total Bookings: $${Math.round(total * 100) / 100}`;
};

const searchButtonClicked = () => {
  dataModel.date = dateSelect.value.split('-').join('/');
  let filteredRooms = filterAvailableRooms(dateSelect.value);
  availableRoomsHeader.innerHTML = `Available Rooms for ${dateSelect.value}`;
  availableRooms.innerHTML = ``;
  show([searchedRooms]);

  if (!dateSelect.value.length) {
    availableRooms.innerHTML = `You must select a date to search!`;
    return;
  }

  if (roomSelect.value !== 'any room') {
    dataModel.searchedAvailableRooms = filteredRooms.filter(
      (room) => room.roomType === roomSelect.value
    );
  } else {
    dataModel.searchedAvailableRooms = filteredRooms;
  }

  if (!dataModel.searchedAvailableRooms.length) {
    availableRooms.innerHTML = `<p>We are so sorry, we do not have vacancy on your chosen date! Please adjust your search.`;
    return;
  }

  renderSearchedRooms();
  availableRooms.addEventListener('click', handleBookingClick);
};

const handleBookingClick = (e) => {
  let booking = {
    userID: dataModel.loginCustomer.id,
    date: dataModel.date,
    roomNumber: Number(e.target.id),
  };
  postBooking(booking);

  let choiceIndex = getChoiceIndex(e);
  dataModel.searchedAvailableRooms.splice(choiceIndex, 1);
  dataModel.bookings.bookings.push(booking);
  bookingMessage.innerHTML = `${
    dataModel.loginCustomer.name.split(' ')[0]
  }, you successfully booked room ${e.target.id} on ${
    dataModel.date
  }. <br> Thank you for choosing Overlook. <br> We look forward to seeing you!`;
  searchButtonClicked();
  fetchSingleCustomer(dataModel.loginID);
};



function renderSearchedRooms() {
  dataModel.searchedAvailableRooms.forEach((availableRoom) => {
    let className = availableRoom.roomType.split(' ').join('-');
    let roomStyle = availableRoom.roomType.toUpperCase();
    availableRooms.innerHTML += `<div class="${className}"><div class="info"><p>${roomStyle}</p><p>Room Number: ${availableRoom.number}</p><p>Bed(s): ${availableRoom.numBeds} ${availableRoom.bedSize}</p><p>Price: ${availableRoom.costPerNight}</p></div><button class='book-now' id="${availableRoom.number}">BOOK NOW</button></div>`;
    const bookNowButton = document.querySelector(`#room${availableRoom.number}`);
  });
}

export { loginButtonClicked, dataModel, searchButtonClicked, fetchAPI };
