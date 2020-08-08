import React from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
  const style = {
    textAlign:"center",
    width:"20%",
  }
  
  const {name} = props;

  return (
    <Form style={style}>
      <FormGroup row>
        <Label for="exampleEmail" sm={2} size="lg"></Label>
        <Col sm={10}>
          <Input type="email" name="email" placeholder={name} id="exampleEmail" bsSize="lg"/>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default Example;