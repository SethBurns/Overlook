import {
  username,
  password,
  loginMessage,
  customersData,
  bookings,
  rooms,
  loginPage,
  navBar,
  mainView,
  loginName,
} from './scripts';
import { checkID } from './login';

let loginCustomer;

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
  let loginID = username.value.replace('customer', '');
  let valid = checkID(loginID);
  loginMessage.innerHTML = '';
  loginName.innerHTML = '';
  
  if (password.value !== 'overlook2021' || !valid) {
    loginMessage.innerHTML = `Wrong Username or Password`;
  } else {
    loginCustomer = customersData.customers.find(customer => customer.id.toString() === loginID)
    loginName.innerHTML = `Welcome, ${loginCustomer.name}`
    hide([loginPage]);
    show([navBar, mainView]);
  }
};

export { loginButtonClicked, loginCustomer };
