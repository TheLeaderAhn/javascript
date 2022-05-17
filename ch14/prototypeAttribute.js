// Prototype Attribute

// prototype 속석은 (원)객체가 생성될때 설정된다.

// 객체 리터럴로  생성된 객체 -> 프로토타입은 Object.prototype

// Object.getPrototypeOf()에 전달해서 파악가능
Object.getPrototypeOf({}); // Object.prototype
Object.getPrototypeOf([]); // Array.prototype
Object.getPrototypeOf(() => {}); // Function.prototype

// 객체가 다른 객체의 프로토타입인지 -> isPrototypeOf() 메서드로 확인
let p = { x: 1 }; // 프로토타입 객체 생성
let o = Object.create(p); // 그 프로토 타입으로 객체 생성
p.isPrototypeOf(o); // true // o는 p 를 상속한다
console.log("p.isPrototypeOf(o)", p.isPrototypeOf(o));
Object.prototype.isPrototypeOf(p); // true  / p는 Object.prototype을 상속한다
console.log(
  "Object.prototype.isPrototypeOf(p)",
  Object.prototype.isPrototypeOf(p)
);

Object.prototype.isPrototypeOf(o); // true  / o 역시  Object.prototype을 상속한다
console.log(
  "Object.prototype.isPrototypeOf(o)",
  Object.prototype.isPrototypeOf(o)
);
