import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

// import Table from "components/Table";


// import managepost from "redux/modules/managepost";
import { updatePost } from "redux/modules/managepost";

const UpdatePost = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.managepost.posts);
    const param = useParams();

    const post = posts.find((post) => post.id === parseInt(param.id));

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const [date, setDate] = useState(post.date);
    const [author, setAuthor] = useState(post.author);

    // const posts = useSelector((state) => state.managepost.posts);
    const navigate = useNavigate();

    const onClickPost = () => {
        if (title.length < 10) {
          return alert("제목은 10글자 이상");
        }
        const newPostList = posts.filter((p) => p.id !== post.id);
        dispatch(updatePost(newPostList, {title, content, date, author}));
        navigate("/");
      };

    return (
        <>
        <div>
          <label htmlFor="">제목 : </label>
          <input defaultValue={title} type="text" onChange={(e) => {
            return setTitle(e.target.value);
          }}></input>
        </div>
        <div>
          <label htmlFor="">작성자 : </label>
          <input defaultValue={author} type="text" onChange={(e) => setAuthor(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="">작성시간 : </label>
          <input defaultValue={date} onChange={(e) => setDate(e.target.value)} type="text"></input>
        </div>
        <div>
          <label htmlFor="">내용</label>
        </div>
        <div>
          <textarea defaultValue={content} onChange={(e) => setContent(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
        </div>

          <button onClick={onClickPost} disabled={title === '' || author === '' || date === '' || content === '' ? true : false}>수정</button>
        </>
    );
};

export default UpdatePost;