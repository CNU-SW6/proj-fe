import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { createSearchParams, useNavigate } from 'react-router-dom';

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

function ColorArea({ id, item, color }) {
  const navigate = useNavigate();

  const handleColorSelect = () => {
    navigate({
      pathname: './color',
      search: createSearchParams({
        item: `${id}`,
        color: `${color}`,
      }).toString(),
    });
  };

  return (
    <ColorAreaDiv>
      <ColorAreaTitle>{item}</ColorAreaTitle>
      <ColorAreaValue color={color} onClick={handleColorSelect} />
    </ColorAreaDiv>
  );
}

ColorArea.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  color: PropTypes.string,
};

ColorArea.defaultProps = {
  color: 'black',
};
export default ColorArea;
