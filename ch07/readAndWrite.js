console.log(
  "::::::::::::::::::::::::::::::Reading and Writing Array Element::::::::::::::::::::::::::::::::"
);

let abc = ["world"];
let value = abc[0];
abc[1] = 3.14;
let i = 2;
abc[i] = 3; // 인덱스 2에 3을 넣는다
abc[i + 1] = "hello";
abc[abc[i]] = a[0];

abc.length;

console.log(abc); // ["world", 3.14, 3, undefined]
console.log(abc.length); //4

// 배열도 결국 객체임(순서있는)
let normal = {}; //
normal[1] = "one"; // 객체에도 적용 가능함 인덱스
console.log("객체 normal[1] 인덱스 :::", normal[1]); // one
console.log("객체 normal 인덱스 :::", normal); // {1: "one"}

// 성긴배열 Sparse Arrays
// 인덱스가 연속적이지 않음 배열

let spa = new Array(5); // length 5 배열
console.log(spa); // [] (5)

let spArr = []; // 요소도 없고 lenhth 0 인 배열
spArr[10] = 0; // 요소 하나 추가 길이 11
console.log("spArr", spArr);

let a1 = [,]; //요서 없고 길이 1
let a2 = [undefined]; // 요소가 undefined 로 하나 있다.

// length 이용 삭제
let le = [1, 2, 3, 4, 5];
le.length = 3;
console.log(le); // [1, 2, 3] (3)

// 요소 추가 삭제
let el = [];
el[0] = "zero";
el[1] = "one";

// push() 메서드는 배열 마지막에 넣는다
el.push("123");
el.push("AAA", "마지막");
console.log(el); // ["zero", "one", "123", "AAA", "마지막"] (5)

// pop()  마지막 요소 제거 + 길이 1 감소
let po = ["a", "b", "c"];
delete po[2]; // ["a", "b"] (3) index 2에 요소 없음
2 in po; // false
po.length; // 3 삭제를 해도 길이는 3
console.log(po);
console.log(2 in po);
console.log(po.length);

// 배열 순회  --> for/of 가 무난
let letters = [..."Hello world!"]; // ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", …] (12)
let string = "";
//원래 문자 만들기
for (let lett of letters) {
  string += lett;
}
console.log(string); // Hello world! 원래 문자로 만듬

// forEach() ---  성긴 배열 인식  전제 하지 않는 요소에해 함수 호출 하지않음
let uppercase = "";
letters.forEach((el) => {
  uppercase += el.toUpperCase();
});
console.log(uppercase); // HELLO WORLD!

// for 루프로 순회
let vowels = "";
for (let i = 0; i < letters.length; i++) {
  let letter = letters[i];
  console.log(letter);
  if (/[aeiou]/.test(letter)) {
    // 정규 표현식 써서 모음이라면 병합 할당
    vowels += letter;
  }
}

console.log("vowels : ", vowels); // "eoo"

/*

// 다 차원 배열
let multiTable = new Array(10);
for (let i = 0; i < multiTable.length; i++) {
  for (let col = 0; multiTablep[row].length; col++) {
    multiTable[row][col] = row * col;
  }
}

*/
