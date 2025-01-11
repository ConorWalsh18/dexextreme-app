import React, { useState } from 'react';
import { Toolbar, Item } from 'devextreme-react/toolbar';
import { Drawer, List } from 'devextreme-react';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();

  const navigateToLogin = () => {
    router.push('/login');
  };

  const toggleMenu = () => {
    console.log('in toggleMenu');
    setMenuVisible(!menuVisible);
  };

  const closeOnOutsideClick = (e: any) => {
    console.log(e);

    setMenuVisible(false);
    return true;
  };

  console.log(menuVisible);

  return (
    <>
      <Toolbar>
        <Item location="before" text="My App" />
        <Item
          location="after"
          widget="dxButton"
          options={{
            text: 'Login',
            onClick: navigateToLogin,
          }}
        />
        <Item
          location="after"
          widget="dxButton"
          options={{
            icon: 'menu',
            onClick: toggleMenu,
          }}
        />
      </Toolbar>

      {/* Side menu */}
      <Drawer
        visible={menuVisible}
        openedStateMode="overlap"
        position="right"
        closeOnOutsideClick={closeOnOutsideClick}
      >
        <List
          items={['Home', 'Profile', 'Settings']}
          onItemClick={(e) => {
            // TODO: add navigation logic here
            console.log(e.itemData);

            setMenuVisible(false);
          }}
        />
      </Drawer>
    </>
  );
};

export default Navbar;
