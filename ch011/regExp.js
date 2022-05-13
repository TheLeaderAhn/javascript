// 정규 표현식과 패턴 매칭

// 정규표현식의 정의
// javascript에서는 객체로 정규표현식을 나타냄... (정규표현식 자체가 작은 프로그래밍언어임)
// 정규표현식  리터럴 '/~~~/' 슬러시 쌍안에 문자씀

//RegExp 객체 생성
// s로 끝나는 문자열 객체
let pattern = /s$/;

/*
 let pattern = new RegExp("s$");
*/

// 리터럴 문자
// 알파뱃 문자와 숫자는 문자 그대로 해석한다.
// \ <-- 이스케이프 시퀀스 통해 알파벳아닌문자도 지원

/*


영문자, 숫자 // 자기 자신
\0  // null문자 (\u0000)
\t  // 탭 (\u0009)
\n  // 뉴라인
\v  // 세로 텝
\f  // 폼 피드
\r  // 캐리지 리턴
\xnn //  16진수 숫자 nn 으로 나타낸 라틴문자
\uxxx // 
\u{n}
*/

// 문자 클래스 [ ] 써서  문자 클래스로 만들고
// 그 안에 포함된 문자 중 어떤것과도 일치한다.

/[abc]/; // a,b,c 모두와 일치한다.

// 부정 문자 클래스
/[^abc]/; // a,b,c 를 제외한 모든 문자와 일치

// - 하이픈을 써서 문자 범위를 표현가능
/[a-z]/; // a~~~z 까지

// 알파벳 대소문자와 숫자 전체
/[a-zA-Z0-9]/;

/*
[...] // 대괄호안에 있는 어떤문자든 일치
[^...] // 대괄호 안에 포함된문자 뺀 나머지와일치
'
\w // ASCII /[a-zA-Z0-9] 와 일치
\W // /[^a-zA-Z0-9] 와 일치
\s // 유니코드 공백문자 전체일치
\S //유니코드 공백문자 제외한 전체일치
\d  //  /[0-9]/ 와 동등
\D  // /[^0-9]/ 와 동등
*/

// 반복
/\d\d/; // 로 숫자 두개

// 반복횟수 지정 -> 반복할 패턴뒤 붙힘
let r = /\d{2,4}/; // 2~4 개의 숫자
r = /\w{3}\d?/; // 정확히 세글자 그 뒤에 숫자가 있어도 되고 없어도됨.
r = /\s+java\s+/; // "java" 앞뒤에 스페이스 하나 이상
r = /[^(]*/; // ( 를 제외한 문자 0개 이상

/*
{n,m} // n번 이상 m 이하
{n,} // n번 이상
{n}  // 정확히 n 번
? // 0번 또는 1번 // {0,1} 과 동등
+ // 한번이상 // {1,} 과 동등
* // 0번 이상 {0,} 과 동등
*/

// 대체, 그룹, 참조     |  대체옵션들을 분리

/ab|cd|ef/; // "ab","cd","ef"에 모두 일치
/d{3}|[a-z]{4}/; // 숫자 세개 또는 소문자 네개에 일치

/java(script)?/; // java 뒤에 script가 있거나 없을때 일치

// 일치 위치 지정
// 정규 표현식 앵커 (anchor) 라고 부르기도 한다 - -> 문자열 시작 ^ 문자열 끝을 나타내는 $

/^JavaScript$/;

// 플래그
/*

g  // '전역' global 값을 찾아도 끝까지 더찾아봄

i/ / 대소문자를 가리지 않고 일치하는것 찾기 case-insensitive

m // multiline 여러행 모드에서 일치하는것 찾기

s  // ...

u // unicode 16비크값이 아니라 유니코드 코드포인트를 기준으로 동작

y ...

*/

// 문자열 메서드

//1. search() - 패턴에 첫번째로 일치하는 부분 문자열 위치 반환 없으면 -1
"Javascript".search(/script/iu); // 4
console.log("Javascript".search(/script/iu));

"Python".search(/script/iu); // -1
console.log("Python".search(/script/iu));

// 2. replace() 찾아 바꾸기 동작 수행  -> g 플래그 넣으면 전역으로 찾아바꿈
// 대소문자 가리지 않고 찾아 정확한값으로 변경
"JAVaSCript".replace(/javascript/gi, "JavaScript"); // JavaScript
console.log("JAVaSCript".replace(/javascript/gi, "JavaScript"));

let quote = /"([^"])"/g;
'He said "Stop"'.replace(quote, "<<$>>");
console.log('He said "Stop"'.replace(quote, "<<$1>>"));

// 3. math() 가장 널리 쓰임 일치하는것을 배열로 담아 반환 없으면 null

"7 plus 8 equals 15".match(/\d+/g); // 배열 ["7", "8", "15"]
console.log("7 plus 8 equals 15".match(/\d+/g));

// url 분석 정규식
let url = /(\w+):\/\/([\w.]+)\/(\S*)/;
let text = "Visit my blog at http://www.ajyajayjay.com/~ajy";
let fullUrl = text.match(url); //  ["http://www.ajyajayjay.com/~ajy", "http", "www.ajyajayjay.com", "~ajy"]
console.log(fullUrl);

// mathAll() g 가 있는 정규식 받음

// split() 인자를 구분자로 사용해 나누고 배열로 담아 반환
let spl = "123,456,789".split(","); // ["123", "456", "789"]
console.log(spl);

// 인자를 정규식으로 받기
"1 ,2 , 3, \n4, 5".split(/\s*,\s*/);
console.log("1 ,2 , 3, \n4, 5".split(/\s*,\s*/));
// [Log] ["1", "2", "3", "4", "5"]
