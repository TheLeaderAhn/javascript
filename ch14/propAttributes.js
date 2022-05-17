// 프로퍼티 속성

// 프로퍼티 동작 세가지 속성

// 1. writable (쓰기 가능 속성) --프로퍼티 값을 바꿀수 있는지
// 2. enummerable(열거 가능 속성) -- for/in 등 열거 가능한지
// 3. configurable(변경 가능 속성) -- 프로퍼티를 삭제 할 수 있는지 //속석을 바꿀소 있는지

// 프로퍼티 서술자
// Object.getOwnPropertyDescriptor();

//반환값  {value: 1, writable:true, enumerable:true, configurable:true }
Object.getOwnPropertyDescriptor({ x: 1 }, "x");

//읽기 전용 접근자 프로퍼티가 있는객체
const random = {
  get octet() {
    return Math.floor(Math.random() * 256);
  },
};

// 반환 값 {get: /* 함수 */ , set: undefined, enumerable:true, configurable:true}
Object.getOwnPropertyDescriptor(random, "octet");

// 상속된 프로퍼티, 존재하지 않는 프로퍼티는 undefined
Object.getOwnPropertyDescriptor({}, "x"); // undefined 존재하지 않습니다.
Object.getOwnPropertyDescriptor({}, "toString"); // undefined 상속되었습니다.

// EX)
let o = {}; // 프로퍼티 없는 상태에서 시작
Object.defineProperty(o, "x", {
  value: 1,
  writable: true,
  enumerable: true,
  configurable: true,
});

o.x; /// 1

Object.keys(o); // [];

// x를 읽기 전용으로 수정
Object.defineProperty(o, "x", { writable: false });

// 프로퍼티값을 변경 시도
o.x = 2; // 실패 // 에러
o.x; // 1;

// 프로퍼티는 여전히 변경 가능하므로 값 바꿀수 있음
Object.defineProperty(o, "x", { value: 2 });
o.x; // 2

Object.defineProperty(o, "X", {
  get: function () {
    return 0;
  },
});

o.x; // 0

// 두개 이상 프로퍼티 수정/생성 Object.defineProperties()
let p = Object.defineProperties(
  {},
  {
    x: { value: 1, writable: true, enumerable: true, configurable: true },
    y: { value: 1, writable: true, enumerable: true, configurable: true },
    r: {
      get() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      },
      enumerable: true,
      configurable: true,
    },
  }
);

p.r; // Math.SQRT2
