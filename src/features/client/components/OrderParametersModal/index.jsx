import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Stack,
  Divider,
} from '@chakra-ui/react';

function OrderParametersModal({
  isOpen,
  onClose,
  header,
  options,
  setStateFn,
  section,
}) {
  if (section === 'addresses') {
    options = options.map(
      (addy) =>
        `${addy.street} ${addy.building}-${addy.apartment}, ${addy.city}`
    );
  }

  const handleClick = (e) => {
    setStateFn(e.target.innerText);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalBody>
          <Stack>
            {options?.map((address) => {
              return (
                <Button
                  variant="outline"
                  key={address}
                  onClick={(e) => handleClick(e)}
                >
                  {address}
                </Button>
              );
            })}
          </Stack>

          <Divider />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default OrderParametersModal;
