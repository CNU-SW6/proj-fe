import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Title from '../components/Text/Title';
import Box from '../components/Skeleton/Box';
import DefaultSection from '../components/MobileSection/DefaultSection';
import { getMyPosts } from '../api/api';
import { getItem } from '../utils/storage';

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

const ShowImg = styled.img`
  width: 40%;
  height: 40%;
`;

const MyPage = () => {
  const [myPosts, setMyPosts] = useState([]);

  const FetchDatas = async () => {
    const res = await getMyPosts(getItem('userNo'));
    if (!res.error) {
      setMyPosts(res.data);
    }
    return new Error('포스트를 가져올 수 없습니다.');
  };

  const getImage = async (blob) => {
    const reader = new FileReader();
    reader.onload = () => {
      return reader.result;
    };
    reader.readAsDataURL(blob);
  };

  useEffect(() => {
    FetchDatas();
  }, []);

  useEffect(() => {
    console.log(myPosts);
  }, [myPosts]);

  return (
    <DefaultSection>
      <PostDiv>
        <Title level={4} style={{ paddingLeft: '5%' }}>
          내가 올린 게시물
        </Title>
        <ShowDiv>
          {myPosts.map((myPost, i) => (
            <ShowImg key={`myPost${i}`} src={getImage(myPost.location)} alt={myPost.postNo} />
          ))}
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
