// 객체 생성
// 1. 객체 리터럴 {} 사용

let empty = {}; // 프러퍼티가 없는 객체
let ponint = { x: 0, y: 0 };
let p2 = { x: ponint.x, y: ponint.y + 1 };
let book = {
  "main title": "JavaScript",
  "sub-title": "The Definitive Guide",
  for: "all audiences", // for 예약어... 따옴표 사용 안함
  author: {
    firstName: "JaeYoung",
    lastName: "ahn",
  },
};
console.log(book["sub-title"]);
console.log(book.author.lastName);

// 2.new 연산자로 객체 생성해보기
// new keyword 뒤에 반드시 함수호출이 있어야함

let obj = new Object(); // let obj = {}; 와 같음
let arr = new Array(); // 빈배열
let myDate = new Date();
console.log(myDate);
let r = new Map();

// 3.Object.create()
let o1 = Object.create({ x: 1, y: 2 }); // o1 은 x, y 프로퍼티를 상속한다
console.log(o1.x + o1.y); // 3

let o2 = Object.create(null); // 프로퍼티나 메서드를 상속하지 않는다
// --> 일반적인 빈객체 만들때, Object.prototye을 전달해야한다

let o3 = Object.create(Object.prototype); // {} 나 new Object() 와 같이 빈 객체임;

// 서드파티 라이브러리에서 객체를 변경하는 사고를 막을때 create()를 씀

let testObj = { x: "don't change this value" };
//library.function(Object.create(testObj)); // 의도치 않은 변경에 대한 방어

// 프로퍼티 검색 설정 . [] 이용 접근
let author = book.author; // {firstName: "JaeYoung", lastName: "ahn"}
let name = book["main title"];

// 설정
book.edition = 7; // edition 추가
book["main title"] = "ECMAScript"; // main title 변경
//[]를 사용하면 그안의 표현식이 반드시 문자열로 평가함

// test Console
console.log("test Console ::: ", book);
