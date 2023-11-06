import React from "react";

function Sorry() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center", // 수평 정렬을 위한 설정
    flexDirection: "column", // 컨텐츠를 세로로 정렬
    alignItems: "center", // 수직 정렬을 위한 설정
    marginTop: '185px'
  };

  const textStyle = {
    fontSize: "24px", // 원하는 폰트 크기 설정
    textAlign: "center", // 텍스트 가운데 정렬
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        <h3>※ 과제를 진행하며 체크할 부분</h3>
        <p>- 상태 관리 (유지/초기화)가 잘 되어 있나요?</p>
        <p>- 각 컴포넌트의 재사용성이 높나요?</p>
        <p>- 예외 처리가 미흡한 부분은 없나요?</p>
      </div>
      {/* <div style={{ border: 'dotted 1px', margin: '10px', padding: '30px', marginLeft: '10px'}}>
          <p style={{ textAlign: "center" }}>★☆ 반성문 ★☆</p>
          <p>1. 혼자 다니지 않겠습니다.</p>
          <p>2. 팀 활동을 잘하겠습니다.</p>
      </div> */}
    </div>
  );
}

export default Sorry;
