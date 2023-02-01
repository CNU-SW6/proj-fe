import React from 'react';
import styled from '@emotion/styled';
import plus from '../../assets/plusIcon.png';
const AddItemButtonDiv = styled.div`
  width: 100%;
  border-radius: 50%;
  background-color: gray;
  text-align: center;
  margin: auto;
`;

const AddItemButtonIcon = styled.img`
  margin-top: 10%;
  height: 80%;
  width: 80%;
`;

const AddItemButton = () => {
  return (
    <AddItemButtonDiv>
      <AddItemButtonIcon src={plus} alt="AddItemIcon" />
    </AddItemButtonDiv>
  );
};

export default AddItemButton;
