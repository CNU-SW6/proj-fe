import React from 'react';
import DefaultSection from '../components/MobileSection/DefaultSection';
import SignUpForm from '../components/LoginForm/SignUpForm';
import { signUp } from '../api/api';

const SignupPage = () => {
  const handleSubmit = async (data) => {
    const result = await signUp(JSON.stringify(data));
    return result;
  };
  return (
    <DefaultSection>
      <SignUpForm onSubmit={handleSubmit} />
    </DefaultSection>
  );
};

export default SignupPage;
