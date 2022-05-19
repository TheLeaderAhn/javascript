// 요청헤더 자격증명 authorization

let authHeaders = new Headers();
let url = "localhost:5500/ch15/auth.html";

// https 연결이 아면 기본인증 안됨
authHeaders.set("Authorization", `Basic ${btoa(`${username} : ${password}`)}`);

fetch("localhost:5500/ch15/auth.html", { headers: authHeaders })
  .then((response) => response.json())
  .then((userList) => displayAllUsers(userList));

let request = new Request(url, { headers });
fetch(request).then(response);

// arrayBuffer()

// Blob() Binary Large Object - 거대한 이진 객체

// formData() 응답바디가 multipart/form-data형식

// 요청 메서드와 요청바디 지정
// 요청방식 - fetch 두번째 인자로 넣으면 method property
fetch(url, { method: "POST" })
  .then((r) => r.json())
  .then(handleResponse);

// 바디에 넣을때
fetch(url, {
  method: "POST",
  body: "Hello world",
});

// 바디에 넣을때
fetch(url, {
  method: "POST",
  headers: new Headers({ "Content-type": "application/json" }),
  body: "Hello world",
});

// toBlolb() 함수는 콜백 기반
// 프라미스 기반 레퍼함수
async function getCanvasBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(resolve);
  });
}

// 캔버스 그림을 PNG 파일로 업로드

async function uploadCanvasImage(canvas) {
  let pngblob = await getCanvasBlob(canvas);
  let formdata = new FormData();
  formdata.set("canvasimage", pngblob);
  let response = await fetch("/upload", { method: "POST", body: formdata });
  let body = await response.json();
}
