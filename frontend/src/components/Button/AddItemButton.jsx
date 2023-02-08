import React from 'react';
import styled from '@emotion/styled';
import Icon from '../../assets/Icon';
const AddItemButtonDiv = styled.div`
  width: 100%;
  border-radius: 50%;
  background-color: gray;
  text-align: center;
  margin: auto;
`;

const AddItemButton = () => {
  return (
    <AddItemButtonDiv>
      <Icon name="plus" size={50} strokeWidth={4} />
    </AddItemButtonDiv>
  );
};

export default AddItemButton;
