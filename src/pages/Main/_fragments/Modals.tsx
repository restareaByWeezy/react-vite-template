import React from 'react';

import { Modal } from '@/components/Modal';
import Text from '@/components/Text/Text';

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
