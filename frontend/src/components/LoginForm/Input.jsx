import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  display: ${({ display }) => display};
  width: ${({ width }) => width};
  padding: 6px 8px;
  height: 30px;
  font-size: 14px;
  background-color: #f5f5f5;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
`;

const Input = ({ display, type, name, width, placeholder }) => {
  return (
    <StyledInput
      type={type}
      display={display}
      name={name}
      width={width}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  display: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  display: 'block',
  type: 'text',
  width: '100%',
  placeholder: '',
};

export default Input;
