// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/vecteezy_palm-island-dubai_1906870.png'

import { fetchAPI } from './apiCalls';
import { loginButtonClicked, loginCustomer } from './domUpdates';

// GLOBAL VARIABLES //
let customersData;
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

const startup = () => {
  Promise.all([fetchAPI('customers'), fetchAPI('rooms'), fetchAPI('bookings')]).then((data) => {
    customersData = data[0];
    rooms = data[1];
    bookings = data[2];
  });
};

// EVENT LISTENERS //
window.addEventListener('load', startup);

loginButton.addEventListener('click', loginButtonClicked);

export {
  username,
  password,
  loginMessage,
  customersData,
  rooms,
  bookings,
  loginPage,
  navBar,
  mainView,
  loginName,
};
