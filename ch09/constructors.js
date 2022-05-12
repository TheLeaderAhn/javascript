// 생성자

// 초기화
function Range(from, to) {
  this.from = from;
  this.to = to;
}

// Range 객체는 이제 모두 위 객체를 상속함

// 코드가 동작위해서 반드시 프로퍼티이름 prototype 이여야한다
Range.prototype = {
  //x가 범위 안 true 아니면 false 만들것임
  include: function (x) {
    return this.from <= x && x <= this.to;
  },
  // 클래스 인스턴스를 이터러블로 만드는 제너레이터
  [Symbol.iterator]: function* () {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },
  toString: function () {
    return "(" + this.from + "..." + this.to + ")";
  },
};

let r = new Range(1, 3);
r.include(2); // ture
r.toString(); // (1...3)
[...r]; // [1,2,3]
console.log([...r]);

// 관습적으로 클래스 이름은 대문자... 일반적 함수 // 메서드 이름은 소문자로 시작한다

// 생성자 클래스의 본질 instanceof

// 두객체가  같은 프로토타입객체를 상속하지 안흔다면 /같은 클래스의인스턴스가 아님

// 객체가 클래스의 맴버인지 확인할때 instanceof
r instanceof Range; // true r 은 Range.prototypedmf 상속함
console.log(r instanceof Range);

function Strange() {}
Strange.prototype = Range.prototype;
new Strange() instanceof Range; // => true

console.log(new Strange() instanceof Range);

// 생성자 프러퍼티
// 일반적인 자바스크립트 함수는 자동으로 prototype 프로퍼티를 같는다.

let F = function () {}; // 함수 객체;
let p = F.prototype; // F에 연결되 프로토 타입객체
let c = p.constructor;
c === F; // ㅅ겯
console.log(c === F);
