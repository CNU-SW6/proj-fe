import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';

const LoadingPage = () => {
  const navigate = useNavigate();

  const timeout = () => {
    setTimeout(() => {
      navigate('/lookgood');
    }, 3000);
  };

  useEffect(() => {
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="LoadingPage">
      <p className="LoadingPageLogo">look-good</p>
      <p className="ColorExplain">look-good의 배경 색상은 올해의 컬러를 반영합니다.</p>
    </div>
  );
};

export default LoadingPage;
