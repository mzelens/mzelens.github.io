import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPreferPayment } from '../../../../store/reducers/customerReducer';

import { Icon, Button, Tag, Radio, Tooltip } from '@chakra-ui/react';
import { BiCreditCard, BiMoney } from 'react-icons/all.js';

import './CustomerAccountPaymentMethod.scss';

function CustomerAccountPaymentCard({ item }) {
  const paymentMethod = useSelector((state) => state.customer.payment.prefer);

  const dispatch = useDispatch();
  const dispatchPreferPayment = (method) => dispatch(setPreferPayment(method));

  const handleChangePrefer = () => dispatchPreferPayment(item);

  return (
    <div className="customer-payment__method payment-method">
      <Tooltip
        display={{ base: 'none', md: 'block' }}
        label="Set as primary"
        shouldWrapChildren
        hasArrow
        placement="bottom"
        bg="green.500"
      >
        <Radio
          className="payment-method__radio"
          size="lg"
          colorScheme="green"
          value={item}
        ></Radio>
      </Tooltip>

      <div className="payment-method__icon">
        <Icon
          as={item === 'Cash' ? BiMoney : BiCreditCard}
          boxSize={5}
          color="white"
        />
      </div>
      <div className="payment-method__value">
        <p>{item}</p>
        {item === paymentMethod && (
          <Tag
            className="payment-method__tag"
            size="md"
            variant="solid"
            colorScheme="green"
          >
            primary
          </Tag>
        )}
      </div>
      <Button
        colorScheme="blue"
        className="payment-method__button"
        onClick={handleChangePrefer}
      >
        Select
      </Button>
    </div>
  );
}

export default CustomerAccountPaymentCard;
