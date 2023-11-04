import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Table from "components/Table";

const Home = () => {
    const navigate = useNavigate();

    const posts = useSelector((state) => state.managepost.posts);

    return (
        <>
        <button onClick={() => {navigate("/post");}}>작성하기</button>
        <table border="1px">
        <thead>
          <tr>
          <th>제목</th>
          <th>내용</th>
          <th>작성일</th>
          <th>작성자</th>
          </tr>
        </thead>

        {posts.map((post) => {
          return <Table post={post} key={post.id} />
        })}
        </table>
        </>
    );
};

export default Home;