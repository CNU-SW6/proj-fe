import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import AddItemButton from '../Button/AddItemButton';
import ColorModal from './ColorModal';
const ItemModalDiv = styled.div`
  width: 15%;
  height: 60%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80% 20%;
  position: fixed;
  right: 5%;
  top: 20%;
`;

const ItemModal = ({ items }) => {
  return (
    <ItemModalDiv>
      <ColorModal items={items} />
      <AddItemButton />
    </ItemModalDiv>
  );
};

ItemModal.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

ItemModal.defaultProps = {
  items: [],
};
export default ItemModal;
