import React from 'react';

import Col from '@/components/_Grid/Col';
import Text from '@/components/Text/Text';

const Cols = () => {
  return (
    <>
      <Text size="h2" weight="bold">
        Col
      </Text>
      <Col>
        <Col>col</Col>
        <Col>col</Col>
        <Col>col</Col>
      </Col>
    </>
  );
};

export default Cols;
