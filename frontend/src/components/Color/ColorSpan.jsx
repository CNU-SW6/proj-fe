import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ColorDiv = styled.div`
  width: ${({ size }) => size && `${size}px`};
  height: ${({ size }) => size && `${size}px`};
  background-color: ${({ color }) => color};
  border: 1px solid lightgray;
  box-sizing: border-box;
`;

const ColorSpan = ({ color, size, ...props }) => {
  const handleColorSelect = (e) => {
    console.log(e.target);
  };
  return <ColorDiv color={color} size={size} {...props} onClick={handleColorSelect} />;
};

ColorSpan.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number,
};

ColorSpan.defaultProps = {
  size: 30,
};
export default ColorSpan;
