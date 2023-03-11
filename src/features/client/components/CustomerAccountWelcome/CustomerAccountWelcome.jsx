import React from 'react';
import { useSelector } from 'react-redux';

import { Avatar } from '@chakra-ui/react';

import './CustomerAccountWelcome.scss';

function CustomerAccountWelcome({ customer }) {
  const user = useSelector((state) => state.user.data);

  return (
    <div className="customer-welcome">
      <Avatar
        className="customer-welcome__avatar"
        size="2xl"
        bg="blue.500"
        name={`${user?.firstName} ${user?.lastName}`}
        src={customer.photo}
      />

      <div className="customer-welcome__info">
        <p className="customer-welcome__name">{`${user?.firstName} ${user?.lastName}`}</p>

        <div className="customer-welcome__contacts welcome-contacts">
          <div className="welcome-contacts__item">
            <p className="welcome-contacts__title">Email:</p>
            <p className="welcome-contacts__value">{user?.email}</p>
          </div>

          <div className="welcome-contacts__item">
            <p className="welcome-contacts__title">Phone number:</p>
            <p className="welcome-contacts__value">{customer.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerAccountWelcome;
