// 콜백과 비동기 프로그래밍

function logConsoleFunc() {
  console.log("setTimeout 5000...\nloging...");
}

// 1 회 식행
setTimeout(logConsoleFunc, 5000);

// 반복실행
//setInterval(logConsoleFunc, 5000);

//네트워크 이벤트
function getCurrntVersionNumber(versionCallback) {
  // 콜백을 인자로 받습니다.
  // 백엔드의 버전 API에 요청 보냄
  let request = new XMLHttpRequest();
  request.open("GET", "http://www.example.com/api/version");
  request.send();

  // 응답 받으ㄹ때 호출할 콜백
  request.onload = function () {
    if (request.status === 200) {
      let currentVersion = parseFloat(request.responseText);
      versionCallback(null, currentVersion);
    } else {
      versionCallback(response.statusText, null);
    }
  };

  //에러;
  request.onerror = request.ontimeout = function (e) {
    versionCallback(e.type, null);
  };
}

getCurrntVersionNumber(200);

const { rejects } = require("assert");
// node의 콜백 && 이벤트
const fs = require("fs");
const { request } = require("http");
let options = {
  //기본옵션
};

fs.readFile("config.json", "utf-8", (err, text) => {
  if (err) {
    console.warn("config. 파일을 읽을수 없습니다.", err);
  } else {
    Object.assign(options, JSON.parse(text));
  }

  startProgram(options);
});

//

const https = require("https");
const { resolve } = require("path");

// URL  텍스트를 콘텐츠를 읽고 비동기적으로 콜백에 전달한다
function getText(url, callback) {
  request = https.get(url);

  request.on("response", (response) => {
    let httpStatus = response.statusCode;

    response.setEncoding("utf-8");
    let body = "";

    response.on("data", (chunk) => {
      body += chunk;
    });
    // 응답 완료 되면 춯
    response.on("end", () => {
      if (httpStatus === 200) {
        callback(null, body);
      } else {
        callback(httpStatus, null);
      }
    });
  });

  request.on("error", (err) => {
    callback(err, null);
  });
}

// getJSON()
