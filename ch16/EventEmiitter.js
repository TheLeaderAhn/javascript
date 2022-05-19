// node 에서 이벤트를 방사하는 객체는 이벤트 이미터 (EventEmitter)

const EventEmitter = require("events");
const net = require("net");

// net.Server() 는.. 연결을 처음 주시할 때 listening 이벤트, 클라이언트 연결마다 connection 이벤트, 연결 끊길때 close를 방사 (emit)

let server = new net.Server(); // 서버 객체 생성
server instanceof EventEmitter; // true
console.log(server instanceof EventEmitter);

let nServer = new net.Server();
nServer.on("connection", (Socket) => {
  // connection이벤트 주시
  Socket.ent("hello world", "utf8");
});
