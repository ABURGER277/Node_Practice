const http = require('http');

const server = http.createServer((req, res) => {
    // 요청된 URL과 메서드 확인
    console.log(`요청 URL: ${req.url}, 요청 메서드: ${req.method}`);

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('홈페이지입니다!');
    } else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('소개 페이지입니다!');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('페이지를 찾을 수 없습니다.');
    }
});

server.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중');
});

// localhost:3000/about 등으로 라우팅 테스트 가능