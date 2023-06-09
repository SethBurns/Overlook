// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/vecteezy_palm-island-dubai_1906870.png'
import './images/user-icon.png'
import './images/hotel-lobby.jpg'

import { fetchAPI } from './apiCalls';
import { loginButtonClicked, loginCustomer } from './domUpdates';

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
const mainDashboard = document.querySelector('.main-dashboard')
const displayResults = document.querySelector('.display-results')

const startup = () => {
  Promise.all([fetchAPI('rooms'), fetchAPI('bookings')]).then((data) => {
    rooms = data[0];
    bookings = data[1];
  });
};

// EVENT LISTENERS //
window.addEventListener('load', startup);

loginButton.addEventListener('click', loginButtonClicked);

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
};
