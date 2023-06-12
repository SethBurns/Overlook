import chai from 'chai';
const expect = chai.expect;
import { testDataModel } from './testData';

import {
  filterAvailableRooms,
  returnBookings,
  calculateTotal,
  getClassName,
} from '../src/testableFunctions';

let dataModel = testDataModel;

describe('See if the tests are running', function () {
  it('should return true', function () {
    expect(true).to.equal(true);
  });
});

describe('filterAvailableRooms', function () {
  it('should filter out unavailable rooms', function () {
    const availableRooms = filterAvailableRooms(
      '2022-04-22',
      dataModel.bookings.bookings,
      dataModel.rooms.rooms
    );

    const r = dataModel.rooms.rooms;

    expect(availableRooms).to.deep.equal([r[1], r[2], r[3], r[4]]);
  });

  it('should not find rooms if all are unavailable', function () {
    const noAvailableRooms = filterAvailableRooms(
      '2022-01-24',
      dataModel.bookings.bookings,
      dataModel.rooms.rooms
    );

    expect(noAvailableRooms).to.equal('No rooms found!');
  });
});

describe('returnBookings', function () {
  it('should return sorted bookings for a customer', function () {
    const returnedBookings = returnBookings(25, dataModel.bookings.bookings);
    const b = dataModel.bookings.bookings;

    expect(returnedBookings).to.deep.equal([b[9], b[8], b[10]]);
  });
  it('should tell a user if they do not have current bookings', function () {
    // customer 51 does not exist, so they will have no bookings
    const noReturnedBookings = returnBookings(51, dataModel.bookings.bookings)

    expect(noReturnedBookings).to.equal('No current bookings found.')
  })
});

describe('calculateTotal', function () {
  it('should return the total value of bookings for a given customer', function () {
    const returnedBookings = returnBookings(25, dataModel.bookings.bookings);
    const calculatedTotal = calculateTotal(returnedBookings, dataModel.rooms.rooms);

    expect(calculatedTotal).to.equal(1260.75);
  });
  it ('should return 0 if a customer does not have bookings', function () {
    const noCustomerBookings = [];
    const calculatedTotal2 = calculateTotal(noCustomerBookings, dataModel.rooms.rooms)

    expect(calculatedTotal2).to.equal(0)
  })
});

describe('getClassName', function () {
  it('should return residential-suite className for a residential suite', function () {
    const returnedClassName1 = getClassName(dataModel.bookings.bookings[0], dataModel.rooms.rooms)
    
    expect(returnedClassName1).to.equal('residential-suite')
  })
  it('should return suite className for a suite', function () {
    const returnedClassName2 = getClassName(dataModel.bookings.bookings[1], dataModel.rooms.rooms)
    
    expect(returnedClassName2).to.equal('suite')
  })
  it('should return junior-suite className for a junior suite', function () {
    const returnedClassName3 = getClassName(dataModel.bookings.bookings[2], dataModel.rooms.rooms)
    
    expect(returnedClassName3).to.equal('junior-suite')
  })
  it('should return single-room className for a single room', function () {
    const returnedClassName4 = getClassName(dataModel.bookings.bookings[3], dataModel.rooms.rooms)
    
    expect(returnedClassName4).to.equal('single-room')
  })
})