import styled from '@emotion/styled';
import React from 'react';
const MenuDiv = styled.div`
  width: 90%;
  padding: 10px;
  background-color: ${({ menuColor }) => menuColor};
  margin: 10px auto;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: ${({ fontSize }) => `${fontSize}px`};
`;
const Menu = ({ menu, menuColor, fontSize }) => {
  return (
    <MenuDiv menuColor={menuColor} fontSize={fontSize}>
      {menu}
    </MenuDiv>
  );
};
export default Menu;
