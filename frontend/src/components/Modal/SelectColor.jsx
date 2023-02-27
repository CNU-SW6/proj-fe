import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ShowColorList from '../Color/ShowColorList';

const ColorSelectModal = styled.div`
  background-color: white;
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const SelectColor = ({ item, show, getColor, handleSubmit }) => {
  return (
    <ColorSelectModal show={show}>
      <ShowColorList item={item} getColor={getColor} handleSubmit={handleSubmit} />
    </ColorSelectModal>
  );
};

SelectColor.propTypes = {
  show: PropTypes.bool.isRequired,
  getColor: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
};

export default SelectColor;
