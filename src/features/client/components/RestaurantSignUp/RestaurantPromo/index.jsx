import React from 'react';
import { Button } from '@chakra-ui/react';
import './index.scss';

function RestaurantPromo() {
  return (
    <div className="promo2__section">
      <div className="restaurant-signup__container">
        <div className="promo2__wrapper">
          <div className="promo2__img"></div>
          <div className="promo2__main">
            <h2 className="promo2__title">
              Become part of our team: Get your restaurant on bfd.lt or get your
              own webshop today!
            </h2>
            <p className="restaurant-signup__text">
              On Takeout, it is easy to sign up and become part of our portal
              and to get your own white label webshop and start selling online.
            </p>
            <p className="restaurant-signup__text">
              <span>It is easy to start already today!</span> <br />
              Please fill out the form below, to start selling takeaway on
              lėkštė.lt or through your own webshop.
            </p>
            <Button size="lg" whiteSpace="normal" colorScheme="teal">
              Sign up for free today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RestaurantPromo;
