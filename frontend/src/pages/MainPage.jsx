import React from 'react';

import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectColor } from '../redux/items/actions';
import Sections from '../components/Section/Sections';
import DefaultSection from '../components/MobileSection/DefaultSection';
import '../styles/font.css';
import MenuShareButton from '../components/Button/MenuShareButton';
import ColorModal from '../components/Modal/ColorModal';

const ButtonDiv = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #be3455;
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

const ColorModalDiv = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translate(0, -50%);
  box-sizing: border-box;
  display: flex;
  z-index: 999;
  justify-content: end;
  pointer-events: none;
`;

const MainPage = ({ items }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setColor = (id, color) => {
    dispatch(selectColor(id, color));
  };
  const handleSearch = () => {
    /*
      로그인된경우
    */
    navigate('/search');
  };
  return (
    <DefaultSection>
      {items && <Sections items={items} />}
      {items && (
        <ColorModalDiv>
          <ColorModal items={items} width="20%" getColor={setColor} style={{ marginRight: '3%' }} />
        </ColorModalDiv>
      )}
      <MenuShareButton />
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
