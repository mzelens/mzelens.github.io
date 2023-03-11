const restaurants = [
  {
    id: 1,
    name: 'My Restaurant name',
    address: 'Vilnius, Gedimino pr. 1',
    workingHours: {
      from: '09:00',
      till: '22:00',
    },
    registrationDate: '01.01.2020',
    paymentMethods: {
      cash: true,
      card: false,
    },
    dishes: [],
    orders: [],
    stats: {
      orders: {
        total: 12023,
        month: 1450,
        monthIncrease: 34,
      },
      revenue: {
        total: 20230,
        month: 4023,
        monthIncrease: 42,
      },
    },
  },
];

export default restaurants;
