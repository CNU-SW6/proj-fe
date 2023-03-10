import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

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
  animation: boxFade 0.5s ease;

  @keyframes boxFade {
    0% {
      opacity: 0.5;
      transform: translate(-100%, 0);
    }
    100% {
      to {
        opacity: 0;
        transform: translate(0);
      }
    }
  }
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
    background-color: #b9b9b9;
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

const MenuBar = ({ clickMenu, menuList, menuBarColor, fontSize }) => {
  return (
    <MenuBarList menuBarColor={menuBarColor} clickMenu={clickMenu}>
      {menuList.map((menu) => (
        <MenuDiv key={v4()}>
          <MenuLink menu={menu.menu} fontSize={fontSize} to={menu.link}>
            {menu.menu}
          </MenuLink>
        </MenuDiv>
      ))}
    </MenuBarList>
  );
};

MenuBar.propTypes = {
  clickMenu: PropTypes.bool.isRequired,
  menuList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  menuBarColor: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MenuBar.defaultProps = {
  menuList: [],
  menuBarColor: '#ffffff',
  fontSize: '12px',
};
export default MenuBar;
