import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
const RadiosDiv = styled.div`
  width: 100%;
`;

const SelectHeader = styled.div`
  font-size: 15px;
  color: black;
  font-weight: bold;
`;

const RadioButtons = ({ title, selectList, selectValue, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <RadiosDiv>
      <SelectHeader>{title}</SelectHeader>
      {selectList.map((value, i) => (
        <Fragment key={i}>
          <input
            id={value}
            type="radio"
            name={value}
            value={value}
            checked={selectValue === value}
            onChange={handleChange}
            style={{ height: '20px', marginLeft: '30px' }}
          />
          {value}
        </Fragment>
      ))}
    </RadiosDiv>
  );
};

/*
RadioButtons.propTypes = {
  title: PropTypes.string.isRequired,
  selectList: PropTypes.arrayOf(PropTypes.string),
  selectValue: PropTypes.string,
};

RadioButtons.defaultProps = {
  selectList: [],
  selectValue: '',
};
*/
export default RadioButtons;
