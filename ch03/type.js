// 변환과 일치
null == undefined; // true
null === undefined; // false
console.log(null === undefined); //

//명시적 변환
Number("3");
String(false); // false.toString()과 같음
Boolean([]); // true

// parseInt(), parserFloat()은 시작 부분 공백 무시+ 숫자 해석 안되는 문자 버림
parseInt("3 blind mice"); //3
parseFloat(" 3.14 meters"); // 3.14

//test log
console.log(parseFloat(" 3.14 meters"));

// toString() valueOf() 메서드
({ x: 1, y: 2 }.toString()); // [object Object]
console.log({ x: 1, y: 2 }.toString());

// valueOf()
let d = new Date(2010, 0, 1); // 2009-12-31T15:00:00.000Z
d.valueOf();
console.log(d.valueOf()); // 1262271600000 // 내부적으로 저장하는형식 1970년 1월1일 이후로부터 밀리초 반환

let ad;
let bb;

let i, sum;
