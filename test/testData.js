const testDataModel = {
  rooms: {
    rooms: [
      {
        number: 1,
        roomType: 'residential suite',
        bidet: true,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 358.4,
      },
      {
        number: 2,
        roomType: 'suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 2,
        costPerNight: 477.38,
      },
      {
        number: 3,
        roomType: 'junior suite',
        bidet: false,
        bedSize: 'king',
        numBeds: 1,
        costPerNight: 491.14,
      },
      {
        number: 4,
        roomType: 'single room',
        bidet: false,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 429.44,
      },
      {
        number: 5,
        roomType: 'single room',
        bidet: true,
        bedSize: 'queen',
        numBeds: 2,
        costPerNight: 340.17,
      },
    ],
  },

  bookings: {
    bookings: [
      {
        id: '5fwrgu4i7k55hl6sz',
        userID: 9,
        date: '2022/04/22',
        roomNumber: 1,
      },
      {
        id: '5fwrgu4i7k55hl6t5',
        userID: 43,
        date: '2022/01/24',
        roomNumber: 2,
      },
      {
        id: '5fwrgu4i7k55hl6t5',
        userID: 43,
        date: '2022/01/24',
        roomNumber: 3,
      },
      {
        id: '5fwrgu4i7k55hl6t5',
        userID: 43,
        date: '2022/01/24',
        roomNumber: 4,
      },
      {
        id: '5fwrgu4i7k55hl6t5',
        userID: 43,
        date: '2022/01/24',
        roomNumber: 5,
      },
      {
        id: '5fwrgu4i7k55hl6t5',
        userID: 43,
        date: '2022/01/24',
        roomNumber: 1,
      },
      {
        id: '5fwrgu4i7k55hl6t6',
        userID: 13,
        date: '2022/01/10',
        roomNumber: 3,
      },
      {
        id: '5fwrgu4i7k55hl6t7',
        userID: 20,
        date: '2022/02/16',
        roomNumber: 4,
      },
      {
        id: '5fwrgu4i7k55hl6t8',
        userID: 25,
        date: '2022/02/05',
        roomNumber: 5,
      },
      {
        id: '5fwrgu4i7k55hl6t9',
        userID: 25,
        date: '2023/12/14',
        roomNumber: 4,
      },
      {
        id: '5fwrgu4i7k55hl6ta',
        userID: 25,
        date: '2022/01/11',
        roomNumber: 3,
      },
    ],
  },
};

export { testDataModel };
