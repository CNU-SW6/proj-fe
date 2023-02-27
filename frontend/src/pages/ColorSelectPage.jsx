import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { selectColor } from '../redux/items/actions';
import ShowColorList from '../components/Color/ShowColorList';
import DefaultSection from '../components/MobileSection/DefaultSection';

const ItemDiv = styled.div`
  width: 100%;
  background-color: ${({ color }) => color};
  height: 30%;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonDiv = styled.div`
  width: 100%;
  height: 10%;
  text-align: center;
`;

const SelectBtn = styled.button`
  width: 80%;
  height: 50%;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #bc2649;
  cursor: pointer;
`;
const ColorSelectPage = ({ items }) => {
  const location = useLocation();
  const ID = location.state.id;
  const getItem = items.filter((item) => item.id === ID)[0];

  const [color, setColor] = useState(getItem.color);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getColor = (value) => {
    setColor(value);
  };

  const handleSubmit = () => {
    dispatch(selectColor(ID, color));
    navigate('/lookgood');
  };

  return (
    <DefaultSection>
      <ItemDiv color={color} item={getItem.id}>
        <img src={getItem.img} alt={getItem.id} height="100%" />
      </ItemDiv>
      <ShowColorList getColor={getColor} />
      <ButtonDiv>
        <SelectBtn type="button" onClick={handleSubmit}>
          선택완료
        </SelectBtn>
      </ButtonDiv>
    </DefaultSection>
  );
};

ColorSelectPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default ColorSelectPage;
