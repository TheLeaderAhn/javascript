//클로저 : 함수의 객체와 스코프를 조합한것

let scope = "global scope"; // 전역변수
function checkscope() {
  let scope = "local scope"; // 로컬 변수
  function f() {
    return scope;
  }
  return f();
}

checkscope(); // => local scope
console.log(checkscope());

function checkscope1() {
  let scope = "local scope"; // 로컬 변수
  function f() {
    return scope;
  }
  return f;
}

let s = checkscope1()();
console.log(s);

function counter() {
  let n = 0;
  return {
    count: function () {
      return n++;
    },
    reset: function () {
      n = 0;
    },
  };
}
let c = counter(),
  d = counter();

c.count();

console.log(c.reset());

// bind() 함수를 객체에 결함
function f(y) {
  return this.x + y;
}
let o = { x: 1 };
let g = f.bind(o);
conslog.log(g);
