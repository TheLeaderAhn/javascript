// undefined 초기화 되지 않은 변수의 값이 존재 하지 않은 객체프로퍼티나 배열요소에 접근...

// Symbol
let strname = "string name";
let symname = Symbol("propname");

// 객체는 가변이므로 값을 바꿀수 있습니다.
let oo = { x: 1 };
oo.x = 2;
oo.y = 3;
// { x: 2, y: 3 }
console.log("1차 변경", oo);

let a = ["a", "b", "c"];
let b = [];
for (let i = 0; i < a.length; i++) {
  b[i] = a[i]; // a요소 b에 복붙
  console.log(b[i] + "... 복붙");
}
let c = Array.from(b);
console.log("Array.from으로 복붙 : " + c);

// 배열 비교하는 함수
function equalArrays(a, b) {
  if (a === b) return true;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true; // 모두 같다면 일치
}
