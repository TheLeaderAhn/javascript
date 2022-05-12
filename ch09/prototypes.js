// 클래스와 프로토타입
// javascript 클래스는 프로토타입 객체에서 프로퍼티 상속하는 개체 집함

// Object.create()로 프로타입을 상속하는 객체를 쌩성한다면... .. 자바스크립트 클래스를 정의한것임

function range(from, to) {
  //Object.create()를 써서프로토 타입객체를 상속하는 객체 생성 --- 프로토타입객체는
  // 이 함수의 프로퍼티로 저장됨
  let r = Object.create(range.methods);
  r.from = from;
  r.to = to; // 시작 끝 지정
  return r;
}
// 프로토타입 객체는 range 객체가 상속하는 메서드 정의
range.methods = {
  includes(x) {
    return this.from <= x && x <= this.to;
  },
  //
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },
  // 범위
  toString() {
    return "(" + this.from + "..." + this.to + ")";
  },
};

// Range 객체 사용
let r = range(1, 3); // => {from: 1, to: 3}
r.includes(2); // => true  2는 범위 안임
r.toString(); // => (1...3)
[...r]; // [1,2,3]
console.log([...r]); //

// 생성자 이용 정의 -> new 키워드 사용

// prototype 프로퍼티를 가지는것은 함수 객체다!
