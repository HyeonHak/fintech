import React from 'react';
import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Toast>
        <ToastHeader icon="primary">
            기본 요건
        </ToastHeader>
        <ToastBody>
          This is a toast with a primary icon — check it out!
          <button>작성하기</button>
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="secondary">
            기본 정보
        </ToastHeader>
        <ToastBody>
          This is a toast with a secondary icon — check it out!
          <button>작성하기</button>
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="success">
            스토리 작성
        </ToastHeader>
        <ToastBody>
          This is a toast with a success icon — check it out!
          <button>작성하기</button>
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="danger">
          리워드 설계
        </ToastHeader>
        <ToastBody>
          This is a toast with a danger icon — check it out!
          <button>작성하기</button>
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="warning">
          위험요인 및 정책
        </ToastHeader>
        <ToastBody>
          This is a toast with a warning icon — check it out!
          <button>작성하기</button>
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="info">
          메이커 정보
        </ToastHeader>
        <ToastBody>
          This is a toast with an info icon — check it out!
          <button>작성하기</button>
        </ToastBody>
      </Toast>
      
    </div>
  );
};

export default Example;