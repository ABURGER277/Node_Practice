/** fs모듈은 read뿐 아니라 write도 가능하다.
 * - 근데 어디다 쓰지?
 * -- Log.txt를 만들 수 있지 않을까.
 */
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // 로그 생성 로직
    const logRequest = (statusCode, message) => {
        // 로그형식은 여러가지가 있을 수 있지만 프로토타입이라 단순하게 만듬.
        const log = `[${new Date().toISOString()}] 요청: ${req.method} ${req.url} → 응답: ${statusCode} (${message})\n`;
        // 로그 파일에 저장
        //fs.appendFile()은 파일이 존재하면 내용을 추가하고, 존재하지 않으면 새로 생성하는 함수
        fs.appendFile('server.log', log, 'utf8', (err) => {
            if (err) console.error('로그 저장 오류:', err);
        });
    };

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('홈페이지입니다!');
        logRequest(200, '홈페이지 정상 응답');
    } else if (req.url === '/error') {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('서버 오류 발생!');
        logRequest(500, '서버 내부 오류');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('페이지를 찾을 수 없습니다.');
        logRequest(404, '페이지 없음');
    }
});

server.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중');
});

/** localhost:3000 */
// 위 링크로 접속하면 요청마다 log가 생성됨.
// 이 디렉토리의 server.log파일 참조