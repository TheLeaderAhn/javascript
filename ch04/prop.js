// 조건부 프로퍼티 접근

// ?. 과 ?.[] 을 사용

let o = { x: 1, y: { z: 3 } };
let a = [o, 4, [5, 6]];
o.x; //1
o.y.z; //3
o["x"]; // 1o 프로퍼티 x
a[1]; //4
a[2]["1"]; // 6
console.log(a[2]["1"]);

// ?. null 이거나 undefined 인지만 검증 값이 무엇인지 검증 X

// 기존 조건부
function square(x, log) {
  if (log) {
    log(x);
  }
  return x * x;
}
//조건부 호출 ES2020 이후...
function square(x, log) {
  log?.(x);
  return x * x;
}

// 객체 생성 표현식 -- 앞에 new 붙인다 ...생성자 함수에 인자 없으면 괄호 생략가능
