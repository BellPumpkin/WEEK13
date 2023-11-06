import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { addUser } from "redux/modules/manageuser";

function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.manageuser.users);

    const [userId, setUserId] = useState("");
    const [pw, setPw] = useState("");
    const [pwCheck, setPwCheck] = useState("");


    const inputStyle = {
        width: "100%",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "10px",
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

    const labelStyle = {
        display: "block",
        fontWeight: "bold",
        marginBottom: "5px",
    };

    const submitHandler = (e)=>{
        e.preventDefault();

        if (userId.length < 1){
            alert("글자 수 제한");
        }

        else if (pw.length < 1){
            alert("글자 수 제한");
        }

        // else if (pw.length < 8) {
        //     alert("비밀번호 수 제한");
        // }

        else if (pw !== pwCheck){
            alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
        }
        
        else {
            const user = users.find((user) => user.userId === userId)
            if (user) {
                alert("존재하는 아이디 입니다.");
            }

            else {
                alert("회원가입 성공!");
                dispatch(addUser({userId, pw}));
                navigate('/');
            }
        }
    };
    return (
        <> 
        <div style={{paddingTop:"10%"}}>
            <div style={{ border: "solid 1px", maxWidth: "300px", margin: "0 auto", padding: "20px 40px", paddingRight: "60px"}}>
                <form onSubmit={submitHandler}>
                    <div>
                        <label style={labelStyle}>아이디:</label>
                        <input
                            style={inputStyle}
                            type="text"
                            onChange={(e) => setUserId(e.target.value)}
                        />
                    </div>
                    <div>
                        <label style={labelStyle}>비밀번호:</label>
                        <input
                            style={inputStyle}
                            type="password"
                            onChange={(e) => setPw(e.target.value)}
                        />
                    </div>
                    <div>
                        <label style={labelStyle}>비밀번호 확인:</label>
                        <input
                            style={inputStyle}
                            type="password"
                            onChange={(e) => setPwCheck(e.target.value)}
                        />
                    </div>
                    <button style={{...ButtonStyles, marginTop:"20px", marginLeft:"100px"}} type="submit">
                        회원가입
                    </button>
                </form>
            </div>
        </div>
        </>
    );
}

export default SignUp;