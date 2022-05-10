// 배열은 값의 순서있는 집함 cf) 객체는 순서없는 집합
// javascript  요소에 어떤 타입으든 상관없음 이것저것 섞여도 됨

// 배열 생성법
// 1.배열 리터럴 2.이터러블 객체 분해 연산자 3.Array()생성자 4. Array.of() // Array.from() 팩토리 메서드
let empty = [];
let primes = [2, 3, 5, 7, 11]; // 소수 요소 5개 배열
let misc = [1.1, true, "a"]; // 다른 타입을 가진 배열

//
let base = 1024;

let table = [base, base + 1, base + 2, base + 3];

let b = [
  [1, { x: 1, y: 2 }],
  [2, { x: 3, y: 4 }],
];

// 배열에 ,, 연속해서 쓰는데 그 사이값이 없으면 성긴(sparse)배열이 만들어진다;
let count = [1, , 3]; // 인데스 1에는 요소가 없음
let undefs = [, ,]; // 요소없는배열

console.log("count[1]", count[1]); // undefined
console.log("undefs[1]", undefs[1]);

// 2. 분해 연산자
let aa = [1, 2, 3];
let bb = [0, ...aa, 4]; // 분해 연산자 사용
let cc = [0, aa, 4]; // 미사용 비교
console.log(bb); // [0, 1, 2, 3, 4]
console.log(cc); // [0, [1, 2, 3], 4]
console.log(bb[1]); // 1
console.log(cc[1]); // [1, 2, 3]

// 얇게 (shallow) 복사 할때도 유용함
let original = [1, 2, 3];
let copy = [...original];

copy[0] = 0; // 0
original[0]; // 1  --- 사본을 수정해도 원본에는 영향없음

// 분해 연산자는 모든 이터러블 객체에 동작
let digits = [..."123456789ABCDEFGH"]; // [Log] ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", …]
console.log(digits);

// 3. Array()생성자
let a = new Array(); // [] 동등

let ar = new Array(10); // 지정된 길이 가진 배열

// 4. Array.of() 배열 생성법
Array.of(); // [] 인자가 없으므로 빈배열
Array.of(10); // [10]
Array.of(1, 2, 3); // [1,2,3]

// 5. Array.from(iterable)  ... 분해 연산자 사용한 방식과 동등

let copy2 = Array.from(original);
console.log(copy2); // [1,2,3]
