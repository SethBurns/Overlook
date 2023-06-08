import { username, password, loginMessage, customersData, bookings, rooms } from "./scripts";


const checkID = (id) => {
  let customerIDs = customersData.customers.map(customer => customer.id.toString())
  return customerIDs.includes(id.toString())
}







export {checkID, }