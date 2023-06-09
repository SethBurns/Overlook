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
  let loginID
  if (username.value.includes('customer')) {
  loginID = username.value.replace('customer', '');
  }
  loginMessage.innerHTML = '';
  loginName.innerHTML = '';

  if (password.value !== 'overlook2021') {
    showLoginError();
  } else if (loginID) {
    fetchSingleCustomer(loginID)
  } else if (username.value === 'manager') {
    fetchManagerView()
  }
};

const fetchSingleCustomer = (loginID) => {
  fetch(`http://localhost:3001/api/v1/customers/${loginID}`)
    .then(response => response.json())
    .then(data => {
      if (!data.message && loginID) {
        loginCustomer = data
        loginName.innerHTML = `Welcome, ${loginCustomer.name}`
        hide([loginPage]);
        show([navBar, mainView]);
      } else {
        showLoginError()
      }
    })
    .catch((err) => errorHandling(err))
}

const fetchManagerView = () => {
  fetch(`http://localhost:3001/api/v1/customers`)
  .then(response => response.json())
  .then(data => {
    if (!data.message) {
      allCustomerData = data
      hide([loginPage]);
      show([navBar, mainView])
    } else {
      showLoginError()
    }
  })
  .catch((err) => errorHandling(err))
}

const showLoginError = () => {
  show([loginMessage])
  loginMessage.innerHTML = `Invalid Username or Password`
}

export { loginButtonClicked, loginCustomer };
