// Date Class

// 현재 시간을 숫자 형식으로 표현
let timestamp = Date.now();
console.log("timestamp ::: " + timestamp);
// 현재 시간을 Date 객체로표현
let now = new Date();
console.log("now ::: " + now);
// 밀리초 타임스탬프 변환
let ms = now.getTime();
console.log("ms ::: " + now);
//표준형식 문자로 변환
let iso = now.toISOString();
console.log("iso ::: " + iso);
