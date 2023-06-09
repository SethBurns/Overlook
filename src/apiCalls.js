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






export { fetchAPI, errorHandling }