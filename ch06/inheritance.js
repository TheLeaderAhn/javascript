console.log("::::::::::::::::::::::Inheritance:::::::::::::::::");

let o = {}; //Object.prototype 에서 객체 메서드를 상속
o.x = 1;
let p = Object.create(o); // p는 o 와 Object.prototype에서 상속
p.y = 2;
let q = Object.create(p);
q.z = 3;
let f = q.toString();
console.log(q.x + q.y); // 3

// ex2)
let unitcircle = { r: 1 };
let c = Object.create(unitcircle); // 프로퍼티 r 상속받음 {r: 1}
c.x = 1;
c.y = 1;
c.r = 2; // 상속 받은 값을 덮어쓴다.

unitcircle.r; // 1: ㅡ포토타입은 영향받지 않는다

console.log(c);
console.log(unitcircle.r);

book["subMain"]; // undefined 프로퍼티를 찾지 못하면 undefined로 평가

let surname = undefined;
if (book) {
  if (book.author) {
    surname = book.author.surname;
  }
}

// test Console
console.log("test Console ::: ", book["subMain"]);
