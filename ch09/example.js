console.log("example");

//예제 복수수 클래스
// cf 복소수  실수 + 허수 의 합이면 허수 i -1 제곱근

class Complex {
  // 실수 r 허수 i 정의

  constructor(real, imaginary) {
    this.r = real;
    this.i = imaginary;
  }

  // 복소수 덧셈 곱셈 인스턴스 메서드 ex) c.plus(d) 으로 이용
  plus(that) {
    return new Complex(this.r + that.r, this.i + that.i);
  }
  times(that) {
    return new Complex(
      this.r * that.r - this.i * that.i,
      this.r * that.i + this.i * that.r
    );
  }

  // 복소수 연산 메서드 정적
  static sum(c, d) {
    return c.plus(d);
  }
  static product(c, d) {
    return c.times(d);
  }

  // 게터처럼 쓸수 있게 정의
  get real() {
    return this.r;
  }
  get imaginary() {
    return this.i;
  }
  get magnitude() {
    return Math.hypot(this.r, this.i);
  }

  toString() {
    return `{${this.r},${this.i}}`;
  }
  equals(that) {
    return that instanceof Complex && this.r === that.r && this.i === that.i;
  }
}

Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);

let c = new Complex(2, 3);
let d = new Complex(c.i, c.r);
Complex.ZERO.toString(); // => "{0,0}";

// 기존 클래스에 메서드 추가
// 자신의 켤레 복소수 반환
Complex.prototype.conj = function () {
  return new Complex(this.r, -this.i);
};

// 객체 지향 프로그래밍에서 클래스 B 가 클래스  A 를 확장할때(extend)

// A는 super 클래스 B는 서브 클래스라고한다/

// 서브 클래스에서 사용할 생성자 함수
function Span(start, span) {
  if (span >= 0) {
    this.from = start;
    this.to = start + span;
  } else {
    this.to = start;
    this.from = start + span;
  }
}
// Span은 Range 프로토타입을 상속한다
Span.prototype = Object.create(Range.prototype);
//toString() 메서드 따로 정의 (덮어씀)
Span.prototype.toString = function () {
  return `(${this.from}... +${this.to - this.from})`;
};

// 핵심
Span.prototype = Object.prototype(Range.prototype);
