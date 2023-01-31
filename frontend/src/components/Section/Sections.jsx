import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import MainSection from './MainSection';
const SectionDiv = styled.div`
  height: 100%;
  width: 100%;
`;
function Sections({ items }) {
  return (
    <SectionDiv>
      {items.map((item) => {
        return (
          <MainSection key={v4()} id={item.id} backgroundColor={item.color} height={item.height} style={{ textAlign: 'center', overflow: 'hidden' }}>
            <img src={item.img} height="100%" alt={item.id} style={{ position: 'relative', left: '100%', marginLeft: '-200%' }} />
          </MainSection>
        );
      })}
    </SectionDiv>
  );
}

Sections.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

Sections.defaultProps = {
  items: [],
};
export default Sections;
