import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Header from '../Header';
import MenuBar from '../MenuBar';
const MobileDiv = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
const menuList = ['홈 화면', '마이페이지', '공유페이지', '컨설팅'];

const DefaultSection = ({ children }) => {
  const [clickMenu, setClickMenu] = useState(false);

  const clickMenuIcon = () => {
    setClickMenu(!clickMenu);
  };

  useEffect(() => {
    console.log(clickMenu);
  }, [clickMenu]);

  return (
    <MobileDiv>
      <Header clickMenuIcon={clickMenuIcon} />
      <MenuBar
        clickMenu={clickMenu}
        menuList={menuList}
        menuBarColor="#B0B0B0"
        menuColor="#D9D9D9"
        fontSize={13}
      />
      {children}
    </MobileDiv>
  );
};

export default DefaultSection;
