import React from 'react';
import styled from '@emotion/styled';
import AddItemButton from '../Button/AddItemButton';
import ColorModal from './ColorModal';
import MainDiv from '../MobileSection/MainDiv';

const DUMMY_DATA_2 = [
  {
    id: 'cap',
    item: '모자',
    color: 'wheat',
  },
  {
    id: 'top',
    item: '상의',
    color: 'ivory',
  },
  {
    id: 'bottom',
    item: '하의',
    color: 'lightblue',
  },
  {
    id: 'shoes',
    item: '신발',
    color: 'lightgray',
  },
];

const ItemModalDiv = styled.div`
  width: 15%;
  height: 60%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80% 20%;
  position: fixed;
  right: 5%;
  top: 20%;
`;

function ItemModal() {
  return (
    <MainDiv>
      <ItemModalDiv>
        <ColorModal items={DUMMY_DATA_2} />
        <AddItemButton />
      </ItemModalDiv>
    </MainDiv>
  );
}
export default ItemModal;
