// 기본적인 Router 구현
const http = require('http');

const server = http.createServer((req, res) => {
    // 요청된 URL과 메서드 확인
    console.log(`요청 URL: ${req.url}, 요청 메서드: ${req.method}`);

    if (req.url === '/' && req.method === 'GET') {
        // 한글이라 charset=UTF-8 추가
        // '='에 띄어쓰기 하면 안됨.
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('홈페이지입니다!');
    } else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('소개 페이지입니다!');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('페이지를 찾을 수 없습니다.');
    }
});

server.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중');
});

// 서버가 http://localhost:3000 에서 실행 중

// 브라우저로 localhost:3000 접속

// 요청 URL: /, 요청 메서드: GET
// 요청 URL: /favicon.ico, 요청 메서드: GET
// 요청 URL: /, 요청 메서드: GET

// localhost:3000/about 접속

// 요청 URL: /about, 요청 메서드: GET
