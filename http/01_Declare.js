// Node.js 내장 모듈인 'http' 호출
const http = require('http');

// HTTP 서버 생성 및 요청(req), 응답(res)처리
const server = http.createServer((req, res) => {
    // 응답 헤더 설정 (200 OK, ContentType => 일반 텍스트)
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // 클라이언트에 문자열 출력하고 연결 종료
    res.end('Hello, Node.js!');
});

// 서버를 3000번 포트에서 실행
server.listen(3000, () => {
    // 실행시 메시지 출력
    console.log('서버가 http://localhost:3000 에서 실행 중');
});

// 터미널에서 node filName.js 로 실행 가능
// node 01_Declare.js