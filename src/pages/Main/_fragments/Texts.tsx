import React from 'react';

import Col from '@/components/_Grid/Col';
import Text from '@/components/Text/Text';

const Texts = () => {
  return (
    <>
      <Text size="h2" weight="bold">
        Text
      </Text>
      <Col>
        <Text size="h1">h1</Text>
        <Text size="h2">h2</Text>
        <Text size="h4">h4</Text>
        <Text color="primary">primary</Text>
        <Text color="secondary">secondary</Text>
        <Text color="tertiary">tertiary</Text>
        <Text weight="semiBold">semiBold</Text>
        <Text weight="bold">bold</Text>
      </Col>
    </>
  );
};

export default Texts;
