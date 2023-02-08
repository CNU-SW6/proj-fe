import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Sections from '../components/Section/Sections';
import ItemModal from '../components/Modal/ItemModal';
import DefaultSection from '../components/MobileSection/DefaultSection';
import '../styles/font.css';

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
  font-family: 'Jua';
`;
const MainPage = ({ items }) => {
  const handleSearch = () => {
    console.log(items);
  };
  return (
    <DefaultSection>
      {items && <Sections items={items} />}
      {items && <ItemModal items={items} />}
      <ButtonDiv>
        <StyledBtn type="button" onClick={handleSearch}>
          검색
        </StyledBtn>
      </ButtonDiv>
    </DefaultSection>
  );
};

MainPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};
export default MainPage;
