import React from 'react';
import styled from '@emotion/styled';
import DefaultSection from '../components/MobileSection/DefaultSection';
import ColorModal from '../components/Modal/ColorModal';
import RadioButtons from '../components/Button/RadioButtons';
import Camera from '../assets/camera.png';
const Top = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  padding: 3%;
  box-sizing: border-box;
`;

const Bottom = styled.div`
  width: 100%;
  padding: 0 3% 0 3%;
  box-sizing: border-box;
`;

const ImgShowDiv = styled.div`
  height: 100%;
  width: 70%;
  float: left;
  border: 1px solid #bdbcbc;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-items: center;
`;

const ColorModalDiv = styled.div`
  height: 100%;
  width: 30%;
  float: right;
  box-sizing: border-box;
`;

const PostArea = styled.textarea`
  width: 100%;
  padding: 5%;
  box-sizing: border-box;
  font-size: 13px;
  resize: none;
  outline-color: #0075ff;
`;

const StyledP = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin: 5px 0;
`;

const CameraButton = styled.button`
  width: 70px;
  height: 70px;
  background-color: #d9d9d9;
  border-radius: 50%;
  border: none;
`;

const CameraIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const SubmitButtonArea = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: row-reverse;
  padding: 0 10px;
  align-items: center;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  width: 40%;
  height: 90%;
  border: none;
  border-radius: 10px;
  background-color: #bc2649;
  color: white;
  padding: 0 10px;
`;

const SharePage = () => {
  const defaultItems = [
    {
      item: '모자',
      color: 'white',
    },
    {
      item: '상의',
      color: 'white',
    },
    {
      item: '하의',
      color: 'white',
    },
    {
      item: '신발',
      color: 'white',
    },
  ];

  const genderList = ['남성', '여성'];
  const purposeList = ['판매', '공유'];
  return (
    <DefaultSection>
      <Top>
        <ImgShowDiv>
          <CameraButton>
            <CameraIcon src={Camera} alt="cameraButton" />
          </CameraButton>
        </ImgShowDiv>
        <ColorModalDiv>
          <ColorModal items={defaultItems} width="50%" />
        </ColorModalDiv>
      </Top>
      <Bottom>
        <RadioButtons title="성별" selectList={genderList} selectValue={genderList[0]} />
        <RadioButtons title="게시목적" selectList={purposeList} selectValue={purposeList[0]} />
        <StyledP>상세정보</StyledP>
        <PostArea placeholder="상세정보를 입력해주세요." rows="4" />
      </Bottom>
      <SubmitButtonArea>
        <SubmitButton>게시물 등록하기</SubmitButton>
      </SubmitButtonArea>
    </DefaultSection>
  );
};

export default SharePage;
