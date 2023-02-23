import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from '../../assets/Icon';

const IconsDiv = styled.div`
  position: fixed;
  bottom: ${({ position }) => (position.bottom ? position.bottom : '')};
  left: ${({ position }) => (position.left ? position.left : '')};
  right: ${({ position }) => (position.right ? position.right : '')};
  top: ${({ position }) => (position.top ? position.top : '')};
`;

const IconDiv = styled.div`
  margin: 5px auto;
  border-radius: 50%;
  background-color: #dddddd;
  box-sizing: border-box;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: grid;
  place-items: center;
`;

const MenuShareButton = ({ position }) => {
  return (
    <IconsDiv position={position}>
      <IconDiv className="icon" width="55px" height="55px">
        <Link to="/share">
          <Icon name="share-2" size={40} />
        </Link>
      </IconDiv>
      <IconDiv width="60px" height="60px">
        <Link to="/lookgood">
          <Icon name="home" size={50} />
        </Link>
      </IconDiv>
    </IconsDiv>
  );
};

export default MenuShareButton;

MenuShareButton.propTypes = {
  position: PropTypes.objectOf(PropTypes.string),
};

MenuShareButton.defaultProps = {
  position: {
    left: '3%',
    bottom: '10%',
  },
};
