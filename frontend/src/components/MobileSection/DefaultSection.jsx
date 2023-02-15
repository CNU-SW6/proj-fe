import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Header from '../Header';
import MenuBar from '../MenuBar';

const MobileDiv = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: scroll;
`;

const menuList = [
  {
    menu: '홈 화면',
    link: '/lookgood',
  },
  {
    menu: '마이페이지',
    link: '/mypage',
  },
  {
    menu: '공유페이지',
    link: '/share',
  },
  {
    menu: '컨설팅',
    link: '/',
  },
];

const DefaultSection = ({ children }) => {
  const [clickMenu, setClickMenu] = useState(false);

  const clickMenuIcon = () => {
    setClickMenu(!clickMenu);
  };

  return (
    <MobileDiv>
      <Header clickMenuIcon={clickMenuIcon} />
      <MenuBar clickMenu={clickMenu} menuList={menuList} menuBarColor="#a3a3a3" fontSize={13} />
      {children}
    </MobileDiv>
  );
};

DefaultSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
export default DefaultSection;
