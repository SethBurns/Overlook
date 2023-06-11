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
    .catch(() => alert("Something went wrong, your booking was not completed!"));
}




export { fetchAPI, errorHandling, postBooking }