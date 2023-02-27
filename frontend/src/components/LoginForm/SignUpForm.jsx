import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Input from './Input';
import CardForm from './CardForm';
import Title from './Title';
import ErrorText from './ErrorText';
import Button from './Button';
import useSignUpForm from '../../hooks/useSignUpForm';

const StyledDiv = styled.div`
  height: 50px;
`;

const StyledSelect = styled.select`
  width: 40%;
  display: block;
  border-radius: 5px;
  background-color: #f5f5f5;
  color: black;
`;

const StyledOption = styled.option`
  border-radius: 5px;
  background-color: #f5f5f5;
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
  color: black;
`;

const SignUpForm = ({ onSubmit }) => {
  const { errors, isLoading, handleChange, handleSubmit, validateCheck } = useSignUpForm({
    initialValues: {
      id: '',
      nickname: '',
      password: '',
      passwordConfirm: '',
      gender: '',
      idDuplicateCheck: false,
      nameDuplicateCheck: false,
    },
    onSubmit,
    duplicateValidateId: (id) => {
      if (!id) {
        return '아이디를 입력해주세요.';
      }
      return '';
    },
    duplicateValidateName: (nickname) => {
      if (!nickname) {
        return '닉네임을 입력해주세요.';
      }
      return '';
    },
    submitValidate: ({
      password,
      passwordConfirm,
      gender,
      idDuplicateCheck,
      nameDuplicateCheck,
    }) => {
      const newErrors = {};
      if (!idDuplicateCheck) {
        newErrors.id = '아이디 중복 여부를 확인해주세요.';
      }
      if (!nameDuplicateCheck) {
        newErrors.nickname = '닉네임 중복 여부를 확인해주세요.';
      }
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
        <Input
          className="idInput"
          display="inline-block"
          width="75%"
          name="id"
          placeholder="아이디"
          onChange={handleChange}
        />
        <ConfirmButton name="id" type="button" onClick={validateCheck}>
          중복확인
        </ConfirmButton>
        {errors.id && <ErrorText>{errors.id}</ErrorText>}
      </StyledDiv>
      <StyledDiv>
        <Input
          display="inline-block"
          width="75%"
          name="nickname"
          placeholder="닉네임"
          onChange={handleChange}
        />
        <ConfirmButton name="nickname" type="button" onClick={validateCheck}>
          중복확인
        </ConfirmButton>
        {errors.nickname && <ErrorText>{errors.nickname}</ErrorText>}
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
