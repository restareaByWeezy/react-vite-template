import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Text from '@/components/Text/Text';
import React from 'react';

const Modals = () => {
  return (
    <>
      <Text size="h2" weight="bold">
        Modal
      </Text>
      <Modal trigger={<Button>Open modal</Button>}>hi</Modal>
    </>
  );
};

export default Modals;
