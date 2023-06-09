import { bookings, rooms } from './scripts';

const returnBookings = (customer) => {
  return bookings.bookings
    .filter((booking) => customer.id === booking.userID)
    .sort((a, b) => a.date - b.date);
};

export { returnBookings };
