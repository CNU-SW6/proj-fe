import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ColorAreaDiv = styled.div`
  text-align: center;
  padding-bottom: 5px;
  box-sizing: border-box;
`;

const ColorAreaTitle = styled.p`
  font-size: 10px;
`;

const ColorAreaValue = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${(props) => props.color || 'black'};
  box-shadow: 1px 1px 3px 1px #ccc;
  margin: auto;
`;

const ColorArea = ({ item }) => {
  return (
    <ColorAreaDiv>
      <ColorAreaTitle>{item.item}</ColorAreaTitle>
      <ColorAreaValue className={`${item.id}_Section`} color={item.color} />
    </ColorAreaDiv>
  );
};

ColorArea.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ColorArea;
