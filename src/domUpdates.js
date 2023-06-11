import {
  username,
  password,
  loginMessage,
  bookings,
  rooms,
  loginPage,
  loginName,
  mainDashboard,
  displayResults,
  returnBookings,
  totalSpent,
  filterAvailableRooms,
  dateSelect,
  roomSelect,
  availableRooms,
  availableRoomsHeader,
  searchedRooms,
} from './scripts';

import { errorHandling } from './apiCalls';

let loginCustomer;
let allCustomerData;

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
  let loginID;
  if (username.value.includes('customer')) {
    loginID = username.value.replace('customer', '');
  }
  loginMessage.innerHTML = '';
  loginName.innerHTML = '';

  if (password.value !== 'overlook2021') {
    showLoginError();
  } else if (loginID) {
    fetchSingleCustomer(loginID);
  } else if (username.value === 'manager') {
    fetchManagerView();
  }
};

const fetchSingleCustomer = (loginID) => {
  fetch(`http://localhost:3001/api/v1/customers/${loginID}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.message && loginID) {
        loginCustomer = data;
        loginName.innerHTML = `${loginCustomer.name}`;
        hide([loginPage]);
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
        allCustomerData = data;
        hide([loginPage]);
        show([mainDashboard]);
      } else {
        showLoginError();
      }
    })
    .catch((err) => errorHandling(err));
};

const showLoginError = () => {
  show([loginMessage]);
  loginMessage.innerHTML = `Invalid Username or Password`;
};

const renderBookings = () => {
  let customerBookings = returnBookings(loginCustomer.id);

  customerBookings.forEach((booking) => {
    let className = rooms.rooms
      .find((room) => room.number === booking.roomNumber)
      .roomType.split(' ')
      .join('-');
    let roomIndex = rooms.rooms[booking.roomNumber - 1];
    let roomStyle = className.split('-').join(' ').toUpperCase();

    displayResults.innerHTML += `<div class="${className}"><div class="info"><p>Date: ${booking.date}</p><p>${roomStyle}</p><p>Room Number: ${booking.roomNumber}</p><p>Bed(s): ${roomIndex.numBeds} ${roomIndex.bedSize}</p><p>Price: ${roomIndex.costPerNight}</p></div></div>`;
  });
};

const renderTotalSpent = () => {
  let customerBookings = returnBookings(loginCustomer.id);
  let total = 0;

  customerBookings.forEach((booking) => {
    return (total += rooms.rooms[booking.roomNumber - 1].costPerNight);
  });
  totalSpent.innerHTML = `Your Total Bookings: $${Math.round(total * 100) / 100}`;
};

// const handleBookingClick = (e) => {console.log("hello", e.target.id)}

const searchButtonClicked = () => {
  let filteredRooms = filterAvailableRooms(dateSelect.value);
  availableRoomsHeader.innerHTML = `Available Rooms for ${dateSelect.value}`;
  availableRooms.innerHTML = ``;
  show([searchedRooms]);
  let searchedAvailableRooms;
  
  if (!dateSelect.value.length) {
    availableRooms.innerHTML = `You must select a date to search!`
    return
  }

  if (roomSelect.value !== 'any room') {
    searchedAvailableRooms = filteredRooms.filter((room) => (room.roomType === roomSelect.value));
  } else {
    searchedAvailableRooms = filteredRooms;
  }
  
  if (!searchedAvailableRooms.length) {
    availableRooms.innerHTML = `<p>We are so sorry, we do not have vacancy on your chosen date!`;
    return
  }

  searchedAvailableRooms.forEach((availableRoom) => {
    let className = availableRoom.roomType.split(' ').join('-');
    let roomStyle = availableRoom.roomType.toUpperCase();
    availableRooms.innerHTML += `<div class="${className}"><div class="info"><p>${roomStyle}</p><p>Room Number: ${availableRoom.number}</p><p>Bed(s): ${availableRoom.numBeds} ${availableRoom.bedSize}</p><p>Price: ${availableRoom.costPerNight}</p></div><button class='book-now' id="room${availableRoom.number}">BOOK NOW</button></div>`;
    const bookNowButton = document.querySelector(`#room${availableRoom.number}`)
  });
  availableRooms.addEventListener('click', (e) => {console.log("hello", e.target.id)})
};

export { loginButtonClicked, loginCustomer, searchButtonClicked };
