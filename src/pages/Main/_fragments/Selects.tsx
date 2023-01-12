import React from 'react';

import Select from '@/components/Select';
import Text from '@/components/Text/Text';

const Selects = () => {
  const [value, setValue] = React.useState('1');

  return (
    <>
      <Text weight="bold" size="h2">
        Selects
      </Text>
      <Select
        value={value}
        setValue={setValue}
        items={['1', '2', '3', '4', '5', '6', '7', '8', '9']}
      />
    </>
  );
};

export default Selects;
