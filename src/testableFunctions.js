const filterAvailableRooms = (date, bookings, rooms) => {
  const reformatedDate = date.split('-').join('/');
  const bookedRooms = bookings
    .filter((booking) => booking.date === reformatedDate)
    .map((booking) => booking.roomNumber);

  const foundRooms = rooms.filter((room) => !bookedRooms.includes(room.number));
  if (!foundRooms.length) {
    return `No rooms found!`;
  } else {
    return foundRooms;
  }
};

const returnBookings = (id, bookings) => {
  let foundBookings = bookings
    .filter((booking) => id === booking.userID)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

    if (!foundBookings.length) {
      return `No current bookings found.`
    } else {
      return foundBookings
    }
};

function calculateTotal(customerBookings, rooms) {
  let total = 0;
  if (!customerBookings.length) {
    return total;
  } else {
    customerBookings.forEach((booking) => {
      return (total += rooms[booking.roomNumber - 1].costPerNight);
    });
  }
  return total;
}

function getClassName(booking, rooms) {
  return rooms
    .find((room) => room.number === booking.roomNumber)
    .roomType.split(' ')
    .join('-');
}

export { filterAvailableRooms, returnBookings, calculateTotal, getClassName };
