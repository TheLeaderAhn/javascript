console.log(":::::::::::::::operator:::::::::::::::::");

// in 연산자
let point = { x: 1, y: 1 };
"x" in point; // true

// instanceof 연산자 // 왼쪽 피 연산자가 객체 오른쪽 피연산자 객체의 클래스라고 예상
let d = new Date(); // Mon May 09 2022 16:23:12 GMT+0900 (KST)
d instanceof Date; // true // d는 Date 를 통해 생성
d instanceof Object; // true 객체는 모두 Object의 인스턴스임
d instanceof Number; // false d 는 Number 객체가 아님

let a = [1, 2, 3];
a instanceof Array; // true
a instanceof Object; // ture //배열은 순서 집합 객체임
a instanceof RegExp; // false 배열은 정규식이 아님
//test log
console.log("test log :::", a instanceof RegExp);

// 할당과 연산
//total += salesTax;
// 아래와 동등
//total = total + salesTax;

// 평가 표현식 eval()
eval("3+2"); // 5
console.log(eval("3+2"));

// 3항 연산자
let x = -1;
console.log("x의 절대값 : ", x > 0 ? x : -x);
x > 0 ? x : -x; // x의 절대값

username = undefined;

greeting = "hello " + (username ? username : "ahn!");

console.log(greeting);

// typeof 연산자

// delete 연산자 객체 prop... Array 요소 삭제 하는 단항연산자

let o = { x: 1, y: 2 };
delete o.x;
console.log(o); // {y: 2}
"x" in o;
console.log("x" in o); // false

let array = [1, 2, 3];
delete array[2]; // 3 지움
2 in array; // false
console.log(2 in array);

// 배열길이 변동 x
console.log(array.length); //3  // 성긴 배열이 생긴다../ (ch07 참고)

// await 연산자
