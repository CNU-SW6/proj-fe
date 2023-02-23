import styled from '@emotion/styled';

const Button = styled.button`
  display: block;
  height: 40px;
  background-color: #d9d9d9;
  border: none;
  border-radius: 7px;
  box-sizing: border-box;
  padding: 8px 6px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #aaa;
  }

  &:active {
    background-color: #ccc;
  }

  &:disabled {
    background-color: #888;
  }
`;

export default Button;
