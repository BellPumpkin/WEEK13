const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// 사용자 데이터베이스 (간단한 메모리 스토리지)
// const users = [
//   { username: 'user1', password: 'password1' },
//   { username: 'user2', password: 'password2' },
// ];

// 로그인 엔드포인트
app.post('/login', (req, res) => {
  const { username, password, users } = req.body;

  // 사용자 검증
//   const user = users.find(u => u.username == username && u.password == password);
  const user = users.find(u => u.userId == username && u.pw == password);

  if (user) {
    // res.json({ message: '로그인 성공', userId: user.id });
    res.json({ message: '로그인 성공', userId: user.id });
  } else {
    res.status(401).json({ message: '로그인 실패' });
    // res.json({ message: '로그인 실패' });
  }
});

app.listen(port, () => {
//   console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
