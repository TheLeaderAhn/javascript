// 프록시 객체
console.log(
  ":::::::::::::::::::::::::::::::::::Target:::::::::::::::::::::::::::::::::::::"
);

// 프록시 객체 생성시 대상객체와 핸들러 객체제공
//let proxy = new Proxy(target, handlers);

let t = { x: 1, y: 2 };
let prx = new Proxy(t, {});
prx.x; // 1
console.log(prx.x);

delete prx.y; // true
console.log(delete prx.y);

t.y; // undefined // 대상객체에도 삭제
console.log(t.y);

prx.z = 3; // 프록시에서 새 프로퍼티를 정의
t.z; // 3;
console.log(t.z);

function accesTheDatabase() {
  /* 생략 */
  return 42;
}

// revocalble()은 프록시 객체와 revoke()가진 객체반환

let { proxy, revoke } = Proxy.revocable(accesTheDatabase, {});
proxy(); // 42 // 프록시 통해서 대상접근
revoke(); // undefined // 원한다면 언제든 접근차단
proxy(); // TypeError 이 함수는 이제 호출 안됨
console.log(proxy());

let indentity = new Proxy(
  {},
  {
    // 프로퍼티는 모두 그 이름을 값으로 가짐
    get(o, name, target) {
      return name;
    },
    has(o, name) {
      return true;
    },
    ownKeys(o) {
      throw new RangeError("속성들이 무한 수 입니다.");
    },
  }
);
