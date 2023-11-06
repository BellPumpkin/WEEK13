import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import axios from "axios";
import { useSelector } from "react-redux";

import { logInId } from "redux/modules/managelogin";

function Login() {

    // axios
    // const [postData, setPostData] = useState({
    //     id: 1,
    //     username: 'user1',
    //     password: 'password1',
    // });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const users = useSelector(((state) => state.manageuser.users)); // 유저 이펙트?

    const inputStyle = {
        width: "100%",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "10px",
    };

    const signupbuttonStyle = {
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

    const labelStyle = {
        display: "block",
        fontWeight: "bold",
        marginBottom: "5px",
    };

    const handlePostRequest = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', {username, password, users})
            .then(response => {
                setResponse(response.data);
                dispatch(logInId({username}));
                alert(`로그인 성공!\n${username}님 어서오세요.`);
                navigate("/");
            })
            .catch(error => {
                alert("아이디, 비밀번호가 일치하지 않습니다.");
            // setError(error.message);
            });
    }

    // const pa = "";
    // console.log(Boolean(pa));

    return (
        <>
        <div style={{paddingTop:"10%"}}>
            <div style={{ border: "solid 1px", maxWidth: "300px", margin: "0 auto", padding: "20px 40px", paddingRight: "60px"}}>
                <form>
                    <div>
                        <label style={labelStyle}>아이디: </label>
                        <input style={inputStyle} onChange={(e) => {setUserName(e.target.value)}} type="text"></input>
                    </div>

                    <div>
                        <label style={labelStyle}>비밀번호: </label>
                        <input style={inputStyle} onChange={(e) => {setPassword(e.target.value)}} type="password"></input>
                    </div>
                    <div style={{ paddingTop: "20px", display: "flex", justifyContent: "space-between" }}>
                        <button style={{...signupbuttonStyle}} onClick={() => {navigate("/signup")}}>회원가입</button>
                        <button style={{...signupbuttonStyle, margin:"20px 5px 20px 0px"}} onClick={handlePostRequest} type="submit">로그인</button>
                        {/* <Link to="/signup" style={{ ...signupbuttonStyle, textAlign: "center", textDecoration: "none" }}>회원가입</Link> */}
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default Login;