import React from 'react';
import styled from '@emotion/styled';
import DefaultSection from '../components/MobileSection/DefaultSection';
import SignUpForm from '../components/LoginForm/SignUpForm';
const SignUpFormDiv = styled.div`
  width: 100%;
  height: 70%;
  box-sizing: border-box;
  display: grid;
  place-items: center;
`;

const SignupPage = () => {
  return (
    <DefaultSection>
      <SignUpFormDiv>
        <SignUpForm />
      </SignUpFormDiv>
    </DefaultSection>
  );
};

export default SignupPage;
