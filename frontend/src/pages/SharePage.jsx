import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoCameraRoundedIcon from '@material-ui/icons/PhotoCameraRounded';
import styled from '@emotion/styled';
import DefaultSection from '../components/MobileSection/DefaultSection';
import ColorModal from '../components/Modal/ColorModal';
import RadioButtons from '../components/Button/RadioButtons';
import { getItem } from '../utils/storage';

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

const ColorModalDiv = styled.div`
  width: 100%;
  position: absolute;
  top: 10%;
  box-sizing: border-box;
  display: flex;
  justify-content: end;
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
  root: {
    height: '100%',
    textAlign: 'center',
  },
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
  const [colors, setColors] = useState(defaultItems);
  const [isMale, setIsMale] = useState(true);
  const [isSell, setIsSell] = useState(true);

  const getColor = (id, value) => {
    setColors(colors.map((item) => (item.id === id ? { ...item, color: value } : item)));
    // setColors({ ...colors, item });
  };

  const handleSubmit = () => {
    // dispatch(selectColor(ID, color));
    // navigate('/lookgood');
  };

  useEffect(() => {
    if (source !== '') {
      /*
      const form = new FormData();
      form.append('userNo', getItem('userNo'));
      form.append('image', )
      */
      console.log(source);
    }
  }, [source]);

  const genderList = ['남성', '여성'];
  const purposeList = ['판매', '공유'];

  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
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
            selectValue={isMale}
            setValue={setIsMale}
          />
          <RadioButtons title="게시목적" selectList={purposeList} selectValue={purposeList[0]} />
          <StyledP>상세정보</StyledP>
          <PostArea placeholder="상세정보를 입력해주세요." rows="4" />
        </Bottom>
        <SubmitButtonArea>
          <SubmitButton type="submit" onSubmit={handleSubmit}>
            게시물 등록하기
          </SubmitButton>
        </SubmitButtonArea>
      </StyledForm>
    </DefaultSection>
  );
};

export default SharePage;
