import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Sections from '../components/Section/Sections';
import MainDiv from '../components/MobileSection/MainDiv';
import ItemModal from '../components/Modal/ItemModal';

const ButtonDiv = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbcfc7;
`;

const StyledBtn = styled.button`
  width: 40%;
  background-color: #d9d9d9;
  border-radius: 10px;
  border: none;
  font-size: 15px;
  padding: 10px 0;
  color: black;
`;
const MainPage = ({ items }) => {
  return (
    <MainDiv>
      <Header />
      {items && <Sections items={items} />}
      {items && <ItemModal items={items} />}
      <ButtonDiv>
        <StyledBtn type="button">Search</StyledBtn>
      </ButtonDiv>
    </MainDiv>
  );
};

MainPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
export default MainPage;
