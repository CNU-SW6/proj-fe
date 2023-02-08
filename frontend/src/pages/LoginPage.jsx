import React from 'react';
import styled from '@emotion/styled';
import LoginForm from '../components/LoginForm/LoginForm';
import DefaultSection from '../components/MobileSection/DefaultSection';

const LoginFormDiv = styled.div`
  width: 100%;
  height: 70%;
  box-sizing: border-box;
  display: grid;
  place-items: center;
`;

const LoginPage = () => {
  const handleSubmit = () => {
    console.log('로그인 버튼 클릭!');
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
