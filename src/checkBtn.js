import { Button } from 'reactstrap';
import React, { Component, Fragment } from 'react';

const checkBtn = (props) => {
    const style = {
        margin: "100px",
    }
    return (
        <Fragment>
            <br></br>
            <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="defaultChecked2" checked />
            <label class="custom-control-label" for="defaultChecked2">{props.name}</label>
            </div>
        </Fragment>
    );
  }
export default checkBtn;