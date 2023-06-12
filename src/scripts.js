// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/vecteezy_palm-island-dubai_1906870.png';
import './images/user-icon.png';
import './images/hotel-lobby.jpg';
import './images/residential-suite.png';
import './images/suite.png';
import './images/junior-suite.png';
import './images/single-room.png';

import { loginButtonClicked, searchButtonClicked, fetchAPI } from './domUpdates';

// GLOBAL VARIABLES //
// let rooms;
// let bookings;
let dataModel = {};

// QUERY SELECTORS //
const username = document.querySelector('#userLogin');
const password = document.querySelector('#password');
const nav = document.querySelector('.nav');
const main = document.querySelector('.main');
// const loginButton = document.querySelector('.login-button');
// const loginMessage = document.querySelector('.login-message');
// const loginPage = document.querySelector('.login-page');
const navBar = document.querySelector('.nav');
const mainView = document.querySelector('.main');
const loginName = document.querySelector('.login-name');
const mainDashboard = document.querySelector('.main-dashboard');
const displayResults = document.querySelector('.display-results');
const totalSpent = document.querySelector('.total-spent');
const dateSelect = document.querySelector('#searchDate');
const roomSelect = document.querySelector('.room-search');
const searchButton = document.querySelector('.search-rooms');
const availableRoomsHeader = document.querySelector('.available-rooms-header')
const availableRooms = document.querySelector('.available-rooms')
const searchedRooms = document.querySelector('.searched-rooms')
const bookingMessage = document.querySelector('.booking-message')


const startup = () => {
  Promise.all([fetchAPI('rooms'), fetchAPI('bookings')]).then((data) => {
    dataModel.rooms = data[0];
    dataModel.bookings = data[1];
  })
  .then(loginButtonClicked());
};


// EVENT LISTENERS //
window.addEventListener('load', startup);

// loginButton.addEventListener('click', loginButtonClicked);

searchButton.addEventListener('click', searchButtonClicked)

// FUNCTIONS //




export {
  username,
  password,
  // loginMessage,
  // loginPage,
  navBar,
  mainView,
  loginName,
  mainDashboard,
  displayResults,
  totalSpent,
  dateSelect,
  roomSelect,
  availableRoomsHeader,
  availableRooms,
  searchedRooms,
  bookingMessage,
  dataModel,
};
