import React, { MouseEvent, useState } from 'react';

import * as styles from './MenuList.css';

interface ChildMenuProps {
  id: string;
  name: string;
  order: number;
  parentId?: string;
}

interface MenuProps extends ChildMenuProps {
  child?: ChildMenuProps[];
}

interface MenusProps {
  menus: MenuProps[];
  onClick: (id: string) => void;
}

const MenuList = ({ menus, onClick }: MenusProps) => {
  const [showChildMenu, setShowChildMenu] = useState(false);

  const handleClickMenu = (e: MouseEvent<HTMLLIElement>) => {
    const { id } = e.currentTarget;
    const menu = menus.find((m) => m.id === id);
    if (menu?.child) {
      setShowChildMenu(!showChildMenu);
      return;
    }
    onClick(id);
  };

  const menuList = menus.map((menu) => {
    let childMenus: JSX.Element[] = [];
    if (menu.child) {
      childMenus = menu.child.map((childMenu) => {
        return (
          <li
            key={childMenu.id}
            id={childMenu.id}
            className={styles.subMenu}
            onClick={(e) => {
              e.stopPropagation();
              onClick(childMenu.id);
            }}
          >
            {childMenu.name}
          </li>
        );
      });
    }
    return (
      <li key={menu.id} onClick={handleClickMenu} id={menu.id}>
        {menu.name}
        {menu.child && showChildMenu && (
          <ul className={styles.subMenuWrapper}>{childMenus}</ul>
        )}
      </li>
    );
  });

  return <ul className={styles.menuWrapper}>{menuList}</ul>;
};

export default MenuList;
