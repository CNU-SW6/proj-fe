import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import DefaultSection from '../components/MobileSection/DefaultSection';
import Box from '../components/Skeleton/Box';

import Account from '../components/Account';
import { getDetailPost, postLike } from '../api/api';
import MenuShareButton from '../components/Button/MenuShareButton';
import filledHeart from '../assets/filled_heart.png';
import emptyHeart from '../assets/empty_heart.png';
import { getItem } from '../utils/storage';
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
  padding: 3%;
  box-sizing: border-box;
`;

const DetailImage = styled.img`
  width: 90%;
  height: 90%;
`;

const SellDescription = styled.p`
  margin: 0;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 13px;
  margin: 0;
  width: 80%;
  word-wrap: break-word;
`;

const MenuShareButtonPosition = {
  right: '3%',
  bottom: '3%',
};

const HeartIcon = styled.img`
  width: 20px;
  height: 20px;
  display: inline-block;
`;

const DetailPage = () => {
  const location = useLocation();
  const [like, setLike] = useState(false);
  const [image, setImage] = useState('');
  const [page, setPage] = useState();
  useEffect(() => {
    setImage(location.state.src);
    async function fetchPost() {
      const res = await getDetailPost(location.state.postNo);
      if (!res.error) {
        setPage(res.data);
      }
    }
    fetchPost();
  }, []);

  const handleClick = async () => {
    const params = {
      userNo: getItem('userNo'),
    };
    await postLike(location.state.postNo, JSON.stringify(params));
    const res = await getDetailPost(location.state.postNo);
    if (!res.error) {
      setPage(res.data);
    }
  };

  return (
    <DefaultSection>
      <DetailImgSection>
        {image !== '' ? (
          <DetailImage src={image} alt="포스트이미지" />
        ) : (
          <Box width="90%" height="90%" style={{ display: 'block' }} />
        )}
        <HeartSection>
          <HeartIcon name="heart" src={like ? filledHeart : emptyHeart} onClick={handleClick} />
          <HeartCount>{page ? page.likeNum : 100}</HeartCount>
        </HeartSection>
      </DetailImgSection>
      <Account userName={page ? page.nickname : ''} />
      <DetailMsg>
        {page && page.isSell ? (
          <SellDescription>이 글은 판매 목적으로 게시된 글입니다.</SellDescription>
        ) : (
          ''
        )}
        <Description>{page ? page.description : ''}</Description>
      </DetailMsg>
      <MenuShareButton position={MenuShareButtonPosition} />
    </DefaultSection>
  );
};

export default DetailPage;
