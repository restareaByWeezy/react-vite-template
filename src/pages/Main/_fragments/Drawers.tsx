import React from 'react';

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/Drawer';
import Text from '@/components/Text/Text';

const Drawers = () => {
  return (
    <>
      <Text size="h2" weight="bold">
        Drawer
      </Text>
      <Drawer>
        <DrawerTrigger>Right</DrawerTrigger>
        <DrawerContent>
          <div style={{ width: '100%', background: 'red' }}>123213</div>
        </DrawerContent>
      </Drawer>
      <Drawer>
        <DrawerTrigger>Left</DrawerTrigger>
        <DrawerContent side="left">
          <div style={{ width: '100%', background: 'red' }}>123213</div>
        </DrawerContent>
      </Drawer>
      <Drawer>
        <DrawerTrigger>Top</DrawerTrigger>
        <DrawerContent side="top">
          <div style={{ width: '100%', background: 'red' }}>123213</div>
        </DrawerContent>
      </Drawer>
      <Drawer>
        <DrawerTrigger>Bottom</DrawerTrigger>
        <DrawerContent side="bottom">
          <div style={{ width: '100%', background: 'red' }}>123213</div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Drawers;
