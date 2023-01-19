import React from 'react';
import styled from '@emotion/styled';
import plus from '../../assets/plusIcon.png';
const AddItemButtonDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gray;
  text-align: center;
`;

function AddItemButton() {
  return (
    <AddItemButtonDiv>
      <img src={plus} alt="plus" width="80%" height="80%" />
    </AddItemButtonDiv>
  );
}

export default AddItemButton;
