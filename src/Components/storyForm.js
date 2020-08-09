import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Example = (props) => {
  return (
    <Form>
      <FormGroup tag="fieldset">
        <legend>소개 영상 사진 등록*</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> 소개 영상
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> 소개 사진
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">프로젝트 요약 *</Label>
        <Input
          type="textarea"
          name="text"
          id="exampleText"
          placeholder="내용 입력"
        />
      </FormGroup>

      <Button>저장하기</Button>
    </Form>
  );
};

export default Example;
