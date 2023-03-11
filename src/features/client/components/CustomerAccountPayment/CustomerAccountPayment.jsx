import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPreferPayment } from '../../../../store/reducers/customerReducer';

import { RadioGroup } from '@chakra-ui/react';
import CustomerAccountPaymentMethod from '../CustomerAccountPaymentMethod/CustomerAccountPaymentMethod';

import './CustomerAccountPayment.scss';

import { paymentsMethods } from '../../../../constants';

function CustomerAccountPayment() {
  const paymentMethod = useSelector((state) => state.customer.payment.prefer);

  const dispatch = useDispatch();
  const dispatchPreferPayment = (method) => dispatch(setPreferPayment(method));

  const handleChangePrefer = (method) => dispatchPreferPayment(method);

  return (
    <div className="customer-payment">
      <RadioGroup
        onChange={(value) => handleChangePrefer(value)}
        value={paymentMethod}
      >
        {paymentsMethods.map((item) => (
          <CustomerAccountPaymentMethod key={item} item={item} />
        ))}
      </RadioGroup>
    </div>
  );
}

export default CustomerAccountPayment;
