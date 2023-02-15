import React from 'react';
import styled from '@emotion/styled';
import Title from '../components/Text/Title';
import Box from '../components/Skeleton/Box';
import DefaultSection from '../components/MobileSection/DefaultSection';

const PostDiv = styled.div`
  width: 100%;
  height: 40%;
  overflow-y: scroll;
`;

const ShowDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;
const MyPage = () => {
  return (
    <DefaultSection>
      <PostDiv>
        <Title level={4} style={{ paddingLeft: '5%' }}>
          내가 올린 게시물
        </Title>
        <ShowDiv>
          <Box width={150} height={150} />
          <Box width={150} height={150} />
        </ShowDiv>
      </PostDiv>
      <hr />
      <PostDiv>
        <Title level={4} style={{ paddingLeft: '5%' }}>
          좋아요 누른 게시물
        </Title>
        <ShowDiv>
          <Box width={150} height={150} />
          <Box width={150} height={150} />
        </ShowDiv>
      </PostDiv>
    </DefaultSection>
  );
};

export default MyPage;
