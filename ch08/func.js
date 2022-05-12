// 함수

// 선언 declaration
function printprops(o) {
  for (let p in o) {
    console.log(`${p}: ${o[p]}\n`);
  }
}
printprops(["1", "23"]);

// 카르테시안 좌표
function distance(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  console.log("distance return :::", Math.sqrt(dx * dx + dy * dy));
  return Math.sqrt(dx * dx + dy * dy);
}
distance(1, 2, 3, 4);

// 팩토리얼 -- 재귀함수(자기자신을 호출)
// X!
function factorial(x) {
  if (x <= 1) {
    return 1;
  }
  return x * factorial(x - 1);
}

// 함수 표현식 - > 익명함수 사용가능
const square = function (x) {
  return x * x;
};

const f = function fact(x) {
  if (x <= 1) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
};

// 화살표 함수 (람다) --- 주의 람다 사용할대 줄바꿈하면 안됨
const sum = (x, y) => {
  return x + y;
};

const sum2 = (x, y) => x + y;

console.log(sum2(5, 2));

const polynomial = (x) => x * x + 2 * x + 3;
console.log(polynomial(5));

// 매개 변수 없을때 반드시 빈괄호 써야함
const constantFunc = () => 42;
console.log(constantFunc()); // 42

// 중괄호 써서 혼동 막기도함
const ff = (x) => {
  return { value: x };
};

// 중첩된 함수
function hypotenuse(a, b) {
  function square(x) {
    return x * x;
  }
  return Math.sqrt(square(a) + square(b));
}

// 함수 호출 invoking Functions
// 1.함수로 호출 , 2메서드로 호출. 3. 생성자로 호출, 4. call()//apply()메서드 간접호출 5.묵시적 호출

//1함수로호출
printprops({ x: 1 });
let total = distance(0, 0, 2, 1) + distance(2, 1, 3, 5);
let probablility = factorial(5) / factorial(13);

// return문 안만나고 함수 끝에 도달하면 인터프린터가 -> undefined

// undefined 아닌경우에 실행하기
// f !== null && f !== undefined ? f(x) : undefined;
/*

// 스트릭트 모드에 있는지 확인?
const strict = (function () {
  return !this;
})();

*/

// 2메서드로 호출
// 객체 리터럴
let calculator = {
  operand1: 1,
  operand2: 1,
  add() {
    //this. --> 포함하는 객체 참조
    this.result = this.operand1 + this.operand2;
  },
};
calculator.add(); // 1+1
calculator.result; // 2
console.log("ccc", calculator.result);

// this 이해
// 예제 객체o
let o = {
  m: function () {
    let self = this; //this값을 변수에 저장
    this === o; // true
    f();

    function f() {
      this === o; // false //./.. this는 전역객체이거나 undefined
      self === o; // true // self외부 this임.
    }
  },
};

// 3. 생성자로 호출 new 키워드를 붙이면 생성자로 호출된다.
//o1 = new Object();
//o2 = new Object; 괄호 생략가능

// 4. 간적호출
