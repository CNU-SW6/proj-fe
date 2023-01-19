import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
const MobileDiv = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: aliceblue;
`;

function MainDiv({ children }) {
  return <MobileDiv>{children}</MobileDiv>;
}

MainDiv.propTypes = {
  children: PropTypes.element.isRequired,
};
export default MainDiv;
