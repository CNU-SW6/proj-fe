import React from 'react';
import styled from '@emotion/styled';
import Input from './Input';

const ConfirmInputDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ConfirmButton = styled.button`
  width: 20%;
  height: 30px;
  display: inline-block;
  border: none;
  border-radius: 10px;
  background-color: #fff9c3;
  font-size: 12px;
  padding: 0;
`;

const ConfirmInput = ({ name, placeholder, onChange }) => {
  return (
    <ConfirmInputDiv>
      <Input display="inline-block" width="75%" name={name} placeholder={placeholder} />
      <ConfirmButton type="button">중복확인</ConfirmButton>
    </ConfirmInputDiv>
  );
};

export default ConfirmInput;
