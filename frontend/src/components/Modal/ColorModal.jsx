import React, { useEffect } from 'react';
import { v4 } from 'uuid';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import ColorArea from './ColorArea';

const Modal = styled.div`
  width: ${({ width }) => width};
  background-color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px #bbb;
  display: grid;
  grid-template-rows: 0.5fr 2fr 2fr 2fr 2fr;
  pointer-events: auto;
`;

const ModalTitle = styled.p`
  margin: 10px 0 0 0;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
`;

const ColorModal = ({ items, width, getColor, ...props }) => {
  return (
    <Modal width={width} {...props}>
      <ModalTitle>색상표</ModalTitle>
      {items.map((item) => {
        return <ColorArea key={v4()} item={item} getColor={getColor} />;
      })}
    </Modal>
  );
};

ColorModal.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  getColor: PropTypes.func,
};

ColorModal.defaultProps = {
  width: '100%',
  getColor: () => {},
};
export default ColorModal;
