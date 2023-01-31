import React from 'react';
import styled from '@emotion/styled';
import { v4 } from 'uuid';
import { ColorList } from '../../assets/ColorList';
import ColorSpan from './ColorSpan';

const ColorListDiv = styled.div`
  width: 100%;
  height: 50%;
  margin: 0;
  text-align: center;
`;

const ColorParagraph = styled.p`
  font-size: 15px;
  text-align: center;
`;

const ColorListUl = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
`;

const ColorListLi = styled.li`
  list-style: none;
  padding: 5px 5px;
  box-sizing: border-box;
`;

const SelectBtn = styled.button`
  width: 80%;
  height: 10%;
  margin-top: 3%;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #f8bed4;
  cursor: pointer;
`;
const ShowColorList = () => {
  return (
    <ColorListDiv>
      <ColorParagraph>색상선택</ColorParagraph>
      <ColorListUl>
        {ColorList.map((color) => {
          return (
            <ColorListLi key={v4()}>
              <ColorSpan color={color} size={30} />
            </ColorListLi>
          );
        })}
      </ColorListUl>
      <SelectBtn>선택완료</SelectBtn>
    </ColorListDiv>
  );
};

export default ShowColorList;
