// src/shared/Layout.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';

import { logOutId } from 'redux/modules/managelogin';

const HeaderStyles = {
  width: '99%',
  background: 'Gray',
  height: '150px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '20px',
  color: 'white',
  fontWeight: '600',
  fontSize: '50px',
  justifyContent: 'space-between', // 버튼을 오른쪽으로 정렬
  marginBottom: '30px',
};

const BtnStyle = {
  display: 'flex', // 버튼을 가로로 정렬
  paddingRight: '10px',
};

const ButtonStyles = {
  width: '100px',  // 원하는 너비 설정
  height: '40px',  // 원하는 높이 설정
  margin: '0 5px 0 5px', // 버튼 사이의 간격을 설정 (옵션)
};

const FooterStyles = {
  width: '100%',
  height: '50px',
  display: 'flex',
  background: 'Gray',
  color: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
};

const layoutStyles = {
	flexDirection: 'column',
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  minHeight: '90vh',
}

const TitleStyles = {
  margin: '30px',
}

function Header() {

  const dispatch = useDispatch();
  const logInUser = useSelector((state) => state.managelogin.isLog);

  function onClickLogOut(){
    dispatch(logOutId());
  }

  // console.log(`${logInUser}`); // 로그인 여부 확인


  return (
    <>
    <div>
      <div style={{ ...HeaderStyles }}>
          {/* <span style={{ ...TitleStyles, textDecoration: "none" }}><Link to={`/`}>React</Link></span> */}
          <Link to="/" style={{ ...TitleStyles, textAlign: "center", textDecoration: "none" }}>React</Link>
      {logInUser ? (
        <div style={{ ...BtnStyle }}>
        <button style={{ ...ButtonStyles }}>{ logInUser }님</button>
        <button onClick={onClickLogOut} style={{ ...ButtonStyles }}>로그아웃</button>
      </div>
      ) : (
        <div style={{ ...BtnStyle }}>
          {/* <Link to="/" style={{ ...ButtonStyles, textDecoration: "none" }}>로그인</Link>
          <Link to="/" style={{ ...ButtonStyles, textDecoration: "none" }}>회원가입</Link> */}
          <button style={{ ...ButtonStyles, textDecoration: "none" }}><Link to={`/signup`}>회원가입</Link></button>
          <button style={{ ...ButtonStyles, textDecoration: "none" }}><Link to={`/login`}>로그인</Link></button>
        </div>
      )}
      </div>
    </div>
    </>
  );
}

function Footer() {
  return (
    <div style={{ ...FooterStyles }}>
      <span>copyright @BellPumpkin</span>
    </div>
  );
}


function Layout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ ...layoutStyles }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;