import React from 'react';

import Row from '@/components/_Grid/Row';
import Text from '@/components/Text/Text';

const Rows = () => {
  return (
    <>
      <Text size="h2" weight="bold">
        Row
      </Text>
      <Row>
        <Row>row</Row>
        <Row>row</Row>
        <Row>row</Row>
      </Row>
    </>
  );
};

export default Rows;
