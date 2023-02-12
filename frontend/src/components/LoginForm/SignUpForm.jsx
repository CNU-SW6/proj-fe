import React from 'react';
import styled from '@emotion/styled';
import Input from './Input';
import CardForm from './CardForm';
import Title from './Title';
import useForm from '../../hooks/useForm';
import ErrorText from './ErrorText';
import Button from './Button';
import ConfirmInput from './ConfirmInput';

const StyledDiv = styled.div`
  height: 10%;
`;

const StyledSelect = styled.select`
  width: 40%;
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
      name: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit,
    validate: ({ name, password, passwordConfirm }) => {
      const newErrors = {};
      if (!name) {
        newErrors.name = '이름을 입력해주세요.';
      }
      if (!password) {
        newErrors.password = '비밀번호를 입력해주세요.';
      }
      if (password !== passwordConfirm) {
        newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
      }
      return newErrors;
    },
  });

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>회원가입</Title>
      <div>
        <ConfirmInput type="text" name="id" placeholder="아이디" onChange={handleChange} />
        {errors.id && <ErrorText>{errors.id}</ErrorText>}
      </div>
      <div>
        <ConfirmInput type="text" name="name" placeholder="닉네임" onChange={handleChange} />
        {errors.name && <ErrorText>{errors.name}</ErrorText>}
      </div>
      <div>
        <Input
          type="password"
          name="password"
          width="75%"
          placeholder="비밀번호"
          style={{ marginTop: 8 }}
          onChange={handleChange}
        />
        {errors.password && <ErrorText>{errors.password}</ErrorText>}
      </div>
      <div>
        <Input
          type="password"
          name="passwordConfirm"
          width="75%"
          placeholder="비밀번호 확인"
          style={{ marginTop: 8 }}
          onChange={handleChange}
        />
        {errors.passwordConfirm && <ErrorText>{errors.passwordConfirm}</ErrorText>}
      </div>
      <StyledDiv>
        <StyledSelect>
          <StyledOption disabled selected value="none">
            성별 선택
          </StyledOption>
          <StyledOption value="man">남</StyledOption>
          <StyledOption value="woman">여</StyledOption>
        </StyledSelect>
      </StyledDiv>

      <Button type="submit" disabled={isLoading} style={{ marginTop: 16 }}>
        회원가입
      </Button>
    </CardForm>
  );
};

export default SignUpForm;
