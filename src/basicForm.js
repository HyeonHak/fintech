import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Example = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">프로젝트 제목 *</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="제목 입력" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">목표 금액 *</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="목표 금액 입력" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">카테고리 *</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>테크 가전</option>
          <option>기부</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">대표 이미지*</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          3MB 이하의 JPEG, PNG파일
        </FormText>
      </FormGroup>
      
      
      <Button>저장 하기</Button>
    </Form>
  );
}

export default Example;