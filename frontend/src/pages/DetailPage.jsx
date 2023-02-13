import React from 'react';
import styled from '@emotion/styled';
import DefaultSection from '../components/MobileSection/DefaultSection';
import Box from '../components/Skeleton/Box';
import Icon from '../assets/Icon';
import Account from '../components/Account';

const DetailImgSection = styled.div`
  width: 80%;
  height: 60%;
  margin: auto;
  text-align: center;
  padding-top: 5%;
  box-sizing: border-box;
`;

const HeartSection = styled.div`
  width: 100%;
  height: 10%;
  padding-left: 5%;
  padding-top: 3%;
  text-align: left;
  box-sizing: border-box;
  display: flex;
`;

const HeartCount = styled.p`
  margin: 0;
  margin-left: 3%;
  box-sizing: border-box;
  padding: 0;
`;

const DetailMsg = styled.div`
  width: 100%;
  height: 20%;
  background-color: pink;
`;

const DetailPage = () => {
  return (
    <DefaultSection>
      <DetailImgSection>
        <Box width="90%" height="90%" style={{ display: 'block' }} />
        <HeartSection>
          <Icon name="heart" size={20} />
          <HeartCount>100</HeartCount>
        </HeartSection>
      </DetailImgSection>
      <Account />
      <DetailMsg />
    </DefaultSection>
  );
};

export default DetailPage;
