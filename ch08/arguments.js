// 선택사항인 매개변수와 기본값
function getPropertyNames(o, a) {
  if (a === undefined) a = [];
  for (let property in o) a.push(property);
  return a;
}

// getPropertyNames()
let o = { x: 1 },
  p = { y: 2, z: 3 };
let a = getPropertyNames(o);
console.log(a); // ["x"] o의 프로퍼티를 새배열에 담는다 위 참고
//getPropertyNames(p, a); // ["x", "y", "z"]
console.log(getPropertyNames(p, a));

const rectangle = (width, height = width * 2) => ({ width, height });
rectangle(1); // {width: 1, height: 2}
console.log(rectangle(1));

// 최대값 구하기
function max(first = -Infinity, ...rest) {
  let maxValue = first; // 첫 인자가 가장크다고 가정
  // 나머지 인자를 순회하면서 더 큰값 찾는다
  for (let n of rest) {
    if (n > maxValue) {
      maxValue = n;
    }
  }

  return maxValue;
}

max(1, 10, 100, 2, 3, 1000, 4, 5, 6); // 1000
console.log(max(1, 10, 100, 2, 3, 1000, 4, 5, 6));

// 함수호출&& 분해연산자 ... (배열 문자 등 이터러블객체 분해)
let numbers = [5, 2, 10, -1, 9, 100, 1];
Math.min(...numbers); // -1
console.log(Math.min(...numbers));

function timed(f) {
  return function (...args) {
    console.log(`Entering function ${f.name}`);
    let startTime = Date.now();
    try {
      return f(...args); // 인자를 분해
    } finally {
      console.log(`Exiting ${f.name} after ${Date.now() - startTime}ms`);
    }
  };
}

function benchmark(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum;
}

let rrr = benchmark(100);
console.log("benchmark ::: " + rrr);

function vectorAdd(v1, v2) {
  return [v1[0] + v2[0], v1[1] + v2[1]];
}
vectorAdd([1, 2], [3, 4]); // [4,6]

console.log(vectorAdd([1, 2], [3, 4]));

// 인자 타입
function sum(a) {
  let total = 0;
  for (let element of a) {
    if (typeof element !== "number") {
      throw new TypeError("sum() : elements must be numbers");
    }
    total += element;
  }
  return total;
}
sum([1, 2, 3]); // 6
//sum(1, 2, 3); // typeError 1은 이터러블 아님
//sum([1, 2, "3"]); //  인덱스 2는"3"" 숫자가 아닙니다.
// console.log(sum([1, 2, "3"]));

// 함수를 값으로서 변수에 할당 될수도 있다..

function square(x) {
  return x * x;
}

let s = square; // s는 squre와 같은 한수를 참조

square(4); // 16
s(4); //16
console.log(s(4));
