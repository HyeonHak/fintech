import { Button } from 'reactstrap';
import React, { Component, Fragment } from 'react';

const Btn = (props) => {
    return (
        <Fragment>
            <Button color="secondary" size="lg">{props.name}</Button>
        </Fragment>
    );
  }
export default Btn;