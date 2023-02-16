import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Input from './Input';
import CardForm from './CardForm';
import Title from './Title';
import useForm from '../../hooks/useForm';
import ErrorText from './ErrorText';
import Button from './Button';
import ConfirmId from './ConfirmId';
import ConfirmName from './ConfirmName';

const StyledDiv = styled.div`
  height: 50px;
`;

const StyledSelect = styled.select`
  width: 40%;
  display: block;
  border-radius: 5px;
  background-color: #f5f5f5;
`;

const StyledOption = styled.option`
  border-radius: 5px;
  background-color: #f5f5f5;
`;

const SignUpForm = ({ onSubmit }) => {
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      id: '',
      name: '',
      password: '',
      passwordConfirm: '',
      gender: '',
    },
    onSubmit,
    validate: ({ password, passwordConfirm, gender }) => {
      const newErrors = {};
      if (!password) {
        newErrors.password = '비밀번호를 입력해주세요.';
      }
      if (password !== passwordConfirm) {
        newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
      }
      if (!gender) {
        newErrors.gender = '성별을 입력해주세요.';
      }
      return newErrors;
    },
  });

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>회원가입</Title>
      <StyledDiv>
        <ConfirmId type="text" name="id" placeholder="아이디" onChange={handleChange} />
      </StyledDiv>
      <StyledDiv>
        <ConfirmName type="text" name="name" placeholder="닉네임" onChange={handleChange} />
      </StyledDiv>
      <StyledDiv>
        <Input
          type="password"
          name="password"
          width="75%"
          placeholder="비밀번호"
          style={{ marginTop: 8 }}
          onChange={handleChange}
        />
        {errors.password && <ErrorText>{errors.password}</ErrorText>}
      </StyledDiv>
      <StyledDiv>
        <Input
          type="password"
          name="passwordConfirm"
          width="75%"
          placeholder="비밀번호 확인"
          style={{ marginTop: 8 }}
          onChange={handleChange}
        />
        {errors.passwordConfirm && <ErrorText>{errors.passwordConfirm}</ErrorText>}
      </StyledDiv>
      <StyledDiv>
        <StyledSelect name="gender" onChange={handleChange} defaultValue="none">
          <StyledOption value="none" disabled>
            성별 선택
          </StyledOption>
          <StyledOption value="man">남</StyledOption>
          <StyledOption value="woman">여</StyledOption>
        </StyledSelect>
        {errors.gender && <ErrorText>{errors.gender}</ErrorText>}
      </StyledDiv>
      <Button type="submit" disabled={isLoading} style={{ marginTop: 16 }} onSubmit={handleSubmit}>
        회원가입
      </Button>
    </CardForm>
  );
};
export default SignUpForm;

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
