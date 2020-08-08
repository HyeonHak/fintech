import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText , Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Form>
    <FormGroup>
        <Label for="exampleSelect">사업자 구분 선택 *</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>개인</option>
          <option>개인 사업자</option>
          <option>법인 사업자</option>
        </Input>
      </FormGroup>
      </Form>
  );
}



export default Example;