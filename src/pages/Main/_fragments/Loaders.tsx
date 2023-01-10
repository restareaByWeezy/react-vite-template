import Button from '@/components/Button';
import Loader from '@/components/Lottie/Loader';
import Text from '@/components/Text/Text';
import { useState } from 'react';

const Loaders = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <Text size="h2" weight="bold">
        Spinner
      </Text>
      <Button onClick={handleClick}>Toggle</Button>
      {show && (
        <>
          <Loader size="s" />
          <Loader size="m" />
          <Loader size="l" />
        </>
      )}
    </>
  );
};

export default Loaders;
