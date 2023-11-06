import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addUser } from "redux/modules/manageuser";

function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const buttonStyle = {
        width: "50%",
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s",
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
            alert("pw, pwCheck 다름");
        }

        else {
            alert("회원가입 성공!");
            dispatch(addUser({userId, pw}));
            navigate('/');
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
                    <button style={{...buttonStyle, marginTop:"20px", marginLeft:"80px"}} type="submit">
                        회원가입
                    </button>
                </form>
            </div>
        </div>
        </>
    );
}

export default SignUp;