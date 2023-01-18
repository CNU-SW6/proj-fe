import React from 'react';
import PropTypes from 'prop-types';
import menuIcon from '../../assets/menuIcon.png';
import '../../styles/header.css';
function Header({ color, ...props }) {
  return (
    <div className="Header">
      <img className="Header_menuIcon" alt="menu" src={menuIcon} />
      <p className="Header_name" style={color && { color }} {...props}>
        look-good
      </p>
    </div>
  );
}

Header.propTypes = {
  color: PropTypes.string,
};

Header.defaultProps = {
  color: '#ffffff',
};

export default Header;
