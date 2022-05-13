// 이터레이터와 제너레이터
console.log("Iterators and Generators::::::::::::::::::::::");

// for / of

let sum = 0;
for (let i of [1, 2, 3, 4]) {
  sum += i;
}
sum; // 10
console.log("sum :: " + sum);

// ... 분해 연산자
let chars = [..."abcde"]; // ["a", "b", "c", "d", "e"]
console.log(chars);

let data = [1, 2, 3, 4, 5];
Math.max(data); // NaN
Math.max(...data); //5
console.log(Math.max(...data));

// Map 은 for / of 로 돌리면 좋다
let m = new Map([
  ["one", 1],
  ["two", 2],
]);

for (let [k, v] of m) {
  console.log(k + " " + v);
}
// one 1 , two 2

// 이터러블 동작 방법

// 제너레이터 없이 만들기 -- Symbol.iterator
// 이 메서드는 반드시 next() 메서드가 있는 이터로블 객체를 반환해야함

console.log("이터러블 Range Class");
class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  has(x) {
    return typeof x === "number" && this.from <= x && x <= this.to;
  }
  // 세트 표기법으로 문자열 반환
  toString() {
    return `{ x | ${this.from} ≤ x ≤ ${this.to} } 범위 안에 들어감`;
  }

  // iterator 객체를 반환해서 Range를 이터러블로 만든다.
  [Symbol.iterator]() {
    let next = Math.ceil(this.from); // 다음 반환값
    let last = this.to;
    return {
      // next() 메서드가 이터레이터의 핵심임
      next() {
        return next <= last ? { value: next++ } : { done: true };
      },

      // 이터레이터 자체를 이터러블로 만듬
      [Symbol.iterator]() {
        return this;
      },
    };
  }
}

// 1~10 기록
for (let x of new Range(1, 10)) console.log(x);

// 1.2.3.4.5....10 찍힘

[...new Range(-2, 2)];
console.log([...new Range(-2, 2)]); // [-2, -1, 0, 1, 2]

// 이터러블 반환하는 함수만들
function map(iterable, f) {
  let iterator = iterable[Symbol.iterator]();
  return {
    // 이터레이터 + 이터러블 임...
    [Symbol.iterator]() {
      return this;
    },
    next() {
      let v = iterator.next();
      if (v.don) {
        return v;
      } else {
        return { value: f(v.value) };
      }
    },
  };
}
