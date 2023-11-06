import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { removePost } from "redux/modules/managepost";

const updatePostContainer = {
    width: "80%",
    margin: "0 auto",
    padding: "20px",
  };
  
  const formTitle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  };
  
  const formGroup = {
    marginBottom: "20px",
  };
  
  const labelStyle = {
    display: "block",
    fontSize: "18px",
    fontWeight: "bold",
  };
  
  const inputStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
  };
  
  const textareaStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    height: "150px",
  };
  
  const submitButtonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
    margin: '10px',
  };

function ReadPost() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.managepost.posts);
  const param = useParams();
  const navigate = useNavigate();

  const post = posts.find((post) => post.id === parseInt(param.id));

  const deleteUserHandler = () => {
    const newPostList = posts.filter((p) => p.id !== post.id);
    dispatch(removePost(newPostList));
    navigate("/");
  };

  return (
    <div>
      <div style={updatePostContainer}>
        <h1 style={formTitle}>글</h1>
            <div style={formGroup}>
            <label htmlFor="title" style={labelStyle}>
            제목 :
            </label>
            <div style={inputStyle}>{post.title}</div>
            </div>

            <div style={formGroup}>
            <label htmlFor="author" style={labelStyle}>
            작성자 :
            </label>
            <div style={inputStyle}>{post.author}</div>
            </div>

            <div style={formGroup}>
            <label htmlFor="title" style={labelStyle}>
            작성시간 :
            </label>
            <div style={inputStyle}>{post.date}</div>
            </div>

            <div style={formGroup}>
            <label htmlFor="title" style={labelStyle}>
            내용 :
            </label>
            <div style={textareaStyle}>{post.content}</div>
            </div>

            <div>
                <button style={submitButtonStyle} onClick={() => navigate(`/edit/${post.id}`)}>수정</button>
                <button style={submitButtonStyle} onClick={deleteUserHandler}>삭제</button>
            </div>
        </div>
    </div>

  );
}

export default ReadPost;
