import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import '../../styles/header.css';
import Icon from '../../assets/Icon';
const Header = ({ color, clickMenuIcon, ...props }) => {
  const navigate = useNavigate();
  const handleMenu = () => {
    // MENU ICON CLICKED
    clickMenuIcon();
  };

  const gotoMenu = () => {
    navigate('/lookgood');
  };

  return (
    <div className="Header">
      <Icon name="menu" size={32} color="#222" onClick={handleMenu} />
      <div className="Header_div" role="presentation" onClick={gotoMenu}>
        <p className="Header_name" style={color && { color }} {...props}>
          look-good
        </p>
      </div>
    </div>
  );
};

Header.propTypes = {
  color: PropTypes.string,
  clickMenuIcon: PropTypes.func.isRequired,
};

Header.defaultProps = {
  color: '#ffffff',
};

export default Header;
