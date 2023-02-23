import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';
import { getItem } from '../utils/storage';

const LoadingPage = () => {
  const navigate = useNavigate();

  const timeout = (navigateTo) => {
    setTimeout(() => {
      navigate(navigateTo);
    }, 3000);
  };

  useEffect(() => {
    const userNo = getItem('userNo');
    let navigateTo = '';
    if (!userNo) {
      navigateTo = '/login';
    } else {
      navigateTo = '/lookgood';
    }
    timeout(navigateTo);
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
