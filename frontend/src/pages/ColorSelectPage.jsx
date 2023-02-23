import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
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
const ColorSelectPage = ({ items }) => {
  const location = useLocation();
  const ID = location.state.id;
  const getItem = items.filter((item) => item.id === ID)[0];

  const [color, setColor] = useState(getItem.color);

  const getColor = (value) => {
    setColor(value);
  };

  return (
    <DefaultSection>
      <ItemDiv color={color} item={getItem.id}>
        <img src={getItem.img} alt={getItem.id} height="100%" />
      </ItemDiv>
      <ShowColorList id={ID} color={color} getColor={getColor} />
    </DefaultSection>
  );
};

ColorSelectPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default ColorSelectPage;
