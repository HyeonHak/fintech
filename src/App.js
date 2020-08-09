import React, { Component, Fragment } from 'react';
import './App.css';
import Register from './Components/inputText';
import 'bootstrap/dist/css/bootstrap.css';
import DropBtn from './Components/dropBtn';
import CheckBtn from './Components/checkBtn';
import { Button } from 'reactstrap';
import Start from './start2';
import Btn from './Components/Btn';
import Toast from './Components/Toast';
import BasicForm from './Components/basicForm';
import StoryForm from './Components/storyForm';
import MakerForm from './Components/makerForm';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ColoredLine from './Components/ColoredLine';
import Title from './Components/title';
const App = () => {
  return (
    <Fragment>
      <Title />
      <ColoredLine color="#8E8A89" />
      {/* 메이커 정보 페이지
      <MakerForm></MakerForm> */}
      {/* 스토리 작성 페이지
      <StoryForm></StoryForm> */}
      기본 정보 페이지
      <BasicForm></BasicForm>
      {/* 작성 폼을 보여주는 페이지
      <Start name="조현학"/>
      <Toast /> */}
      {/* 설명 : 프로젝트 만들기 누르면 나오는 첫번째 페이지
      <Register name="메이저 (기업)명 *"/>
      <DropBtn />
      <br></br>
      
      <CheckBtn name="(필수) 개인 정보 수집 동의"/>
      <CheckBtn name="(선택) 투명 펀딩을 위한 유용한 뉴스레터 받기"/>
      <br></br>
      <Button color="secondary" size="lg">펀딩 시작하기</Button> */}
    </Fragment>
  );
};

export default App;
