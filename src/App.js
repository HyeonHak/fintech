import React, { Component, Fragment } from 'react';
import './App.css';
import Register from './inputText';
import 'bootstrap/dist/css/bootstrap.css'
import DropBtn from './dropBtn';
import CheckBtn from './checkBtn';
import { Button } from 'reactstrap';
import Start from './start2';
import Btn from './Btn';
import Toast from './Toast';
import Form from './basicForm';
import StoryForm from './storyForm';
import MakerForm from './makerForm';

const App = () => {

  return (
    <Fragment>
      
      {/* 메이커 정보 페이지
      <MakerForm></MakerForm> */}
      
      {/* 스토리 작성 페이지
      <StoryForm></StoryForm> */}

      {/* 기본 정보 페이지
      <basicForm></basicForm> */}

      {/* 작성 폼을 보여주는 페이지
      <Start name="조현학"/>
      <Toast /> */}


      {/* 프로젝트 만들기 누르면 나오는 첫번째 페이지
      <p id="title">투명 펀딩</p>
      <Register name="메이저 (기업)명 *"/>
      <DropBtn />
      <br></br>
      
      <CheckBtn name="(필수) 개인 정보 수집 동의"/>
      <CheckBtn name="(선택) 투명 펀딩을 위한 유용한 뉴스레터 받기"/>
      <br></br>
      <Button color="secondary" size="lg">펀딩 시작하기</Button>
      <Btn name="제출하기"/> */}
    </Fragment>
  );
}


export default App;

