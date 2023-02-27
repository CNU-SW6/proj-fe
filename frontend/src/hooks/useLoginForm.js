import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setItem } from '../utils/storage';
const useLoginForm = ({ initialValues, onSubmit, validate }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = validate ? validate(values) : {};
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const postValues = {
        id: values.id,
        pw: values.password,
      };

      const result = await onSubmit(postValues);
      if (result.error === true) {
        setErrors({ id: 'ID 또는 비밀번호가 일치하지 않습니다.', password: '' });
        setValues(initialValues);
      } else {
        const { userNo } = result.data;
        setItem('userNo', userNo);
        navigate('/lookgood');
      }
    }
    setIsLoading(false);
  };
  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};

export default useLoginForm;
