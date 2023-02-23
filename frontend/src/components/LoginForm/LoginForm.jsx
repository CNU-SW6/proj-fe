import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import Button from './Button';
import ErrorText from './ErrorText';
import CardForm from './CardForm';
import Title from './Title';
import useLoginForm from '../../hooks/useLoginForm';

const InputDiv = styled.div`
  width: 100%;
  height: 50px;
`;

const ButtonsDiv = styled.div`
  width: 100%;
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonDiv = styled.div`
  display: inline-block;
  width: 45%;
`;
const LoginForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const { values, errors, isLoading, handleChange, handleSubmit } = useLoginForm({
    initialValues: {
      id: '',
      password: '',
    },
    onSubmit,
    validate: ({ id, password }) => {
      const newErrors = {};
      if (!id) {
        newErrors.id = '아이디를 입력해주세요.';
      }
      if (!password) {
        newErrors.password = '비밀번호를 입력해주세요.';
      }
      return newErrors;
    },
  });

  const handleClick = (e) => {
    e.preventDefault();
    const ID = e.target.dataset.id;
    if (ID === 'signup') {
      navigate('/signup');
    }
  };

  return (
    <CardForm onSubmit={handleSubmit}>
      <Title>로그인</Title>
      <InputDiv className="ID_Section">
        <Input
          type="text"
          name="id"
          placeholder="아이디"
          onChange={handleChange}
          value={values.id}
        />
        {errors.id && <ErrorText>{errors.id}</ErrorText>}
      </InputDiv>
      <InputDiv className="PW_Section">
        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          style={{ marginTop: 8 }}
          onChange={handleChange}
          value={values.password}
        />
        {errors.password && <ErrorText>{errors.password}</ErrorText>}
      </InputDiv>

      <Button type="submit" disabled={isLoading} style={{ marginTop: 16 }}>
        로그인
      </Button>
      <ButtonsDiv>
        <ButtonDiv>
          <Button type="button" data-id="signup" onClick={handleClick}>
            회원가입
          </Button>
        </ButtonDiv>
        <ButtonDiv>
          <Button type="button" data-id="find">
            ID/PW 찾기
          </Button>
        </ButtonDiv>
      </ButtonsDiv>
    </CardForm>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
