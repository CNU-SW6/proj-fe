import React from 'react';
import styled from '@emotion/styled';
import Title from '../components/Text/Title';
import Box from '../components/Skeleton/Box';
import DefaultSection from '../components/MobileSection/DefaultSection';

const ShowDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;
const MyPage = () => {
  return (
    <DefaultSection>
      <Title level={4} style={{ paddingLeft: '10px' }}>
        내가 올린 게시물
      </Title>
      <ShowDiv>
        <Box width={150} height={150} />
        <Box width={150} height={150} />
      </ShowDiv>
      <hr />
      <Title level={4} style={{ paddingLeft: '10px' }}>
        좋아요 누른 게시물
      </Title>
      <ShowDiv>
        <Box width={150} height={150} />
        <Box width={150} height={150} />
      </ShowDiv>
    </DefaultSection>
  );
};

export default MyPage;
