import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { request } from '../api/api';
const useSignUpForm = ({
  initialValues,
  onSubmit,
  duplicateValidateId,
  duplicateValidateName,
  submitValidate,
}) => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validateCheck = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const { name } = e.target;
    if (name === 'id') {
      if (!values.id) {
        const newError = duplicateValidateId ? duplicateValidateId(values.id) : {};
        setErrors({ ...errors, id: newError });
      } else {
        const res = await request('/api/users/id', values.id);
        if (res) {
          setErrors({ ...errors, id: '중복된 아이디입니다.' });
        } else {
          setErrors({ ...errors, id: null });
          setValues({ ...values, idDuplicateCheck: true });
          setIsLoading(false);
          return true;
        }
      }
    } else if (name === 'nickname') {
      if (!values.nickname) {
        const newError = duplicateValidateName ? duplicateValidateName(values.nickname) : {};
        setErrors({ ...errors, nickname: newError });
      } else {
        const res = await request('/api/users/nickname', values.nickname);
        if (res) {
          setErrors({ ...errors, nickname: '중복된 닉네임입니다.' });
        } else {
          setErrors({ ...errors, nickname: null });
          setValues({ ...values, nameDuplicateCheck: true });
          setIsLoading(false);
          return true;
        }
      }
    }
    setIsLoading(false);
    return false;
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = submitValidate ? submitValidate(values) : {};

    if (Object.keys(newErrors).length === 0) {
      const postValues = {
        id: values.id,
        pw: values.password,
        nickname: values.nickname,
        isMale: values.gender === 'man',
      };

      const res = await onSubmit(postValues);
      if (!res || res.error) {
        return;
      }
      navigate('/login');
    }
    setErrors(newErrors);
    setIsLoading(false);
  };
  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
    validateCheck,
  };
};

export default useSignUpForm;
