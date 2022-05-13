// Map 클래스 // Map() 생성자를 사용한다.
let m = new Map();
let n = new Map([
  ["one", 1],
  ["two", 2],
]);
n; // {"one" => 1, "two" => 2}
console.log(n);

let copy = new Map(n); // 맵 n 과 같이 키와 값을 가진 새맵
let o = { x: 1, y: 2 };
let p = new Map(Object.entries(o));
console.log("p", p);

// Map은 key 의 집합일뿐 키-값의 쌍 집합이 아님
// 맵에 존재하는 키로 set() 호출하면 해디ㅏㅇ 키에 연결된 값을 수정할뿐 새 키-값 쌍을 수정하는것아님

m.size; // 0;
m.set("one", 1); // Map {"one" => 1}
m.set("two", 2);
m.size; // 2
m.get("three"); // undefined
m.set("one", true); //Map {"one" => true, "two" => 2}
m.size; // 2 사이즈는 변동없음
m.has(true); // false // true 라는 키는 없음 값이 one-> true임
//test('')
console.log("test", m.has(true));
m.delete("one"); // {"two" => 2}
m.clear(); // {}

console.log("test", m);

// 맵의 set역시 체인으로 연결 할수있다
let mm = new Map().set("one", 1).set("two", 2).set("three", 3);
mm; // [Log] mm – Map {"one" => 1, "two" => 2, "three" => 3}
console.log("mm", mm);

let ma = new Map();
ma.set({}, 1); // 빈객체와 숫자 1연결 가능
ma.set({}, 2); // [Log] Map {{} => 1, {} => 2} (2) (map.js, line 41)
ma.size; // 2
ma.get({}); // undefined // 넣을수는 있지만 빈객체가 키값은 아님

console.log(ma.get({}));
