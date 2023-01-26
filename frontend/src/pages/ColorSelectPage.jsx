import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import qs from 'query-string';
import Header from '../components/Header';
import MainDiv from '../components/MobileSection/MainDiv';
import ShowColorList from '../components/Color/ShowColorList';
import { getRandomItem } from '../assets/ImageList';

const ItemDiv = styled.div`
  width: 100%;
  background-color: ${({ color }) => color};
  height: 40%;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function ColorSelectPage() {
  const query = qs.parse(useLocation().search);
  const { color, item } = query;

  return (
    <MainDiv>
      <Header />
      <ItemDiv color={color} item={item}>
        <img src={`${getRandomItem(item)}`} alt="cap" height="90%" />
      </ItemDiv>
      <ShowColorList />
    </MainDiv>
  );
}

export default ColorSelectPage;
