let aa;

aa = 0;
aa = 0.01;
// 객체
let book = {
  topic: "javascipt",
  edition: 7,
};
// 객체의 프로퍼티는  . [] 로 접근한다
var a = book.topic;

console.log(a);
console.log(book["edtion"]);

// 배열
let primes = [2, 3, 5, 7];
primes[0]; // index 0 -> 2;
primes.length;

// 할당으로 값을 바꾼다
primes[4] = 9;
console.log("primes[4] :::: ", primes[4]);
primes[4] = 11;
console.log("primes[4] 새 값할당 :::: ", primes[4]);

//2개 요소 가진 배열 이고 각 요소는 객체들임
let points = [
  { x: 0, y: 0 },
  { x: 1, y: 1 },
];

let data = {
  trial1: [
    [1, 2],
    [2, 3],
  ],
  trial2: [
    [4, 5],
    [6, 7],
  ],
};

console.log("point {} 객체를 가진 배열 ::: ", points);
console.log("data 배열을 가진 객체 ::: ", data);

let x = 4,
  y = 3;

// function
function plus1(x) {
  return x + 1;
}

let result = plus1(y);
console.log(result);

let square = function (x) {
  return x * x;
};
console.log("square let::::", square(y));

// 화살표 함수
const plus2 = (x) => x + 1;
console.log("plus2::::::" + plus2(1));

// 객체와 함께 사용하는 함수를 메서드라고 한다

let ab = [];
ab.push(1, 2, 3);
ab.reverse(); // 요소 순서 거꾸로 변환
console.log("a 배열 ::: " + ab);

// this 메서드를 정의하는 대상 개체

points.dist = function () {
  let p1 = this[0];
  let p2 = this;
  console.log(p1);
  let a = p2.x - p1.x;
  let b = p2.y - p1.y;
  return Math.sqrt(a * a + a * b);
};

console.log("aaaaa", points.dist());

// 제어문을 바디로 사용하는 함수

function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x;
  }
}
var absTest = abs(-10) === abs(10); // true
console.log("absTest : " + absTest);

function sum(array) {
  let sum = 0;
  for (let x of array) {
    sum += x;
  }
}
sum(primes);

// ! 팩토리얼 계산
function factorial(n) {
  let product = 1;
  while (n > 1) {
    product *= n;
    n--;
  }
}
factorial(4);
// ver2
function factorial2(n) {
  let i,
    product = 1;
  for (i = 2; i <= n; i++) {
    product += i;
    return product;
  }
}
factorial2(5);

// 자바 스크립트 객체 지향
class Ponint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y); // x^2 + y^2 = c^2
  }
}
