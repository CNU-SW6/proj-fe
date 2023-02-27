import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import userIcon from '../../assets/userIcon.png';
const AccountDiv = styled.div`
  width: 100%;
  height: 10%;
  background-color: #d9d9d9;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
`;

const UserDiv = styled.div`
  width: 50px;
  height: 50px;
  margin: auto;
  text-align: center;
`;

const UserImg = styled.img`
  width: 100%;
  height: 100%;
`;
const UserName = styled.p`
  font-size: 13px;
`;

const Account = ({ userName }) => {
  return (
    <AccountDiv>
      <UserDiv>
        <UserImg src={userIcon} alt="userIcon" />
      </UserDiv>
      <UserName>{userName}</UserName>
    </AccountDiv>
  );
};

Account.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Account;
