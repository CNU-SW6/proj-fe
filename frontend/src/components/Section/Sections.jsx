import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import MainSection from './MainSection';

const SectionDiv = styled.div`
  height: 80%;
  width: 100%;
`;

const itemHeight = ['15%', '30%', '40%', '15%'];
const Sections = ({ items }) => {
  return (
    <SectionDiv>
      {items.map((item, index) => {
        return (
          <MainSection
            key={v4()}
            id={item.id}
            height={itemHeight[index]}
            backgroundColor={item.color}
            style={{ width: '100%', textAlign: 'center', overflow: 'hidden' }}
          >
            <img
              src={item.img}
              height="100%"
              alt={item.id}
              style={{ position: 'relative', left: '100%', marginLeft: '-200%' }}
            />
          </MainSection>
        );
      })}
    </SectionDiv>
  );
};

Sections.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

Sections.defaultProps = {
  items: [],
};
export default Sections;
