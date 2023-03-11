import React from 'react';

import { Icon, Button, Tag, Radio, Tooltip } from '@chakra-ui/react';
import { BiHome } from 'react-icons/all.js';

import './CustomerAccountAddressCard.scss';

function CustomerAccountAddressCard({
  address,
  setActiveAddress,
  setShowForm,
}) {
  const handleEdit = (address) => {
    setActiveAddress(address);
    setShowForm(true);
  };

  return (
    <div className="address-card">
      <Tooltip
        display={{ base: 'none', md: 'block' }}
        label="Set as primary"
        shouldWrapChildren
        hasArrow
        placement="bottom"
        bg="green.500"
      >
        <Radio
          className="address-card__radio"
          size="lg"
          colorScheme="green"
          value={address.id}
        ></Radio>
      </Tooltip>

      <div className="address-card__icon">
        <Icon as={BiHome} boxSize={5} color="white" />
      </div>
      <div className="address-card__value">
        <p>{`${address.city}, ${address.street}, ${address.building}`}</p>
        {address.primary && (
          <Tag
            className="address-card__tag"
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
        className="address-card__button"
        onClick={() => handleEdit(address)}
      >
        Edit
      </Button>
    </div>
  );
}

export default CustomerAccountAddressCard;
