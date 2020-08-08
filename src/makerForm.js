import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Example = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">메이커명 *</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="메이커명 입력" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">메이커 프로필 이미지 *</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          30MB이하의 JPEG, PNG파일, 사이즈 300X300 픽셀 이상
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">문의 이메일 *</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="이메일 입력" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">문의 전화번호 *</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="전화번호 입력" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">홈페이지 (선택사항)</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="홈페이지 URL 입력" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">SNS (선택사항)</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="홈페이지 URL 입력" />
        
      </FormGroup>
     

      <FormGroup>
        <Label for="exampleSelect">계좌 정보 *</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>국민은행</option>
          <option>우리은행</option>
          <option>신한은행</option>
          <option>외환은행</option>
          <option>은행</option>
        </Input>
    <FormGroup>
        <Input type="email" name="email" id="exampleEmail" placeholder="계좌번호 입력" />
    </FormGroup>
    <FormGroup>
        <Input type="email" name="email" id="exampleEmail" placeholder="예금주 명 입력" />
    </FormGroup>
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">통장 사본 *</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          위 계좌 정보와 동일한 명의의 통장 사본을 제출해야 합니다. jpg, jpeg, png, pdf
        </FormText>
      </FormGroup>
      <Button>저장하기</Button>
    </Form>
  );
}

export default Example;