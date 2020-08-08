import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
      <DropdownItem disabled>사업자 구분 선택</DropdownItem>
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem disabled>사업자 구분 선택</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>개인</DropdownItem>
        <DropdownItem>개인 사업자</DropdownItem>
        <DropdownItem>법인 사업자</DropdownItem>
      </DropdownMenu>
    </Dropdown>

  );
}

export default Example;