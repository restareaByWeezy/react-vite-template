import { Modal } from '@/components/Modal';
import Text from '@/components/Text/Text';
import React from 'react';

const Modals = () => {
  return (
    <>
      <Text size="h2" weight="bold">
        Modal
      </Text>
      <Modal trigger="Open Modal">123</Modal>
    </>
  );
};

export default Modals;
