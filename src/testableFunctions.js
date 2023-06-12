import { dataModel } from "./domUpdates";

const returnBookings = (id) => {
  return dataModel.bookings.bookings
    .filter((booking) => id === booking.userID)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

const filterAvailableRooms = (date) => {
  const reformatedDate = date.split("-").join("/")
  const bookedRooms = dataModel.bookings.bookings
    .filter((booking) => booking.date === reformatedDate)
    .map((booking) => booking.roomNumber);

  return dataModel.rooms.rooms.filter((room) => !bookedRooms.includes(room.number));
};

function getChoiceIndex(e) {
  return dataModel.searchedAvailableRooms.indexOf(
    dataModel.searchedAvailableRooms.find((room) => room.number === Number(e.target.id))
  );
}

export {filterAvailableRooms, returnBookings, getChoiceIndex}