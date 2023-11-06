import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "redux/modules/managepost";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const formContainer = {
  width: "60%",
  margin: "0 auto",
  padding: "20px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#f9f9f9",
  borderRadius: "5px",
  paddingRight: "40px"
};

const formTitle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#333",
};

const formGroup = {
  marginBottom: "20px",
};

const labelStyle = {
  display: "block",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#333",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const textareaStyle = {
  width: "100%",
  padding: "10px",
  fontSize: "16px",
  height: "150px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const submitButtonStyle = {
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  padding: "10px 20px",
  fontSize: "18px",
  cursor: "pointer",
};

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logInUser = useSelector((state) => state.managelogin.isLog);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');

  const cdate = new Date();

  useEffect(() => {
    setDate(`${cdate.getMonth()+1}월 ${cdate.getDate()}일 ${cdate.toLocaleTimeString()}`);
    if (logInUser) {
      setAuthor(logInUser);
    }
    else {
      setAuthor("익명");
    }
  }, [])
  
  const onClickPost = () => {
    if (title.length < 10) {
      return alert("제목은 10글자 이상이어야 합니다.");
    }

    dispatch(addPost({ title, content, date, author }));
    navigate("/");
  };

  return (
    <div style={formContainer}>
      <h1 style={formTitle}>게시글 작성</h1>

      <div style={formGroup}>
        <label htmlFor="title" style={labelStyle}>
          제목:
        </label>
        <input
          type="text"
          id="title"
          style={inputStyle}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div style={formGroup}>
        <label htmlFor="author" style={labelStyle}>
          작성자:
        </label>
        <input
          type="text"
          id="author"
          style={inputStyle}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div style={formGroup}>
        <label htmlFor="date" style={labelStyle}>
          작성시간:
        </label>
        <input
          type="text"
          id="date"
          style={inputStyle}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div style={formGroup}>
        <label htmlFor="content" style={labelStyle}>
          내용:
        </label>
        <textarea
          id="content"
          style={textareaStyle}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>

      <button
        onClick={onClickPost}
        disabled={title === "" || author === "" || date === "" || content === "" ? true : false}
        style={submitButtonStyle}
      >
        작성
      </button>
    </div>
  );
};

export default CreatePost;
