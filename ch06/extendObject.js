console.log("::::::::::::::::::::::extendObject:::::::::::::::::");

let target = { x: 1 },
  source = { y: 2, z: 3 };

for (let key of Object.keys(source)) {
  target[key] = source[key];
  {
  }
}
target; // {x: 1, y: 2, z: 3}
console.log("target", target);

// 위와 같은 복사 동작 -> extend()임 ES6 Ojbect.assign
// Object.assign(o, defaults) o를 전부 defaults로 덮어쓴다

// 객체 직렬화(serialize)

// JSON.stringify() JSON.parse()
// cj) JSON (JavaScript Object Notation) 자바스크립트 객체 표기법

let coffee = { x: 1, y: { z: [false, null, ""] } };
let st = JSON.stringify(coffee); // {"x":1,"y":{"z":[false,null,""]}}
let par = JSON.parse(st); // {x: 1, y: {z: [false, null, ""]}}
console.log(par);

// toLocaleString() 메서드
let toPoint = {
  x: 1000,
  y: 2000,
  toString: function () {
    return `(${this.x},  ${this.y})`;
  },
  toLocaleString: function () {
    return `(${this.x.toLocaleString()},
        ${this.y.toLocaleString()})`;
  },
};
toPoint.toString(); // "(1000,  2000)"
toPoint.toLocaleString(); // ("(1,000,2,000)");

console.log("toPoint.toString();", toPoint.toString());
console.log("toPoint.toLocaleString();", toPoint.toLocaleString());
