import React from 'react';
import styled from '@emotion/styled';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import { ColorList } from '../../assets/ColorList';
import ColorSpan from './ColorSpan';
const ColorListDiv = styled.div`
  width: 100%;
  height: 50%;
  margin: 0;
  text-align: center;
  padding-top: 3%;
  box-sizing: border-box;
`;

const ColorParagraph = styled.p`
  font-size: 15px;
  text-align: center;
  margin: 0;
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

const ShowColorList = ({ item, getColor }) => {
  const handleColorSelect = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const getName = e.target.className;
    const targetColor = getName.split(' ')[0].split('_')[1];
    if (item === '') {
      getColor(targetColor);
    } else {
      getColor(item, targetColor);
    }
  };

  return (
    <ColorListDiv>
      <ColorParagraph>색상선택</ColorParagraph>
      <ColorListUl>
        {ColorList.map((c) => {
          return (
            <ColorListLi key={v4()} onClick={handleColorSelect}>
              <ColorSpan color={c} size={30} />
            </ColorListLi>
          );
        })}
      </ColorListUl>
    </ColorListDiv>
  );
};

ShowColorList.propTypes = {
  item: PropTypes.string,
  getColor: PropTypes.func.isRequired,
};

ShowColorList.defaultProps = {
  item: '',
};

export default ShowColorList;
