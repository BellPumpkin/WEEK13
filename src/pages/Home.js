import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';


import "../App.css";

const CreateBtn = {
  // display: 'flex',
  // justifyContent: 'flex-end', // 오른쪽으로 정렬
  // paddingRight: '20px', // 원하는 간격 설정

  display: 'flex',
  justifyContent: 'flex-end', // 오른쪽으로 정렬
  paddingRight: '20px', // 원하는 간격 설정
  marginTop: '20px' // 위쪽 간격 추가
}

const TableStyles = {
  width: '100%',
  border: '1px solid #ccc',
  borderCollapse: 'collapse',
}

const TableHeaderStyles = {
  background: 'lightgray',
  color: 'black',
  fontWeight: 'bold',
}

const TableCellStyles = {
  padding: '8px',
  textAlign: 'center',
  border: '1px solid #ccc',
}

const ColGroupStyles = {
  col1: { width: '5%' },  // 첫 번째 열의 너비
  col2: { width: '40%' },  // 두 번째 열의 너비
  col3: { width: '15%' },  // 세 번째 열의 너비
  col4: { width: '10%' },  // 네 번째 열의 너비
}

const SearchStyles = {
  display: 'flex',
  alignItems: 'center', // 수직 중앙 정렬
  marginTop: '10px',
}

const SearchLabelStyles = {
  flex: '0 0 auto', // 자동 확장 금지
  marginRight: '10px', // 레이블과 입력란 사이 간격 조절
}

const SearchInputStyles = {
  flex: '1', // 가능한 모든 공간 차지
  marginRight: '10px', // 검색 입력란과 검색 버튼 사이 간격 조절
}

const SearchButtonStyles = {
  flex: '0 0 auto', // 자동 확장 금지
}


const Home = () => {
    const navigate = useNavigate();
    const posts = useSelector((state) => state.managepost.posts);

    // const users = useSelector((state) => state.manageuser.users);
    // console.log(users); // 로그인 후 redux 추가 확인

    // // 포스트 검색 창
    const [findPost, setFindPost] = useState("");
    // console.log(findPost);

    // function onClickFindPost() {
    //   const posts = useSelector((state) => state.managepost.posts);
    //   const param = useParams();
    
    //   const post = posts.find((post) => post.id === parseInt(param.id));
    // }

    return (
      <>
      <div style={{ display: 'flex', justifyContent: 'center', minHeight: '90vh' }}>
        <div style={{ width: '100%', height: '200px' }}>
          <div style={{ ...CreateBtn }}>
            <button style={{margin: "20px"}} onClick={() => {navigate("/post");}}>작성하기</button>
          </div>
          <div style={{ width: '100%', height: '200px' }}>
            <table style={{ ...TableStyles }}>
              <colgroup>
                <col style={ColGroupStyles.col1} />
                <col style={ColGroupStyles.col2} />
                <col style={ColGroupStyles.col3} />
                <col style={ColGroupStyles.col4} />
              </colgroup>
              <thead>
                <tr>
                  <th style={{ ...TableHeaderStyles }}>글 번호</th>
                  <th style={{ ...TableHeaderStyles }}>제목</th>
                  <th style={{ ...TableHeaderStyles }}>작성일</th>
                  <th style={{ ...TableHeaderStyles }}>작성자</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                  <td style={TableCellStyles}>{post.id}</td>
                  <td style={TableCellStyles}><Link to={`/post/${post.id}`}>{post.title}</Link></td>
                  <td style={TableCellStyles}>{post.date}</td>
                  <td style={TableCellStyles}>{post.author}</td>
              </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* <div style={{ ...SearchStyles }}>
            <label style={{ ...SearchLabelStyles }}>검색 :</label>
            <input style={{ ...SearchInputStyles }} type="text" onChange={(e) => { setFindPost(e.target.value) }} />
            <button style={{ ...SearchButtonStyles }}>검색</button>
          </div> */}
        </div>

      </div>
      </>
    );
};

export default Home;
