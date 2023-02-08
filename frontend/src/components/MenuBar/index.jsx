import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
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

const MenuDiv = styled.div`
  background-color: #d9d9d9;
  width: 90%;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 0 10px;
  border-radius: 5px;
  box-sizing: border-box;

  &:hover {
    font-weight: bold;
    background-color: #bbbbbb;
  }
`;

const MenuLink = styled(Link)`
  width: 100%;
  box-sizing: border-box;
  display: block;
  text-decoration: none;
  font-size: 14px;
  line-height: 40px;
  color: black;
`;

const MenuBar = ({ clickMenu, menuList, menuBarColor, menuColor, fontSize }) => {
  return (
    <MenuBarList menuBarColor={menuBarColor} clickMenu={clickMenu}>
      {menuList.map((menu) => (
        <MenuDiv key={v4()}>
          <MenuLink menu={menu.menu} menuColor={menuColor} fontSize={fontSize} to={menu.link}>
            {menu.menu}
          </MenuLink>
        </MenuDiv>
      ))}
    </MenuBarList>
  );
};
export default MenuBar;
