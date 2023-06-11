import chai from 'chai';
const expect = chai.expect;
import { testBookings, testRooms } from './testData';

// import { filterAvailableRooms } from '../src/scripts';

// let bookings = testBookings;
// let rooms = testRooms;

describe('See if the tests are running', function () {
  it('should return true', function () {
    expect(true).to.equal(true);
  });
});

// describe('filterAvailableRooms', function () {
//   it('should filter out unavailable rooms', function () {
//     const availableRooms = filterAvailableRooms('2022-04-22');

//     expect(availableRooms).to.deep.equal([]);
//   });
// });
