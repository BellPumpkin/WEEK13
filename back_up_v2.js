import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { removePost } from "redux/modules/managepost";

const postContainer = {
    margin: "20px",
    // 다른 스타일 속성들을 추가할 수 있습니다
  };
  
  const postTitle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    // 다른 스타일 속성들을 추가할 수 있습니다
  };
  
  const postContent = {
    fontSize: "18px",
    marginBottom: "10px",
    // 다른 스타일 속성들을 추가할 수 있습니다
  };
  
  const postDate = {
    fontSize: "16px",
    marginBottom: "10px",
    // 다른 스타일 속성들을 추가할 수 있습니다
  };
  
  const postAuthor = {
    fontSize: "16px",
    marginBottom: "10px",
    // 다른 스타일 속성들을 추가할 수 있습니다
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
      <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
        <div style={postContainer}>
            <div style={postTitle}>{post.title}</div>
            <div style={postContent}>{post.content}</div>
            <div style={postDate}>{post.date}</div>
            <div style={postAuthor}>{post.author}</div>

            <div>
                <button onClick={() => navigate(`/edit/${post.id}`)}>수정</button>
                <button onClick={deleteUserHandler}>삭제</button>
            </div>
        </div>
    </div>
  );
}

export default ReadPost;
