import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import MainSection from './MainSection';

const SectionDiv = styled.div`
  height: 100%;
  width: 100%;
`;
function Sections({ colors }) {
  return (
    <SectionDiv>
      {colors.map((color) => {
        return <MainSection backgroundColor={color} height="22.5%" />;
      })}
    </SectionDiv>
  );
}

Sections.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
};

Sections.defaultProps = {
  colors: ['black', 'white', 'lightgray', 'blue'],
};
export default Sections;
