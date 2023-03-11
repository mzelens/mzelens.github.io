const ordersList = [
  {
    id: 1,
    status: 'pending',
    restaurantId: 1,
    dishes: [
      {
        id: 1,
        amount: 1,
      },
      {
        id: 2,
        amount: 2,
      },
    ],
    customer: {
      name: 'Customer #1',
      address: 'Vilnius, Ausros Vartu g. 1',
    },
    payment: {
      total: 125,
      method: 'card',
    },
  },
  {
    id: 2,
    status: 'pending',
    restaurantId: 1,
    dishes: [
      {
        id: 3,
        amount: 1,
      },
    ],
    customer: {
      name: 'Customer #2',
      address: 'Vilnius, Ausros Vartu g. 2',
    },
    payment: {
      total: 225,
      method: 'cash',
    },
  },
  {
    id: 3,
    status: 'ready',
    restaurantId: 1,
    dishes: [
      {
        id: 1,
        amount: 1,
      },
      {
        id: 3,
        amount: 2,
      },
    ],
    customer: {
      name: 'Customer #3',
      address: 'Vilnius, Ausros Vartu g. 3',
    },
    payment: {
      total: 325,
      method: 'card',
    },
  },
];

export default ordersList;
