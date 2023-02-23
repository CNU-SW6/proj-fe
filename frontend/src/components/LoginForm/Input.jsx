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

const Input = ({ className, display, type, name, width, placeholder, onChange, value }) => {
  return (
    <StyledInput
      className={className}
      type={type}
      display={display}
      name={name}
      width={width}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      pattern="^[a-zA-Z0-9]+$"
      title="영문 대소문자, 숫자로 이루어진 3~10 자를 입력해주세요."
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  display: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  display: 'block',
  type: 'text',
  width: '100%',
  placeholder: '',
  value: '',
};

export default Input;
