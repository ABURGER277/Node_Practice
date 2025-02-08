// index.html 파일을 불러오는 코드를 만들어보자.
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // 요청오면 index.html 불러와서
        fs.readFile('index.html', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
                res.end('서버 오류: 파일을 읽을 수 없습니다.');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            // 지금까지는 end에 문자열 넣어서 클라에게 보여줬지만 이런식으로 index.html파일 자체를 보낼 수 있음.
            res.end(data);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('페이지를 찾을 수 없습니다.');
    }
});

server.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중');
});

/** localhost:3000 */
// 웹사이트 정상 작동(200)