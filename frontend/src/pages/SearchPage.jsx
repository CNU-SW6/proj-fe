import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import DefaultSection from '../components/MobileSection/DefaultSection';
import MenuShareButton from '../components/Button/MenuShareButton';
import ColorCircleList from '../components/Modal/ColorCircleList';

import { shareDatas } from '../assets/FashionList';
const ResultSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 90%;
  margin: auto;
`;

const ResultImgSection = styled.div`
  width: 100%;
  margin: 10px 0;
  text-align: center;
`;

const ResultImg = styled.img`
  width: 80%;
`;

const MenuShareButtonPosition = {
  right: '3%',
  bottom: '3%',
};

const SearchPage = ({ items }) => {
  return (
    <DefaultSection overflow="scroll">
      <ColorCircleList colorList={items} />
      <ResultSection>
        {shareDatas.map((data) => (
          <ResultImgSection key={v4()}>
            <ResultImg src={data} alt="fashion" />
          </ResultImgSection>
        ))}
      </ResultSection>
      <MenuShareButton position={MenuShareButtonPosition} />
    </DefaultSection>
  );
};

SearchPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default SearchPage;
