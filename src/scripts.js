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

import { fetchAPI } from './apiCalls';
import { loginButtonClicked, loginCustomer, searchButtonClicked } from './domUpdates';

// GLOBAL VARIABLES //
let rooms;
let bookings;

// QUERY SELECTORS //
const username = document.querySelector('#userLogin');
const password = document.querySelector('#password');
const nav = document.querySelector('.nav');
const main = document.querySelector('.main');
const loginButton = document.querySelector('.login-button');
const loginMessage = document.querySelector('.login-message');
const loginPage = document.querySelector('.login-page');
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

const startup = () => {
  Promise.all([fetchAPI('rooms'), fetchAPI('bookings')]).then((data) => {
    rooms = data[0];
    bookings = data[1];
  });
};


// EVENT LISTENERS //
window.addEventListener('load', startup);

loginButton.addEventListener('click', loginButtonClicked);

searchButton.addEventListener('click', searchButtonClicked)

// FUNCTIONS //


const returnBookings = (id) => {
  return bookings.bookings
    .filter((booking) => id === booking.userID)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

const filterAvailableRooms = (date) => {
  const reformatedDate = date.split("-").join("/")
  const bookedRooms = bookings.bookings
    .filter((booking) => booking.date === reformatedDate)
    .map((booking) => booking.roomNumber);

  return rooms.rooms.filter((room) => !bookedRooms.includes(room.number));
};

export {
  username,
  password,
  loginMessage,
  rooms,
  bookings,
  loginPage,
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
  returnBookings,
  filterAvailableRooms,
};
