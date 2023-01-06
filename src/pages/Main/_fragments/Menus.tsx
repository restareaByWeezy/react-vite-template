import MenuList from '@/components/Menu/MenuList';
import Text from '@/components/Text/Text';
import React from 'react';

const data = [
  {
    id: '1',
    name: 'Menu 1',
    order: 1,
    child: [
      {
        id: '1-1',
        name: 'Menu 1-1',
        order: 2,
      },
      {
        id: '1-2',
        name: 'Menu 1-2',
        order: 3,
      },
    ],
  },
  {
    id: '2',
    name: 'Menu 2',
    order: 4,
  },
  {
    id: '3',
    name: 'Menu 3',
    order: 5,
  },
];

const Menus = () => {
  return (
    <div>
      <Text size="h2" weight="bold">
        Menus
      </Text>
      <MenuList
        menus={data}
        onClick={() => {
          console.log('clicked');
        }}
      />
    </div>
  );
};

export default Menus;
