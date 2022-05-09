// 작은 따옴표 ''  , 큰따옴표 "", 백틱(`)을 사용한다
"실험";
"3.14";

// \d 역슬래시를 써서 문자열 리터럴을 여러줄로 구분가능하다
// \n
let a = "first-line\nseconde-line";
console.log("::::::::::text.js:::::::::::::::::");
console.log("a :::\n" + a);

// \n -- 이스케이프 시퀀스

var test = "You're right, it con't be a quote";
console.log("test--" + test);

// 문자열 비교  ==== 일치 // 불일치 연산자 !=== 가 표준이다.

let s = "Hello, world";
s.substring(1, 4); // ell
console.log(
  "Hello, world:::substring(1,4) == " + '" ' + s.substring(1, 4) + ' "'
);
s.slice(1, 4); // ell 같은결과
s.slice(-3); // rld
console.log("Hello, world:::slice(-3) => " + '" ' + s.slice(-3) + ' "');
s.split(","); // [] 구분하여 배열 만듬
console.log('s.split(",")', s.split(","));

//문자열 검색 (0 부터 숫자셈)
s.indexOf("l"); // 2 -- hel.. 3번째 (0.1.2)
s.indexOf("l", 3);
s.indexOf("ㅋㅋㅋㅋ"); // -1 문자열 없음
s.lastIndexOf("l"); // l이 마지막으로 나타는 위치

// bool Boolean 불리언 값
s.startsWith("Hell"); // true
s.startsWith("hell"); // false
s.endsWith("!"); // false
s.includes("or"); // true world에 포함

// 문지열을 변경합니다.
s.replace("llo", "yayayay"); //Heyayayay, world
s.toLowerCase(); // 전체 소문자
s.toUpperCase(); // 전체 대문자
s.normalize(); // 유니코드 NFC 정규화
s.normalize("NFD");
//Test console
s.charAt(0); // H
s.charCodeAt(0); // 72

// pading func
"x".padStart(3);
"  test".trim(); // 앞뒤 공백제거
"  test".trimStart(); // 왼쪽 공백 제거
"  test".trimEnd(); // 오른쪽 공백제거

//문자열을 배열처럼 접근가능
let AA = "Hello, world";
AA[1]; // e
AA[AA.length - 1]; // d
console.log("테스트 결과 ....." + AA[AA.length - 1]);
