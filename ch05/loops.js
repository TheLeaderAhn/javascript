// 반복문 (loops)

// while
let count = 6;
while (count < 10) {
  console.log("count : " + count);
  count++;
}

// do while
function printArry(a) {
  let len = a.length,
    i = 0;
  if (len === 0) {
    console.log("빈 배열");
  } else {
    do {
      console.log(a[i]);
    } while (++i < len);
  }
}

// for
for (let i = 0; i < 10; i++) {
  console.log("for - count : " + i);
}

let i,
  j,
  sum = 0;

for (i = 0, j = 10; i < 10; i++) {
  sum += i * j;
  console.log(i + " 와 " + j + "의 곱의 합  " + sum);
}

function tail(o) {
  for (; o.lext; o = o.next); // o.next 가 true이면 반복한다
  return o;
}

// for/of    iterable objects. ---
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  datasum = 0;
for (let element of data) {
  datasum += element;
  console.log("for of 안쪽 datasum : ", datasum);
}
console.log(datasum); //55

// for/of와 객체  // 일반 객체에 for of 를 사용하려면 typeError가 일어납니다.
/*

let o = { x: 1, y: 2, z: 3 };
for (let el of o) {
  // o는 이터러블아 아니므로 type 에러 남
  console.log(el);
}

*/

// 객체의 프러퍼티 반복분 -> for in문 쓰거나  Object.keys()메서드에 for/of 를 사용해야한다.
let o = { x: 1, y: 2, z: 3 };
let keys = "";
for (let el of Object.keys(0)) {
  keys += el;
}
console.log("객체 for/of : " + keys);

// for / of 문자열
let frequency = {};
for (let letter of "mississippi") {
  if (frequency[letter]) {
    frequency[letter]++;
  } else {
    frequency[letter] = 1;
  }
}

// Set 활용
let text = "Na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for (let e of wordSet) {
  unique.push(e);
  console.log(unique);
}
console.log("unique[] :::: ", unique); // unique ::: Na,na,Batman!

//  Map 활용
//  let m = new Map([1, "one"]);
/*
for (let [key, value] of m) {
  key; // 1
  value; // one
}
*/

// for await
// 스트림에서 비동기적으로 덩어리를 읽고 출력
/*
async function printStream(stream) {
  for await (let chunk of stream) {
    console.log(chunk);
  }
}
*/
// for / in 문  for of 는 of 다음 이터러블 객체가 와야 하지만
// for in 문은 어떤 객체든 쓸수 있다.
for (let p in o) {
  console.log(o[p]);
}

let obj = { x: 1, y: 2, z: 3 };
let Arr = [],
  elel = 0;
for (Arr[elel++] in obj) {
}

console.log(Arr); // ["x", "y", "z"]

for (let el in Arr) console.log("축약 : " + Arr[el]);
