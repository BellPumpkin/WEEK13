import React, { useState } from 'react';
import axios from 'axios';

function MyFunctionalComponent() {
  const [postData, setPostData] = useState({
    title: '제목',
    body: '내용',
    userId: 1
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handlePostRequest = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', postData)
      .then(res => {
        // console.log(res.data.code);
        setResponse(res.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }

  return (
    <div>
      <button onClick={handlePostRequest}>POST 요청 보내기</button>
      {response && <p>응답 데이터: {JSON.stringify(response)}</p>}
      {error && <p>오류 발생: {error}</p>}
    </div>
  );
}

export default MyFunctionalComponent;
