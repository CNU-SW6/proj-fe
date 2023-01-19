import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
function MainSection({ height, backgroundColor, ...props }) {
  const navigate = useNavigate();

  const SectionClick = (e) => {
    navigate('color', {
      state: e.target.value,
    });
  };
  return <div value={backgroundColor} style={{ height, backgroundColor, ...props.style }} role="presentation" onClick={SectionClick} />;
}

MainSection.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  backgroundColor: PropTypes.string,
  style: PropTypes.string,
};

MainSection.defaultProps = {
  height: '22.5%',
  backgroundColor: 'white',
  style: null,
};
export default MainSection;
