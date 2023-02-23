import React from 'react';
import styled from '@emotion/styled';
import LoginForm from '../components/LoginForm/LoginForm';
import DefaultSection from '../components/MobileSection/DefaultSection';
import { login } from '../api/api';
const LoginFormDiv = styled.div`
  width: 100%;
  height: 70%;
  box-sizing: border-box;
  display: grid;
  place-items: center;
`;

const LoginPage = () => {
  const handleSubmit = async (data) => {
    const result = await login(JSON.stringify(data));
    return result;
  };
  return (
    <DefaultSection>
      <LoginFormDiv>
        <LoginForm onSubmit={handleSubmit} />
      </LoginFormDiv>
    </DefaultSection>
  );
};

export default LoginPage;
