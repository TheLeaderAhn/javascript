// extends와 super 사용하는 서브클래스
console.log(":::::::::::::::::extendAndsuper::::::::::::::");
class EZArray extends Array {
  get first() {
    return this[0];
  }
  get last() {
    return this[this.length - 1];
  }
}
let a = new EZArray();
a instanceof EZArray; //true
console.log(a instanceof EZArray);
// instanceof 연산자는 생성자의 prototype 속성이 객체의 프로토타입 체인 어딘가 존재하는지 판별합니다.
a instanceof Array; // true
a.push(1, 2, 3, 4);
a.pop(); // 4
a.last; // 3
a[1]; //2

Array.isArray(a); //true
EZArray.isArray(a);
// test Console
console.log("test::", EZArray.isArray(a));

class TypeMap extends Map {
  constructor(keyType, valueType, entries) {
    if (entries) {
      for (let [k, v] of entries) {
        if (typeof k !== keyType || typeof v !== valueType) {
          throw new TypeError(`Wrong type for entry [${k}, ${v}]`);
        }
      }
    }
    // 타입 확인한 entries로 슈퍼 클래스 초기화
    super(entries);
    this.keyType = keyType;
    this.valueType = valueType;
  }

  // 맵에 추가 되는 새 항복마다 타임체크 -> set()
  set(key, value) {
    if (this.keyType && typeof key !== this.keyType) {
      throw new TypeError(`${key} is not of type ${this.keyType}`);
    }
    if (this.valueType && typeof value !== this.valueType) {
      throw new TypeError(`${value} is not of type ${this.valueType}`);
    }

    // 슈퍼클래스 set() 메서드 호출해서 맵에 항목 추가
    return super.set(key, value);
  }
}

// 히스토그램  위임과 상속

class Histogram {
  // 위임할 Map 객체
  constructor() {
    this.map = new Map();
  }
  count(key) {
    return this.map.get(key) || 0;
  }
}
