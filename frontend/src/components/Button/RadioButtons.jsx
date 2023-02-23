import React, { Fragment, useState } from 'react';
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

const RadioButtons = ({ title, selectList, selectValue }) => {
  const [selected, setSelected] = useState(selectValue);
  const handleChange = (e) => {
    setSelected(e.target.value);
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
            checked={selected === value}
            onChange={handleChange}
            style={{ height: '20px', marginLeft: '30px' }}
          />
          {value}
        </Fragment>
      ))}
    </RadiosDiv>
  );
};

RadioButtons.propTypes = {
  title: PropTypes.string.isRequired,
  selectList: PropTypes.arrayOf(PropTypes.string),
  selectValue: PropTypes.string,
};

RadioButtons.defaultProps = {
  selectList: [],
  selectValue: '',
};
export default RadioButtons;
