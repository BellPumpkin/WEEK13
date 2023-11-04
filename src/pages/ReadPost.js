import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { removePost } from "redux/modules/managepost";

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
        <>
        <button onClick={() => {navigate("/");}}>홈으로 돌아가기</button>
        <button onClick={() => {navigate(`/edit/${post.id}`);}}>수정</button>
        <button onClick={() => deleteUserHandler()}>삭제</button>
        
        <div>{post.title}</div>
        <div>{post.content}</div>
        <div>{post.date}</div>
        <div>{post.author}</div>
        </>
    );
}

export default ReadPost;
