// 날짜와 시간

// Date() 생성자로 생성. 인자가 없으면 현재 날짜와 시간 나타나는 Date객체 반환
let now = new Date(); //  Fri May 13 2022 14:04:31 GMT+0900 (KST) Date객체
console.log(now);

//  Date() 생성자에 숫자인자를 전달하면  1970년 1월 1일 0시 0분 0초 에서 ~ 몇초 지났는지 반환

let epoch = new Date(0); //  Thu Jan 01 1970 09:00:00 GMT+0900 (KST)
let epoch1 = new Date(1000);
console.log("epoch1", epoch1);

// 년 월 일 시
let century = new Date(
  2100, // 2100년
  0, // 1월
  1, // 1일
  2, //02:03:04.0005 , 해당지역
  3,
  4,
  5
);

console.log(century); //Fri Jan 01 2100 02:03:04 GMT+0900 (KST)

// Date 객체 // 월은 0 부터  일은 1부터 시작한다.
let century2 = new Date("2100-01-01T00:00:00Z"); // ISO 형식 날짜
console.log("century2", century2); //Fri Jan 01 2100 09:00:00 GMT+0900 (KST)

let d = new Date(); // 현재 날짜로 객체 만듬
d.setFullYear(d.getFullYear + 1); // 연도를 +1 늘림

// 타임스탬프 Date.now()를 현재 시간을 타임스탬프(밀리초로 보이는) 반환하며 코드가 실행될때 얼마나 걸리는지 판단유용
let startTime = Date.now();
// test 작업
let sum = 0;
testTime();
function testTime() {
  for (let i = 0; i < 50000; i++) {
    sum += i;
  }
}
testTime();
testTime();
let endTime = Date.now();
console.log("startTime :::: " + startTime);
console.log("endTime::::" + endTime);
console.log("소요시간 :::: ", `${endTime - startTime}`);

// 날짜 연산
let dd = new Date();
//dd.setMonth(dd.getMonth() + 5); // 5월 기준-> 10월로 변경

dd.setMonth(dd.getMonth() + 8, dd.getDate() + 20); // 5 + 8 = 13 // 1월로 변경  // 날짜도 넘어가면 자동 변환

console.log("dd 변환날짜:::: " + dd);

// 날짜 문자열 형식과 분석

let td = new Date(2022, 4, 13, 14, 41, 30); // 2022 / 5 / 13 14시 41분 30초   (5월이라도 월은 0부터 시작하므로 4)
console.log("td ::: ", td); // Fri May 13 2022 14:41:30 GMT+0900 (KST)

// 변환
td.toString(); // Fri May 13 2022 14:41:30 GMT+0900 (KST)
td.toLocaleDateString(); // 2022.5.13
td.toUTCString(); // Fri, 13 May 2022 05:41:30 GMT
td.toLocaleTimeString(); // 오후 2:41:30
td.toISOString(); // 2022-05-13T05:41:30.000Z
// 변환 확인
console.log(td.toISOString());
