import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraRoundedIcon from '@material-ui/icons/PhotoCameraRounded';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import DefaultSection from '../components/MobileSection/DefaultSection';
import ColorModal from '../components/Modal/ColorModal';
import RadioButtons from '../components/Button/RadioButtons';
import { getItem } from '../utils/storage';
import { uploadImg, uploadPost } from '../api/api';

const StyledForm = styled.form`
  width: 100%;
  height: 90%;
`;

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

const useStyles = makeStyles((theme) => ({
  imgBox: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  img: {
    height: 'inherit',
    maxWidth: 'inherit',
  },
  input: {
    display: 'none',
  },
}));

const SharePage = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [source, setSource] = useState('');
  const defaultItems = [
    {
      id: 'cap',
      item: '모자',
      color: 'white',
    },
    {
      id: 'top',
      item: '상의',
      color: 'white',
    },
    {
      id: 'bottom',
      item: '하의',
      color: 'white',
    },
    {
      id: 'shoes',
      item: '신발',
      color: 'white',
    },
  ];

  const genderList = ['남성', '여성'];
  const purposeList = ['판매', '공유'];
  const [colors, setColors] = useState(defaultItems);
  const [gender, setGender] = useState(genderList[0]);
  const [purpose, setPurpose] = useState(purposeList[0]);
  const [description, setDescription] = useState('');

  const getColor = (id, value) => {
    setColors(colors.map((item) => (item.id === id ? { ...item, color: value } : item)));
    // setColors({ ...colors, item });
  };

  const handleSubmit = async () => {
    if (source === '') {
      return;
    }
    const userNo = getItem('userNo');

    const form = new FormData();

    form.append('userNo', userNo);

    const blob = new Blob([new ArrayBuffer(source)], { type: 'image/jpeg' });
    const file = new File([blob], 'image.jpg');
    form.append('image', file);
    const res = await uploadImg(form);

    if (res.error || res.data === '' || res.data === null) {
      throw new Error('잘못된 이미지 업로드');
    }
    console.log(res.data);
    const postData = {
      userNo,
      location: res.data,
      hatColor: colors[0].color.substring(1),
      topColor: colors[1].color.substring(1),
      pantsColor: colors[2].color.substring(1),
      shoesColor: colors[3].color.substring(1),
      isMale: gender === '남성',
      description,
      isSell: purpose === '판매',
    };
    const result = await uploadPost(JSON.stringify(postData));
    if (result.error) {
      alert('상세정보에 판매주소를 추가해주세요.');
    } else {
      alert('게시물이 등록되었습니다.');
      navigate('/lookgood');
    }
  };

  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <DefaultSection>
      <StyledForm onSubmit={handleSubmit}>
        <Top>
          <ImgShowDiv>
            {source ? (
              <Box display="flex" justifyContent="center" border={1} className={classes.imgBox}>
                <img src={source} alt="snap" className={classes.img} />
              </Box>
            ) : (
              <div>
                <label htmlFor="icon-button-file">
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="icon-button-file"
                    type="file"
                    capture="environment"
                    onChange={(e) => handleCapture(e.target)}
                  />
                  <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoCameraRoundedIcon fontSize="large" color="primary" />
                  </IconButton>
                </label>
              </div>
            )}
          </ImgShowDiv>
          <ColorModal items={colors} width="20%" getColor={getColor} style={{ margin: 'auto' }} />
        </Top>
        <Bottom>
          <RadioButtons
            title="성별"
            selectList={genderList}
            selectValue={gender}
            setValue={setGender}
          />
          <RadioButtons
            title="게시목적"
            selectList={purposeList}
            selectValue={purpose}
            setValue={setPurpose}
          />
          <StyledP>상세정보</StyledP>
          <PostArea
            placeholder="상세정보를 입력해주세요."
            rows="4"
            value={description}
            onChange={handleChange}
          />
        </Bottom>
        <SubmitButtonArea>
          <SubmitButton type="button" onClick={handleSubmit}>
            게시물 등록하기
          </SubmitButton>
        </SubmitButtonArea>
      </StyledForm>
    </DefaultSection>
  );
};

export default SharePage;
