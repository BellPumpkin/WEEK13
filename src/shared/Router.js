import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import CreatePost from '../pages/CreatePost';
import ReadPost from '../pages/ReadPost';
import UpdatePost from 'pages/UpdatePost';

import SignUp from 'pages/SignUp';
import Login from 'pages/Login';

import Layout from './Layout';

// import Contact from '../pages/Contact';
// import Works from '../pages/Works';
// import Work from '../pages/Work';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* 
						Routes안에 이렇게 작성합니다. 
						Route에는 react-router-dom에서 지원하는 props들이 있습니다.

						path는 우리가 흔히 말하는 사용하고싶은 "주소"를 넣어주면 됩니다.
						element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 넣어줍니다.
				 */}
          <Route path="/" element={<Home />} />
          <Route path="post/" element={<CreatePost />} />
          <Route path="post/:id" element={<ReadPost />} />
          <Route path="edit/:id" element={<UpdatePost />} />

          <Route path="login/" element={<Login />} />
          <Route path="signup/" element={<SignUp />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;


// {/* <Route path="contact" element={<Contact />} />
// <Route path="works" element={<Works />} />
// <Route path="works/:id" element={<Work />} /> */}