import React from 'react';
import { Button } from '@chakra-ui/react';
import './index.scss';

function RestaurantHero() {
  return (
    <div className="promo1__section">
      <div className="restaurant-signup__container">
        <div className="promo1__wrapper">
          <h2 className="promo1__title">
            Join the best food delivery and boost your online sales!
          </h2>
          <h3 className="promo1__description">
            Join us and increase your turnover up to 30%
          </h3>
          <ul className="promo1__list">
            <h4 className="promo1__list-item">
              Signup discount of <span>50%</span>
            </h4>
            <h4 className="promo1__list-item">
              From <span>12%</span> commission
            </h4>
          </ul>
          <div className="promo1__btns">
            <Button mt={8} size="lg" whiteSpace="normal" colorScheme="teal">
              Sign up for bfd.lt
            </Button>
            <Button mt={8} size="lg" whiteSpace="normal" colorScheme="teal">
              Sign up for a free workshop
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RestaurantHero;
