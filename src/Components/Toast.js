import React from 'react';
import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Toast>
        <ToastHeader icon="primary">
            기본 요건 <p style={{color:'red'}}>작성 완료</p>
        </ToastHeader>
        <ToastBody>
          This is a toast with a primary icon — check it out!
          <button>작성하기</button>
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="secondary">
            기본 정보 <p style={{color:'blue'}}>작성전</p>
        </ToastHeader>
        <ToastBody>
          프로젝트를 대표할 주요 기본 정보를 입력합니다.
          <button>작성하기</button>
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="success">
            스토리 작성 <p style={{color:'blue'}}>작성전</p>
        </ToastHeader>
        <ToastBody>
        메이커님의 프로젝트를 소개해보세요. 스토리에는 메이커님의 진심과 목소리가 잘 녹여질 수 있도록 명확하고, 솔직하게, 친근한 어투로 작성하세요.
          <button>작성하기</button>
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="danger">
          리워드 설계 <p style={{color:'blue'}}>작성전</p>
        </ToastHeader>
        <ToastBody>
        서포터에게 제공할 리워드 내용을 입력하세요. 서포터가 쉽게 펀딩할 수 있는 저렴한 리워드부터 서포터의 보다 빠른 펀딩을 유도할 수 있는 얼리버드 리워드까지 다양한 리워드를 구성하세요.
          <button>작성하기</button>
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="warning">
          위험요인 및 정책 <p style={{color:'blue'}}>작성전</p>
        </ToastHeader>
        <ToastBody>
          This is a toast with a warning icon — check it out!
          <button>작성하기</button>
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader icon="info">
          메이커 정보 <p style={{color:'blue'}}>작성전</p>
        </ToastHeader>
        <ToastBody>
        프로젝트 상세 페이지에 노출되는 정보이니, 서포터와 소통이 가능한 정확한 정보를 입력해주세요.
          <button>작성하기</button>
        </ToastBody>
      </Toast>
      
    </div>
  );
};

export default Example;