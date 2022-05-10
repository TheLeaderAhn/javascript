// forEach() 메서드
// 배열을 순회하며 각요소에서 함수를 호출한다.

let data = [1, 2, 3, 4, 5],
  sum = 0;
function sumData() {
  data.forEach((value) => {
    sum += value;
  });
  return sum;
}
var func = sumData();
console.log(func); // 15
//forEach 문은 중단할 수단없음

// map() 메서드
let m = [1, 2, 3];
let mm = m.map((x) => x * x); // [1,4,9]
console.log(mm);

// filter() 기존 배열의 일부만 포함하는 부분 집합을 반환 . 전달하는 함수 기준 true/false 반환
let fi = [5, 4, 3, 2, 1];
fi.filter((x) => x < 3); //  [2, 1]
console.log(fi.filter((x) => x < 3));
let t1 = fi.filter((x, i) => i % 2 === 0); // [5, 3, 1] (
console.log(t1);
// filter() 는 성긴배열에서 존재하지않는값 건너뜀 //

// filter()를 써서 undefined, null 요소 제거 가능!!
fi = fi.filter((x) => x !== undefined && x !== null);

// find() 와 findIndex() // 만족하는 첫번째 요소를 찾는 즉시 순회를 멈춤
// find()는 그 요소 findIndex()는 index를 반환
let id = [1, 2, 3, 4, 5];
id.findIndex((x) => x === 3); // 3이 index 2에 있음
id.findIndex((x) => x < 0); // -1 반환 배열에 음수가 없음
let seven = id.find((x) => x % 7 === 0); // undefined  7의 배수 없음
console.log(
  "id.findIndex ::: ",
  id.findIndex((x) => x === 3),
  " // ",
  id.findIndex((x) => x < 0)
);

console.log(seven);

// every() some() 판별함수를 적용하고 true false 반환

// every() 모든 요소가 true 일때 true
id.every((x) => x < 10); // true
id.every((x) => x % 2 === 0); // false

console.log(id.every((x) => x % 2 === 0));

// some() 배열 요소중 true 가 하나라도 있으면 true
id.some((x) => x % 2 === 0); // true
// id.some(isNan); false

console.log(id.some((x) => x % 2 === 0));
