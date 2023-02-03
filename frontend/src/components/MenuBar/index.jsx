import styled from '@emotion/styled';
import React from 'react';
import { v4 } from 'uuid';
import Menu from './Menu';
const MenuBarList = styled.div`
  height: 90%;
  width: 70%;
  margin: 0;
  padding: 10px 0;
  box-sizing: border-box;
  background-color: ${({ menuBarColor }) => menuBarColor};
  position: fixed;
  display: ${({ clickMenu }) => (clickMenu ? 'block' : 'none')};
  z-index: 1000;
`;

const MenuBar = ({ clickMenu, menuList, menuBarColor, menuColor, fontSize }) => {
  return (
    <MenuBarList menuBarColor={menuBarColor} clickMenu={clickMenu}>
      {menuList.map((menu) => (
        <Menu key={v4()} menu={menu} menuColor={menuColor} fontSize={fontSize} />
      ))}
    </MenuBarList>
  );
};
export default MenuBar;
