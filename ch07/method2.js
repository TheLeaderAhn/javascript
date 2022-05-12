console.log(
  "::::::::::::::::::::::::::::::::method2:::::::::::::::::::::::::::::::::::::::::::::::::::::"
);

// indexOf lastIndexOf

let idx = [0, 1, 2, 10, 4, 5]; // 1
idx.indexOf(1);
idx.lastIndexOf(1);
console.log("a ::: " + idx.lastIndexOf(0));

function findall(idx, x) {
  let results = [],
    len = idx.length,
    pos = 0;
  while (pos < len) {
    pos = idx.indexOf(x, pos);
    if (pos === -1) break;
    results.push(pos);
    pos = pos + 1;
  }
  return results;
}

findall([1, 2, 3], 3);
console.log(findall([3, 34, 5], 3));

// includes(); 배열에 인값ㅣ 있으면 true
let inc = [1, true, 3, NaN];
inc.includes(true); // true
inc.includes(2); // false
inc.includes(NaN); //true
inc.indexOf(NaN); // -1 indexOf는 못찾음
console.log(inc.indexOf(NaN));

// sort() 배욜 요소를 정렬
let sor = ["banana", "cherry", "apple"]; // ["apple", "banana", "cherry"]
console.log(sor.sort());

let size = [33, 4, 1111, 222];
size.sort(); // [1111, 222, 33, 4]
size.sort(function (a, b) {
  return a - b;
});
size.sort((a, b) => b - a);
console.log(size.sort((a, b) => b - a));

// reverse() // 배열 요소를 거꾸로 반환 - 기존배열 뒤집음
let b = [1, 2, 3];
b.reverse();
console.log(b.reverse());

// 배열을 문자열로 변환
let j = [1, 2, 3];
j.join(); // "1,2,3"
j.join(" "); // 1 2 3
j.join(""); // 123

let jj = new Array(10); // 요소없이 길이 10 인 배열
jj.join("-"); // --------- 9개
[1, 2, 3].toString(); // 123
["1", "2", "3"].toString(); // 1,2,3

console.log("test :::::: ");
console.log(["1", "2", "3"].toString());

// 배열 비슷한 객체

let aObj = {};

// 객체-> 배열처럼 만들기
let i = 0;
while (i < 10) {
  aObj[i] = i * i;
  i++;
  aObj.length = i;

  let total = 0;
  for (let el = o; aObj.length; el++) {
    total += aObj[el];
  }
}
