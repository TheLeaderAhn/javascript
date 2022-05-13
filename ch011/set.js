// Set Classs
console.log("::::::::");

// Set은 집함임(객체임).. 순서없고(인덱스도 없고), 중복허용안함

// Set 객체는 Set() 생성자로
let s = new Set();
//let t = new Set([1, s]); // 요소가 두개 있는 세트

let t = new Set(s); // s요서 벅시힌 세 set

// set -> size 는 배열 length와 같음
console.log(s.size); // 0

s.size; // 0
s.add(1); // Set {1}
s.size; //1
s.add(true); // {1,true}
s.size; // 2
s.add([1, 2, 3]); // {1, true, [1, 2, 3]}
s.size; // 3
s.delete(2);
s.clear(); // 세트의 모든 요소를 모두 제거한다  {}
// 여러가지 추가할대 메서드를 체인으로 연결 가능
s.add("a").add("b").add("c"); // {a,b,c}

// test console0--
console.log("test :  ", s);

// Set 으로 할수 있는 가장 중요한일은 -> 지정된 값이 세트의 요소인지 확인하는것임
// has() 메서드 사용
let oneDigitPrimes = new Set([2, 3, 5, 7]);
oneDigitPrimes.has(2); // true
oneDigitPrimes.has(3); // true
oneDigitPrimes.has(4); // false
oneDigitPrimes.has("5"); // false "5" 문자열임

// has()는 === 로 체크함

console.log("has() 사용 : :", oneDigitPrimes.has("5"));

// 배열 includes() 메서드도 요소의 존재 여부 확인하지만 Set-> has()메서드가 훨씬 빠름

// Set 클래스틑 이터러블 이므로 for / of 루프로 세트 요소 열거 가능

let sum = 0;
for (let p of oneDigitPrimes) {
  sum += p;
  console.log("sum", p, sum);
}
console.log(sum); // 17
// 이터러블이므로 분해연산자 ...ㅓ써서 배열이나 인자 리스트로 변환
[...oneDigitPrimes]; // [2,3,5,7]
console.log([...oneDigitPrimes]);
Math.max(...oneDigitPrimes); // 7
console.log(Math.max(...oneDigitPrimes));

// javascript Set는 index 는 없지만 삽입된 순서는 기억함/./ 순서없는 집합인데 요상함
// forEach() 메서드 지원
let product = 1;
oneDigitPrimes.forEach((n) => {
  product *= n;
});
product; // 210 2* 3*5*7
console.log(product);
