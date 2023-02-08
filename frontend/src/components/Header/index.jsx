import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/header.css';
import Icon from '../../assets/Icon';
const Header = ({ color, clickMenuIcon, ...props }) => {
  const handleMenu = () => {
    // MENU ICON CLICKED
    clickMenuIcon();
  };
  return (
    <div className="Header">
      <Icon name="menu" size={32} color="#222" onClick={handleMenu} />
      <p className="Header_name" style={color && { color }} {...props}>
        look-good
      </p>
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
