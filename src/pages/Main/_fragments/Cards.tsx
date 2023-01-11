import Card from '@/components/Card';
import Text from '@/components/Text/Text';
import React from 'react';

const Cards = () => {
  return (
    <>
      <Text size="h2" weight="bold">
        Card
      </Text>
      <Card size="sm">small</Card>
      <Card size="md">medium</Card>
      <Card size="lg">large</Card>
    </>
  );
};

export default Cards;
