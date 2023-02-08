import React from 'react';
import styled from '@emotion/styled';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ColorList } from '../../assets/ColorList';
import ColorSpan from './ColorSpan';
import { selectColor } from '../../redux/items/actions';
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
const ShowColorList = ({ id, color, getColor }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleColorSelect = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const getName = e.target.className;
    const targetColor = getName.split(' ')[0].split('_')[1];
    getColor(targetColor);
  };

  const handleSubmit = () => {
    dispatch(selectColor(id, color));
    navigate('/lookgood');
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
      <SelectBtn onClick={handleSubmit}>선택완료</SelectBtn>
    </ColorListDiv>
  );
};

ShowColorList.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  getColor: PropTypes.func.isRequired,
};

export default ShowColorList;
