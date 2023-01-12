import React, { Dispatch, Fragment, SetStateAction, useState } from 'react';

import Button from '@/components/Button';
import { button } from '@/components/Button/Button.css';
import Text from '@/components/Text/Text';
import Toast from '@/components/Toast';

type Direction = 'right' | 'left' | 'up' | 'down';

const Toasts = () => {
  const [openRightToast, setOpenRightToast] = useState(false);
  const [openLeftToast, setOpenLeftToast] = useState(false);
  const [openUpToast, setOpenUpToast] = useState(false);
  const [openDownToast, setOpenDownToast] = useState(false);

  const toasts: {
    direction: Direction;
    state: boolean;
    setState: Dispatch<SetStateAction<boolean>>;
  }[] = [
    { direction: 'right', state: openRightToast, setState: setOpenRightToast },
    { direction: 'left', state: openLeftToast, setState: setOpenLeftToast },
    { direction: 'up', setState: setOpenUpToast, state: openUpToast },
    { direction: 'down', setState: setOpenDownToast, state: openDownToast },
  ];

  const toastList = toasts.map(
    (toast: {
      direction: Direction;
      setState: Dispatch<SetStateAction<boolean>>;
      state: boolean;
    }) => {
      return (
        <Fragment key={toast.direction}>
          <Button
            key={toast.direction}
            onClick={() => {
              toast.setState(true);
            }}
          >
            {toast.direction}
          </Button>
          <Toast
            direction={toast.direction}
            openToast={toast.state}
            setOpenToast={toast.setState}
            title="Title"
            close={'close'}
            closeStyle={button()}
          />
        </Fragment>
      );
    },
  );

  return (
    <>
      <Text size="h2" weight="bold">
        Toast
      </Text>
      {toastList}
    </>
  );
};

export default Toasts;
