import React, { Component } from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Btn from './Btn';

const title = () => {
  const homeHover = () => {};
  return (
    <div id="title">
      <span id="home_icon" onClick={homeHover} style={{ cursor: 'pointer' }}>
        <FontAwesomeIcon icon={faHome} size="1x" />
      </span>
      투명 펀딩
      <span style={{ height: '1px', float: 'right', marginRight: '5px' }}>
        <Btn name="미리보기"></Btn>
        <Btn name="임시 저장"></Btn>
        <Btn name="나가기"></Btn>
      </span>
    </div>
  );
};

export default title;
