import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPrimaryAddress } from '../../../../store/reducers/customerReducer';

import { Button, RadioGroup } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import CustomerAccountAddressCard from '../CustomerAccountAddressCard/CustomerAccountAddressCard';

import './CustomerAccountAddressList.scss';

function CustomerAccountAddressList({
  addressList,
  setActiveAddress,
  setShowForm,
}) {
  const primaryAddress = useSelector((state) =>
    state.customer.addressBook.find((address) => address.primary)
  );

  const dispatch = useDispatch();
  const dispatchPrimaryAddress = (addressId) =>
    dispatch(setPrimaryAddress(addressId));

  const handleSetPrimary = (value) => {
    if (primaryAddress?.id !== value) {
      dispatchPrimaryAddress(value);
    }
  };

  return (
    <div className="customer-addresslist">
      <div className="customer-addresslist__items addresslist">
        {addressList.length > 0 ? (
          <RadioGroup
            onChange={(value) => handleSetPrimary(Number(value))}
            value={primaryAddress?.id}
          >
            {addressList.map((address) => (
              <CustomerAccountAddressCard
                key={address.id}
                address={address}
                setActiveAddress={setActiveAddress}
                setShowForm={setShowForm}
              />
            ))}
          </RadioGroup>
        ) : (
          <p className="addresslist__empty">No addresses added yet</p>
        )}
      </div>

      <Button
        className="customer-addresslist__add"
        leftIcon={<AddIcon />}
        colorScheme="blue"
        size="lg"
        onClick={() => setShowForm(true)}
      >
        Add new address
      </Button>
    </div>
  );
}

export default CustomerAccountAddressList;
