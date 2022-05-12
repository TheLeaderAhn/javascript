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

// reduce() reduceRight() 배열요소를 값 하나로 만듬
let red = [1, 2, 3, 4, 5];
red.reduce((x, y) => x + y, 0); // 15 :: 뒤에 0은 초기값 inded :0 == 1  //0 + 1 로 시작하게 만듬
red.reduce((x, y) => x * y, 1); //120   5!
red.reduce((x, y) => (x > y ? x : y)); //5

//reduceRight 위와 돌일하지만 오른쪽 즉 끝에서부터 진행함

red.reduceRight((x, y) => x - y); //-5
red.reduceRight((acc, val) => Math.pow(val, acc));

// test
console.log(red.reduceRight((x, y) => x - y));

// flat() 과 flatMap() 배열 평탄화
[1, [2, 3]].flat(); // [1,2,3]
[1, [2, [3]]].flat(); // [1, 2, [3]](3);

// 인자 사용
let fl = [1, [2, [3, [4]]]];

fl.flat(1); // [1, 2, [3, [4]]] (3)
fl.flat(2); // [1, 2, 3, [4]](4);
fl.flat(3); // [1, 2, 3, 4]
fl.flat(4); // [1, 2, 3, 4] -- flat(3) 이상 평탄화 안함

// test
console.log(fl.flat(4));

// flatMap()
let phrases = ["hello world", "the definitive guide"];
let words = phrases.flatMap((phrase) => phrase.split(" "));
console.log(words); // => ["hello", "world", "the", "definitive", "guide"] (5)

// concat() // 인자를 포함한 새배열 만듬 --> 기존 배열 변환 안함
let cat = [1, 2, 3];
cat.concat(4, 5); //=> [1, 2, 3, 4, 5]
cat.concat([4, 5], [6, 7]); //=> [1, 2, 3, 4, 5, 6, 7]
cat.concat(4, [5, [6, 7]]); //=> [1, 2, 3, 4, 5, [6, 7]] 이중배열 평탄화 안함
cat; // => [1,2,3] 원 배열 바뀌지 않음
console.log(cat);

let stack = [];
stack.push(1, 2); // =>[1, 2]
stack.pop(); //=> [1]
stack.push(3); //=> [1,3]
stack.pop(); //-> [1]
stack.push([4, 5]);
stack.push(...cat); // [1, [4, 5], 1, 2, 3]
console.log(stack);

// shift() unshift() -- 첫부분에 넣고 꺼내기
let q = [];
q.push(1, 2);
q.shift(); // [2]
q.push(3); // [2,3]
q.shift(); // [3];

//unshift() - 넣기
let un = [];
un.unshift(1); // [1]
un.unshift(2); // [2,1]
console.log("q", un);

// slice() -> 지정된 배열의 하위배열 만듬

let sl = [1, 2, 3, 4, 5, 6];
sl.slice(0, 3); // index~ 0부터 3앞까지 -> [1, 2, 3]
sl.slice(3); // [4, 5,6];

console.log("slice() : ", sl.slice(3));

// splice() -> 원래 배열 수정
let ttt = [1, 2, 3, 4, 5, 6, 7, 8];
ttt.splice(4);

console.log("splice() : ", ttt.splice(2));
