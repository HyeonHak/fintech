import { Button } from 'reactstrap';
import React, { Component, Fragment } from 'react';

const Btn = (props) => {
  return (
    <Fragment>
      <Button color="secondary" style={{ marginLeft: '5px' }}>
        {props.name}
      </Button>
    </Fragment>
  );
};
export default Btn;
