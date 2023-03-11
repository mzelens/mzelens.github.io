import React from 'react';

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react';

import './RestaurantStats.scss';

import restaurants from '../../mocks/restaurants';

function RestaurantStats() {
  const restaurant = restaurants[0];

  const partnerDate = new Date(restaurant.registrationDate).toLocaleString(
    'default',
    {
      dateStyle: 'medium',
    }
  );

  let currentMonth = new Date(Date.now()).toLocaleString('default', {
    month: 'long',
  });

  return (
    <div className="restaurant-stats">
      <Stat
        className="restaurant-stats__block"
        borderWidth="1px"
        borderRadius="lg"
      >
        <StatLabel>Total orders received</StatLabel>
        <StatNumber>{restaurant.stats.orders.total}</StatNumber>
        <StatHelpText>Partner since {partnerDate}</StatHelpText>
      </Stat>

      <Stat
        className="restaurant-stats__block"
        borderWidth="1px"
        borderRadius="lg"
      >
        <StatLabel>Orders in {currentMonth}</StatLabel>
        <StatNumber>{restaurant.stats.orders.month}</StatNumber>
        <StatHelpText>
          <StatArrow
            type={
              restaurant.stats.orders.monthIncrease > 0
                ? 'increase'
                : 'decrease'
            }
          />
          {restaurant.stats.orders.monthIncrease}%
        </StatHelpText>
      </Stat>

      <Stat
        className="restaurant-stats__block"
        borderWidth="1px"
        borderRadius="lg"
      >
        <StatLabel>Total revenue</StatLabel>
        <StatNumber>{restaurant.stats.revenue.total} EUR</StatNumber>
        <StatHelpText>Partner since {partnerDate}</StatHelpText>
      </Stat>

      <Stat
        className="restaurant-stats__block"
        borderWidth="1px"
        borderRadius="lg"
      >
        <StatLabel>Revenue in {currentMonth}</StatLabel>
        <StatNumber>{restaurant.stats.revenue.month} EUR</StatNumber>
        <StatHelpText>
          <StatArrow
            type={
              restaurant.stats.revenue.monthIncrease > 0
                ? 'increase'
                : 'decrease'
            }
          />
          {restaurant.stats.revenue.monthIncrease}%
        </StatHelpText>
      </Stat>
    </div>
  );
}

export default RestaurantStats;
