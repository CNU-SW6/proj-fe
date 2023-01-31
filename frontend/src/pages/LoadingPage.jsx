import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';

function LoadingPage() {
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
    </div>
  );
}

export default LoadingPage;
