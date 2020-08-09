import { Button } from 'reactstrap';
import React, { Component, Fragment } from 'react';

const checkBtn = (props) => {
  return (
    <div>
      <input type="checkbox"></input>
      {props.name}
    </div>
  );
};
export default checkBtn;
