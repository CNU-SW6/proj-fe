import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import DefaultSection from '../components/MobileSection/DefaultSection';
import MenuShareButton from '../components/Button/MenuShareButton';
import ColorCircleList from '../components/Modal/ColorCircleList';
import { getStyles } from '../api/api';
import coin from '../assets/coin.png';
const ResultSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
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

const CoinImg = styled.img`
  width: 30px;
  height: 30px;
`;

const ErrorText = styled.p`
  text-align: center;
  color: red;
`;

const DefaultDiv = styled.div`
  width: 30px;
  height: 30px;
  display: inline-block;
`;

const MenuShareButtonPosition = {
  right: '3%',
  bottom: '3%',
};

const SearchPage = ({ items }) => {
  const navigate = useNavigate();
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

  const showDetailPage = (e) => {
    const postNo = e.target.dataset.postno;
    navigate(`/detail/${postNo}`, {
      state: {
        src: e.target.src,
        postNo,
      },
    });
  };

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
        {result.length > 0 ? (
          result.map((data) => (
            <ResultImgSection key={v4()} onClick={showDetailPage}>
              <ResultImg src={data.location} alt="fashion" data-postno={data.postNo} />
              {data.sell ? <CoinImg src={coin} alt="sell" /> : <DefaultDiv />}
            </ResultImgSection>
          ))
        ) : (
          <ErrorText>검색 결과가 없습니다.</ErrorText>
        )}
      </ResultSection>
      <MenuShareButton position={MenuShareButtonPosition} />
    </DefaultSection>
  );
};

SearchPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default SearchPage;
