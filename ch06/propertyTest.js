console.log("::::::::::::::::::::::propertyTest:::::::::::::::::");

let pObj = { x: 1 };
"x" in pObj; // true
"y" in pObj; // false

// hasOwnProperty() 객체에 주어진 이름가진 프로퍼티 테스트한다.
let oot = { x: 1 };
oot.hasOwnProperty("x"); // true
oot.hasOwnProperty("y"); // fasle - oot에는 y 프로퍼티가 없습니다.
oot.hasOwnProperty("toString"); // false toString 은 상속된 프로퍼티 입니다.

// propertyIsEnumerable() 은 열거가능 속성확인
oot.propertyIsEnumerable("x"); // true
oot.propertyIsEnumerable("toString"); //false 자체 프로퍼티가 없다
Object.prototype.propertyIsEnumerable("toString"); // false 열거 불가

// in 연산자 대신 !=== 사용도 많이함
oot.x !== undefined; // true property x 존재
oot.y !== undefined; // false property y 없음
oot.toSring !== undefined;

// test Console
console.log(oot.toSring !== undefined);
