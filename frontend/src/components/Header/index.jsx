import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/header.css';
import MenuIcon from '../../assets/MenuIcon';
const Header = ({ color, clickMenuIcon, ...props }) => {
  const handleMenu = () => {
    // MENU ICON CLICKED
    clickMenuIcon();
  };
  return (
    <div className="Header">
      <MenuIcon size={32} color="#222" onClick={handleMenu} />
      <p className="Header_name" style={color && { color }} {...props}>
        look-good
      </p>
    </div>
  );
};

Header.propTypes = {
  color: PropTypes.string,
};

Header.defaultProps = {
  color: '#ffffff',
};

export default Header;
