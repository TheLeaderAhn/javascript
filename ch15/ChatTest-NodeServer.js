// 노드 서버 http://localhost:8080

// ChatTest.html 에서 보내는 /chat 에 메시지 주고 받는다

const http = require("http");
const fs = require("fs");
const url = require("http://127.0.0.1:5500/ch15/ChatTest.html");

// 채팅 클라인언트
const clientHTML = fs.readFileSync("ChatTest.html");

// ServerResponse 객체배열
let client = [];

// 새로운 서버를 생성하고 포트를 8080을 사용한다
let server = new http.Server();
server.listen(8080);

// 서버는 새로운 요청을 받으면 이함수 실행
server.on("request", (request, response) => {
  // URL 파싱
  let pathname = url.parse(request.url).pathname;

  if (pathname === "/") {
    response
      .writeHead(200, {
        "Content-type": "text/html",
      })
      .end(clientHTML);
  } else if (
    pathname !== "/chat" ||
    (request.method !== "GET" && request.method !== "POST")
  ) {
    response.writeHead(404).end;
  }
});
