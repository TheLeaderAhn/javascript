// 프라미스 // Promises

const { render, handleError } = require("vue");

// 프라미스는 이런 중첩된 콜백을 좀더 선형에 가까운 프라미스 체인으로 바꿔준다 -> 가독성 향상

// 1. 프라미스 사용
//getJSON
// getJSON(url).tetn((jsonData) => {
//   // 비동기적으로 호출될 콜백함수
// });

// // then() 메서드 addEventListener() 메서드와 비슷한 콜백 등록 메서드
// // then() 등록된 함수 단 한번 실행

// // 이름을 동사형으로 짓는 관행있음
// function displayUserProfile(profile) {}

// // Promise와 사용하기
// //getJSON("/api/user/profile").then(displayUserProfile);

// // 프라미스 에러 처리
// getJSON("/api/user/profile").then(displayUserProfile, handleProfileError);

// 프라미스 체인
fetch(documentIR)
  .then((response) => response.json()) //응답의 JSON 바디 가져옴
  .then((document) => {
    return render(document); // 문서를 표시
  })
  .then((rendered) => {
    cachIndatabase(rendered); // 로컬 데이터 베이스에
  })
  .catch((error) => handleError(error)); // 에러 처리

// 콜백 1
function c1(response) {
  let p4 = response.json();
  return p4;
}
// 콜백 2
function c2(profile) {
  displayUserProfile(profile);
}

let p1 = fetch("/api/user/profile"); // 프라미스1 작업 1
let p2 = p1.then(c1); // 프라미드2 작업2
let p3 = p2.then(c2);

//ex
fetch("api/user/profile")
  .then((response) => {
    if (!response.ok) {
      //404 와 또는 비슷한 에러 면
      return null;
    }

    let type = response.headers.get(content - type);
    if (type !== "application/json") {
      throw new TypeError(`expected JSON, got ${type}`);
    }
    return response.json();
  })
  .then((profile) => {
    if (profile) {
      displayUserProfile(profile);
    } else {
      displayLoggedOutProfilePage();
    }
  })
  .catch((e) => {
    if (e instanceof TypeError) {
      displayErrorMessage("Someting is wrong with our serve!!!!");
    } else {
      console.log(e);
    }
  });

// 동기적인 값을 기반으로 하는 프라미스
Promise.resolve();
Promise.reject();

// 처음부터 만드는 Promise
// Promise() 생성자 사용해서 프라미스 객체 만들면 됨 // 매개 변수 관습적으로 resolve, reject

function wait(duration) {
  //  새 프라미스를 생성해 반환한다
  return new Promise((resolve, reject) => {
    if (duration < 0) {
      reject(new Error("Time travel not yet implemented!!"));
    }
    setTimeout(resolve, duration);
  });
}
wait(5000);
console.log(wait(5000));
