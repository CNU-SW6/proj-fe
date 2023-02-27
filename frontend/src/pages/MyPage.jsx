import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Text/Title';

import DefaultSection from '../components/MobileSection/DefaultSection';
import { getMyPosts, getLikePosts } from '../api/api';
import { getItem } from '../utils/storage';

const PostDiv = styled.div`
  width: 100%;
  height: 40%;
  overflow-y: scroll;
`;

const ShowDiv = styled.div`
  width: 100%;
  height: 80%;
  padding: 0 5% 5% 5%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ShowImgDiv = styled.div`
  display: flex;
  place-items: center;
  height: 100%;
  width: 50%;
`;

const ShowImg = styled.img`
  height: 80%;
  max-width: 90%;
  border-radius: 10px;
  margin: auto;
  margin-top: 0;
`;

const TitleDiv = styled.div`
  height: 20%;
  display: grid;
  align-items: center;
  box-sizing: border-box;
`;

const Menu = styled.img`
  width: 20px;
  height: 20px;
`;

const MyPage = () => {
  const navigate = useNavigate();
  const [myPosts, setMyPosts] = useState([]);
  const [likePosts, setLikePosts] = useState([]);
  const FetchDatas = async () => {
    const res = await getMyPosts(getItem('userNo'));
    if (!res.error) {
      setMyPosts(res.data);
    }
  };

  const FetchLikePosts = async () => {
    const res = await getLikePosts(getItem('userNo'));
    if (!res.error) {
      setLikePosts(res.data);
    }
  };

  useEffect(() => {
    FetchDatas();
    FetchLikePosts();
  }, []);

  useEffect(() => {
    console.log(likePosts);
  }, [likePosts]);

  const handleClick = (e) => {
    const postNo = e.target.dataset.postno;

    navigate(`/detail/${postNo}`, {
      state: {
        src: e.target.src,
        postNo,
      },
    });
  };

  return (
    <DefaultSection>
      <PostDiv>
        <TitleDiv>
          <Title level={4} style={{ margin: 0, paddingLeft: '5%' }}>
            내가 올린 게시물
          </Title>
        </TitleDiv>
        <ShowDiv>
          {myPosts.map((myPost, i) => (
            <ShowImgDiv key={`myPost${i}`}>
              <ShowImg
                src={myPost.location}
                alt={myPost.postNo}
                data-postno={myPost.postNo}
                onClick={handleClick}
              />
            </ShowImgDiv>
          ))}
        </ShowDiv>
      </PostDiv>
      <hr />
      <PostDiv>
        <TitleDiv>
          <Title level={4} style={{ margin: 0, paddingLeft: '5%' }}>
            좋아요 누른 게시물
          </Title>
        </TitleDiv>
        <ShowDiv>
          {likePosts.map((likePost, i) => (
            <ShowImgDiv key={`likePost${i}`}>
              <ShowImg
                src={likePost.location}
                alt={likePost.postNo}
                onClick={handleClick}
                data-postno={likePost.postNo}
              />
            </ShowImgDiv>
          ))}
        </ShowDiv>
      </PostDiv>
    </DefaultSection>
  );
};

export default MyPage;
