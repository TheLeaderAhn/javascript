function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

// 정의한함수 인자로받아 다른 인자 전달해 호출
function operate(operator, operator1, operator2) {
  return operator(operator1, operator2);
}

// 응용
let i = operate(add, 2, 3);
let o = operate(multiply, 4, 5);
console.log("계산값 ::: " + i, ":::", o);

// 같은 함수를 객체 리터럴로 만들기
const operators = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
  pow: Math.pow,
};

console.log(operators.add(1, 2)); // 3
