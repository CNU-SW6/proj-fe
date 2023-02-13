import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const ColorCircleListDiv = styled.div`
  width: 15%;
  position: absolute;
  display: flex;
  flex-direction: column;
  place-items: center;
  left: 2%;
  top: 15%;
`;

const SelectedColorParagraph = styled.p`
  font-size: 10px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  position: relative;
  top: ${({ index }) => (index > 0 ? `${-10 * index}px` : 0)};
  z-index: ${({ index }) => index};
`;

const ColorCircleList = ({ colorList }) => {
  return (
    <ColorCircleListDiv className="colorCircleListDiv">
      <SelectedColorParagraph>선택한 색상</SelectedColorParagraph>
      {colorList.map((color, index) => (
        <Circle className={`circle${index}`} index={index} key={v4()} color={color} />
      ))}
    </ColorCircleListDiv>
  );
};

export default ColorCircleList;

ColorCircleList.propTypes = {
  colorList: PropTypes.arrayOf(PropTypes.string),
};

ColorCircleList.defaultProps = {
  colorList: ['#000000', '#000000', '#000000', '#000000'],
};
