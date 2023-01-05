import React from 'react';

import Button from '@/components/Button';
import Text from '@/components/Text/Text';

const Buttons = () => {
  return (
    <>
      <Text size="h2" weight="bold">
        Button
      </Text>
      <Button sizes="sm">small</Button>
      <Button sizes="md">medium</Button>
      <Button sizes="lg">large</Button>
      <Button color="secondary">secondary</Button>
      <Button color="tertiary">tertiary</Button>
    </>
  );
};

export default Buttons;
