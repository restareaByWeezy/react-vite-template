import Select from '@/components/Select';
import Text from '@/components/Text/Text';
import React from 'react';

const Selects = () => {
  return (
    <>
      <Text weight="bold" size="h2">
        Selects
      </Text>
      <Select items={['2', '3']} />
    </>
  );
};

export default Selects;
