import React from 'react';

import { button } from '@/components/Button/Button.css';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/Drawer';
import Text from '@/components/Text/Text';

const Drawers = () => {
  return (
    <>
      <Text size="h2" weight="bold">
        Drawer
      </Text>
      <Drawer>
        <DrawerTrigger className={button()}>Right</DrawerTrigger>
        <DrawerContent>
          <div style={{ width: '100%', background: 'red' }}>123213</div>
        </DrawerContent>
      </Drawer>
      <Drawer>
        <DrawerTrigger className={button()}>Left</DrawerTrigger>
        <DrawerContent side="left">
          <div style={{ width: '100%', background: 'red' }}>123213</div>
        </DrawerContent>
      </Drawer>
      <Drawer>
        <DrawerTrigger className={button()}>Top</DrawerTrigger>
        <DrawerContent side="top">
          <div style={{ width: '100%', background: 'red' }}>123213</div>
        </DrawerContent>
      </Drawer>
      <Drawer>
        <DrawerTrigger className={button()}>Bottom</DrawerTrigger>
        <DrawerContent side="bottom">
          <div style={{ width: '100%', background: 'red' }}>123213</div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Drawers;
