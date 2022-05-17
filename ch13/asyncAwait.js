// async && awiat
// 프라미스 기반의 비동기 코드를 동기적 코드 처럼 작성하게 해줌

/*
await 표현식
프라미스를 받아 반환값이나 예외로 바꾼다.
프라미스 객체 p 가 있을때 표현식 await p는
*/

// await p 는 p가 완료 될때 까지 대기 합니다.

// let response = await fetch("api/user/profile");
// let profile = await Response.json();

// await 키워드는 프로그램 흐름을 차단하지 않으며 , 지정된 프라미스가 완료되기 전에는 아무일도 하지 않는 점이 중요하다
// 코드는 여전히 비동기적이다.

// async 함수
async function getHighScore() {
  let response = await fetch("/api/user/profile");
  let profile = await response.json();
  return profile.highScore;
}

// async 로 선언하면 설령 바디에 프라미스 관련 코드가 없더라ㄱ도 반환값은 프라미스임

// 여러개의 프라미스 대기
async function getJSON(url) {
  let response = await fetch(url);
  let body = await response.json();
  return body;
}
// let value1 = await getJSON(url1);
// let value2 = await getJSON(url2);

// 둘다 동시에 불연속적이게 하기
let [value1, value2] = await Promise.all([getJSON(url1), getJSON(url2)]);

async function f(x) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(
        (function (x) {
          /* 바디 */
        })(x)
      );
    } catch (e) {
      reject(e);
    }
  });
}
