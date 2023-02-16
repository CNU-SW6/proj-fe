import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Input from './Input';
import { request } from '../../api/api';
const ConfirmInputDiv = styled.div`
  width: 100%;
  display: inline-block;
  justify-content: space-between;
`;

const ConfirmButton = styled.button`
  margin-left: 5%;
  width: 20%;
  height: 30px;
  display: inline-block;
  border: none;
  border-radius: 10px;
  background-color: #fff9c3;
  font-size: 12px;
  padding: 0;
`;

const ErrorText = styled.span`
  font-size: 12px;
  color: ${({ name }) => (name === 'error' ? 'red' : 'black')};
`;

const ConfirmId = ({ name, placeholder, onChange }) => {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const handleClick = async () => {
    if (value) {
      const res = await request('/api/users/id', value);
      if (!res.data && res.error === false) {
        setMessage('사용 가능한 아이디입니다.');
        setError('');
      } else {
        setError('중복된 아이디입니다.');
      }
    } else {
      setError('아이디를 입력해주세요.');
    }
  };
  const changeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <ConfirmInputDiv>
      <Input
        display="inline-block"
        width="75%"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <ConfirmButton type="button" onClick={handleClick}>
        중복확인
      </ConfirmButton>
      <ErrorText name={error ? 'error' : 'message'}>{error || message}</ErrorText>
    </ConfirmInputDiv>
  );
};

ConfirmId.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

ConfirmId.defaultProps = {
  name: '',
  placeholder: '',
};

export default ConfirmId;
