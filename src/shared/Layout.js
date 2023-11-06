// src/shared/Layout.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logOutId } from 'redux/modules/managelogin';

const HeaderStyles = {
  width: '99%',
  background: '#A6B2F6',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '20px',
  color: 'white',
  fontWeight: '600',
  fontSize: '50px',
  justifyContent: 'space-between',
  marginBottom: '30px',
};

const BtnStyle = {
  display: 'flex', // 버튼을 가로로 정렬
  paddingRight: '10px',
};

const ButtonStyles = {
  margin: "20px",
  padding: "10px 20px",
  fontSize: "18px",
  fontWeight: "600",
  backgroundColor: "#A6B2F6",
  color: "black",
  cursor: "pointer",
  borderRadius: "5px",
  width: "auto", // 고정 크기 설정
  minWidth: "100px", // 최소 너비 설정
  textAlign: "center",
  whiteSpace: "nowrap", // 긴 텍스트의 줄 바꿈 방지
};

const FooterStyles = {
  width: '100%',
  height: '50px',
  display: 'flex',
  background: '#A6B2F6',
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
  color: '#FCAAB4',
}

function Header() {

  const dispatch = useDispatch();
  const logInUser = useSelector((state) => state.managelogin.isLog);
  const navigate = useNavigate();

  function onClickLogOut(){
    alert(`안녕히 가세요.\n${logInUser}님`)
    dispatch(logOutId());
    navigate('/');
  }

  // console.log(`${logInUser}`); // 로그인 여부 확인


  return (
    <>
    <div>
      <div style={{ ...HeaderStyles }}>
        {/* <span style={{ ...TitleStyles, textDecoration: "none" }}><Link to={`/`}>React</Link></span> */}
        {/* <Link to="/" style={{ ...TitleStyles, textAlign: "center", textDec/oration: "none" }}>React</Link> */}
        <button onClick={() => {navigate('/')}} style={{ ...ButtonStyles, width:"10%", height: "60%", fontSize: "30px"  }}>React</button>

      {logInUser ? (
        <div style={{ ...BtnStyle }}>
        <button style={{ ...ButtonStyles }}>{ logInUser }님</button>
        <button onClick={onClickLogOut} style={{ ...ButtonStyles }}>로그아웃</button>
      </div>
      ) : (
        <div style={{ ...BtnStyle }}>
          {/* <Link to="/" style={{ ...ButtonStyles, textDecoration: "none" }}>로그인</Link>
          <Link to="/" style={{ ...ButtonStyles, textDecoration: "none" }}>회원가입</Link> */}
          <button onClick={() => {navigate('/signup')}} style={{ ...ButtonStyles }}>회원가입</button>
          <button onClick={() => {navigate('/login')}} style={{ ...ButtonStyles }}>로그인</button>
        </div>
      )}
      </div>
    </div>
    </>
  );
}

function Footer() {
  const navigate = useNavigate();
  return (
    <div style={{ ...FooterStyles }}>
      <span>copyright <button onClick={() => { navigate('/sorry') }} style={{ backgroundColor: "#A6B2F6", border: 'none', color: "white"}}>@BellPumpkin</button></span>
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