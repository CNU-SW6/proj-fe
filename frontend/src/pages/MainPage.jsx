import React from 'react';
import Header from '../components/Header';
import Sections from '../components/Section/Sections';
import MainDiv from '../components/MobileSection/MainDiv';

function MainPage() {
  return (
    <MainDiv>
      <Header />
      <Sections />
    </MainDiv>
  );
}

export default MainPage;
