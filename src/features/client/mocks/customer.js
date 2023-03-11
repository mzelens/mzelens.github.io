const customer = {
  id: 1,
  firstName: 'Justina',
  lastName: 'Clark',
  country: 'Lithuania',
  email: 'customer@bfd.lt',
  phone: '+3701112233',
  photo:
    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
  payment: {
    prefer: 'PaySera',
  },
  addressBook: [
    {
      id: 1,
      city: 'Vilnius',
      street: 'Ausros Vartu g.',
      building: '1',
      floor: 1,
      apartment: '20',
      primary: true,
    },
    {
      id: 2,
      city: 'Kaunas',
      street: 'Upes g.',
      building: '23',
      floor: 5,
      apartment: '512',
      primary: false,
    },
  ],
  orders: [
    {
      id: 1,
      status: 'fulfilled',
      date: '01.01.2020',
      restaurant: 'My Restaurant name',
      dishes: [
        {
          id: 1,
          amount: 1,
          name: 'Azijietiškas Buddha bowl',
          price: 20,
          image:
            'https://imageproxy.wolt.com/menu/menu-images/5d1610605cc621ce83104d91/b9040bec-9d51-11eb-99df-f28e16f5aeed_18298878_c2fb_4fa2_b880_4329ebbb5ae7.jpeg',
        },
        {
          id: 2,
          amount: 2,
          name: 'TURBO imbierinis shots',
          price: 25,
          image:
            'https://imageproxy.wolt.com/menu/menu-images/5d1610605cc621ce83104d91/4aa047b4-7ba4-11ed-a12b-f67466b2c6d4_165f612e_3a63_11ed_99c7_a244d51b8ac1_e5f32d55_fdf8_4051_946b_a58fcc75955a.jpeg',
        },
      ],
      payment: {
        total: 70,
        method: 'card',
      },
      deliveryAddress: {
        city: 'Vilnius',
        street: 'Upes g.',
        building: '23',
        floor: 5,
        apartment: '512',
      },
    },
  ],
};

export default customer;
