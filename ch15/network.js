// 네트워크

// 1. 프라미스기반 api http https 요청을 보내는 fetch()
fetch("api/users/current")
  .then((response) => {
    if (
      response.ok &&
      response.headers.get("Content-Type") === "application/json"
    ) {
      return response.json(); // 바디가 이행되면 프라미스 반환
    } else {
      throw new Error(
        `Unexpected response status ${response.status} or content type`
      );
    }
  })
  .then((currentUser) => {
    displayUserInfo(currentUser);
    1;
  })
  .catch((error) => {
    console.log("Error While fetching current user : ", error);
  });
// asysnc await

// Header 객체는 이터러블임
fetch("ch15/networkTest.html").then((response) => {
  for (let [name, value] of response.headers) {
    console.log(`${name}: ${value}`);
  }
});

// 2. 서버 전송 이벤트(SSE - Server Sent Event) 원할때마다 전송하게 웹서버가 네트웍을 열어놈 HTTP 롱폴링

// 3.웹소켓  클라이언트와 서버가 TCP(전송제어 프로토콜 -- transmission Control Protocol) 네트웍소켓과 비슷한 방법으로메시지 주고받을수있음
