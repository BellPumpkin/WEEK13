import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// import Table from "components/Table";


// import managepost from "redux/modules/managepost";
import { addPost } from "redux/modules/managepost";

const CreatePost = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const [author, setAuthor] = useState('');

    // const posts = useSelector((state) => state.managepost.posts);
    const navigate = useNavigate();

    const onClickPost = () => {
        if (title.length < 10) {
          return alert("제목은 10글자 이상");
        }
        dispatch(addPost({title, content, date, author}));
        navigate("/");
      };

    return (
        <>
        <div>
          <label htmlFor="">제목 : </label>
          <input value={title} type="text" onChange={(e) => {
            return setTitle(e.target.value);
          }}></input>
        </div>
        <div>
          <label htmlFor="">작성자 : </label>
          <input value={author} type="text" onChange={(e) => setAuthor(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="">작성시간 : </label>
          <input value={date} onChange={(e) => setDate(e.target.value)} type="text"></input>
        </div>
        <div>
          <label htmlFor="">내용</label>
        </div>
        <div>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
        </div>

          <button onClick={onClickPost} disabled={title === '' || author === '' || date === '' || content === '' ? true : false}>작성</button>
        </>
    );
};

export default CreatePost;