import React from 'react';
import Header from '../components/Header';
import Sections from '../components/Section/Sections';
import MainDiv from '../components/MobileSection/MainDiv';

import ItemModal from '../components/Modal/ItemModal';

function MainPage() {
  return (
    <MainDiv>
      <Header />
      <Sections items={DUMMY_DATA} />
      <ItemModal />
    </MainDiv>
  );
}

export default MainPage;
