import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeAddress } from '../../../../store/reducers/customerReducer';

import { Button, Tooltip } from '@chakra-ui/react';
import CustomerAccountAddressList from '../CustomerAccountAddressList/CustomerAccountAddressList';
import CustomerAccountAddressForm from '../CustomerAccountAddressForm/CustomerAccountAddressForm';

import './CustomerAccountAddress.scss';

function CustomerAccountAddress({ customer }) {
  const [activeAddress, setActiveAddress] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const savedAddressBook = useSelector((state) => state.customer.addressBook);

  const dispatch = useDispatch();
  const dispatchRemove = (address) => dispatch(removeAddress(address));

  const handleBackClick = () => {
    setActiveAddress(null);
    setShowForm(false);
  };

  const handleRemove = () => {
    dispatchRemove(activeAddress.id);
    setActiveAddress(null);
    setShowForm(false);
  };

  return (
    <div className="customer-address">
      <div className="customer-address__nav">
        {showForm && (
          <Button
            variant="outline"
            colorScheme="blue"
            size="lg"
            onClick={handleBackClick}
          >
            Back
          </Button>
        )}

        {showForm && activeAddress && (
          <Tooltip
            label="You can't remove primary address."
            shouldWrapChildren
            hasArrow
            placement="bottom"
            bg="red.500"
            isDisabled={!activeAddress.primary}
          >
            <Button
              variant="outline"
              colorScheme="red"
              size="lg"
              isDisabled={
                activeAddress.primary || savedAddressBook.length === 1
              }
              onClick={handleRemove}
            >
              Remove
            </Button>
          </Tooltip>
        )}
      </div>

      {activeAddress || showForm ? (
        <CustomerAccountAddressForm
          address={activeAddress}
          setActiveAddress={setActiveAddress}
          setShowForm={setShowForm}
        />
      ) : (
        <CustomerAccountAddressList
          addressList={customer.addressBook}
          setActiveAddress={setActiveAddress}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
}

export default CustomerAccountAddress;
