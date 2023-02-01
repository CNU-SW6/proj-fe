import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const MainSection = ({ children, id, height, backgroundColor, ...props }) => {
  const navigate = useNavigate();
  const handleColorSelect = () => {
    navigate('./color', {
      state: {
        id,
      },
    });
  };
  return (
    <div
      className={`${id}_Section`}
      value={backgroundColor}
      style={{ height, backgroundColor, ...props.style }}
      role="presentation"
      onClick={handleColorSelect}
    >
      {children}
    </div>
  );
};

MainSection.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  backgroundColor: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.element.isRequired,
};

MainSection.defaultProps = {
  height: '22.5%',
  id: null,
  backgroundColor: 'white',
  style: null,
};
export default MainSection;
