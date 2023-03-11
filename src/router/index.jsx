import React from 'react';
import { createHashRouter } from 'react-router-dom/dist';
import ClientLanding from '../features/client/pages/ClientLanding';
import ClientLayout from '../features/client/layouts/ClientLayout';
import AdminLayout from '../features/admin/layouts/AdminLayout';
import RestaurantInspect from '../features/client/pages/RestaurantInspect';
import Subscriptions from '../features/client/pages/Subscriptions';
import CouriersDashboard from '../features/admin/components/CouriersDashboard';
import RestaurantStats from '../features/admin/components/RestaurantStats/RestaurantStats';
import RestaurantOrders from '../features/admin/components/RestaurantOrders/RestaurantOrders';
import RestaurantDishes from '../features/admin/components/RestaurantDishes/RestaurantDishes';
import RestaurantDescriptionForm from '../features/admin/components/RestaurantDescriptionForm/RestaurantDescriptionForm';

import {
  BiRestaurant,
  BiCategory,
  BiLayer,
  BiNotepad,
  BiCar,
} from 'react-icons/bi';
import CourierRegisterLanding from '../features/client/pages/CourierRegisterLanding';
import { restaurantInspectMock } from '../features/client/mocks/restaurantInspectMock';
import CustomerOrderStatus from '../features/client/components/CustomerOrderStatus/CustomerOrderStatus';
import CustomerAccountDashboard from '../features/client/components/CustomerAccountDashboard/CustomerAccountDashboard';
import Checkout from '../features/client/pages/Checkout';

function getClientRoutes() {
  return [
    {
      element: <ClientLanding />,
      index: true,
    },
    {
      path: '/subscriptions',
      element: <Subscriptions />,
    },
    {
      path: '/restaurants/:id',
      loader: async () => {
        return restaurantInspectMock;
      },
      element: <RestaurantInspect />,
    },
    {
      path: '*',
      element: <ClientLanding />,
    },
    {
      path: '/courier',
      element: <CourierRegisterLanding />,
    },
    {
      path: '/account',
      children: [
        { index: true, element: <CustomerAccountDashboard /> },
        {
          path: 'order-history',
          element: <CustomerAccountDashboard activeTab={3} />,
        },
        {
          path: 'settings',
          element: <CustomerAccountDashboard activeTab={4} />,
        },
      ],
    },
    {
      path: '/order-status',
      element: <CustomerOrderStatus />,
    },
    {
      path: '/checkout',
      element: <Checkout />,
    },
  ];
}

export function getAdminRoutes() {
  return [
    // {
    //   element: <AdminLanding />,
    //   index: true,
    //   loader: () => {
    //     return redirect('/admin/restaurants');
    //   },
    //   navItemName: 'Dashboard',
    //   navItemIcon: FiHome,
    // },
    //return after mvp
    {
      path: '/admin/restaurants',
      element: <RestaurantStats />,
      navItemName: 'Restaurants',
      navItemIcon: BiRestaurant,
    },
    {
      path: '/admin/restaurants/orders',
      element: <RestaurantOrders />,
      navItemName: 'Orders',
      navItemIcon: BiLayer,
    },
    {
      path: '/admin/restaurants/dishes',
      element: <RestaurantDishes />,
      navItemName: 'Dishes',
      navItemIcon: BiCategory,
    },
    {
      path: '/admin/restaurants/info',
      element: <RestaurantDescriptionForm />,
      navItemName: 'Restaurant Info',
      navItemIcon: BiNotepad,
    },
    {
      path: '/admin/couriers',
      element: <CouriersDashboard />,
      navItemName: 'Couriers',
      navItemIcon: BiCar,
    },
  ];
}

const router = createHashRouter([
  {
    path: '/',
    element: <ClientLayout />,
    children: getClientRoutes(),
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: getAdminRoutes(),
  },
]);

export default router;
