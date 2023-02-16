import React from 'react';
import DefaultSection from '../components/MobileSection/DefaultSection';
import SignUpForm from '../components/LoginForm/SignUpForm';

const SignupPage = () => {
  const handleSubmit = () => {};
  const handleClick = () => {};
  return (
    <DefaultSection>
      <SignUpForm onSubmit={handleSubmit} onClick={handleClick} />
    </DefaultSection>
  );
};

export default SignupPage;
