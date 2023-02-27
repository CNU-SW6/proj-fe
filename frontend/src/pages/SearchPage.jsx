import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import DefaultSection from '../components/MobileSection/DefaultSection';
import MenuShareButton from '../components/Button/MenuShareButton';
import ColorCircleList from '../components/Modal/ColorCircleList';

import { shareDatas } from '../assets/FashionList';
import RadioButtons from '../components/Button/RadioButtons';
import { getStyles } from '../api/api';
const ResultSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  margin: auto;
  overflow-y: ${({ overflow }) => overflow};
`;

const StyledSelect = styled.select`
  width: 30%;
  font-size: 14px;
  float: right;
  margin: 10px;
`;

const ResultImgSection = styled.div`
  width: 100%;
  margin: 10px 0;
  text-align: center;
`;

const ResultImg = styled.img`
  width: 50%;
`;

const RadioButtonsDiv = styled.div`
  float: left;
  width: 40%;
`;

const StyledLegend = styled.legend`
  display: inline-block;
  font-weight: bold;
`;

const StyledInput = styled.input`
  display: inline-block;
`;

const MenuShareButtonPosition = {
  right: '3%',
  bottom: '3%',
};

const SearchPage = ({ items }) => {
  const [sort, setSort] = useState('newest');
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    setSort(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };
  useEffect(() => {
    console.log(result);
  }, [result]);

  useEffect(() => {
    const params = {};
    if (items[0].color !== '') {
      params.hatColor = items[0].color.substring(1);
    }
    if (items[1].color !== '') {
      params.topColor = items[1].color.substring(1);
    }
    if (items[2].color !== '') {
      params.pantsColor = items[2].color.substring(1);
    }
    if (items[3].color !== '') {
      params.shoesColor = items[3].color.substring(1);
    }
    params.sort = sort;
    if (gender !== 'whole') {
      params.gender = gender;
    }
    async function fetchStyles() {
      const res = await getStyles(params);
      if (!res.error) {
        setResult(res.data);
      }
    }
    fetchStyles();
  }, [gender, sort]);

  return (
    <DefaultSection>
      <RadioButtonsDiv>
        <StyledLegend>성별선택</StyledLegend>
        <StyledInput
          type="radio"
          name="gender"
          value="male"
          onChange={handleGender}
          checked={gender === 'male'}
        />
        남성
        <StyledInput
          type="radio"
          name="gender"
          value="female"
          onChange={handleGender}
          checked={gender === 'female'}
        />
        여성
      </RadioButtonsDiv>

      <StyledSelect value={sort} onChange={handleChange}>
        <option value="newest">최신순</option>
        <option value="like">좋아요순</option>
      </StyledSelect>
      <ColorCircleList colorList={items} />
      <ResultSection overflow="scroll">
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
