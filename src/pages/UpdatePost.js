import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { updatePost } from "redux/modules/managepost";

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
  margin: "10px",
};

const UpdatePost = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.managepost.posts);
  const param = useParams();

  const post = posts.find((post) => post.id === parseInt(param.id));

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [date, setDate] = useState(post.date);
  const [author, setAuthor] = useState(post.author);

  const navigate = useNavigate();

  const onClickPost = () => {
    if (title.length < 10) {
      return alert("제목은 10글자 이상");
    }
    const newPostList = posts.filter((p) => p.id !== post.id);
    dispatch(updatePost(newPostList, { title, content, date, author }));
    navigate("/");
  };

  return (
    <div style={updatePostContainer}>
      <h1 style={formTitle}>글 수정</h1>
      <div style={formGroup}>
        <label htmlFor="title" style={labelStyle}>
          제목 :
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
          작성자 :
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
          작성시간 :
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
          내용 :
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
        수정
      </button>
    </div>
  );
};

export default UpdatePost;
