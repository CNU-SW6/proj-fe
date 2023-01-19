import React from 'react';
import Header from '../components/Header';
import Sections from '../components/Section/Sections';
import MainDiv from '../components/MobileSection/MainDiv';

import cap from '../assets/cap.png';
import top from '../assets/long_sleeve_t_shirt.png';
import bottom from '../assets/slacks.png';
import shoes from '../assets/shoes.png';
import ColorModal from '../components/Modal/ColorModal';

const DUMMY_DATA = [
  {
    id: 'cap',
    img: cap,
    color: 'wheat',
    height: '15%',
  },
  {
    id: 'top',
    img: top,
    color: 'ivory',
    height: '25%',
  },
  {
    id: 'bottom',
    img: bottom,
    color: 'lightblue',
    height: '35%',
  },
  {
    id: 'shoes',
    img: shoes,
    color: 'lightgray',
    height: '15%',
  },
];

const DUMMY_DATA_2 = [
  {
    item: '모자',
    color: 'wheat',
  },
  {
    item: '상의',
    color: 'ivory',
  },
  {
    item: '하의',
    color: 'lightblue',
  },
  {
    item: '신발',
    color: 'lightgray',
  },
];

function MainPage() {
  return (
    <MainDiv>
      <Header />
      <Sections items={DUMMY_DATA} />
      <ColorModal items={DUMMY_DATA_2} />
    </MainDiv>
  );
}

export default MainPage;
