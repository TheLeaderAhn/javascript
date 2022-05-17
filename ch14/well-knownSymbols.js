// 잘 알려진 심벌

// Symbol.iterator  // Symbol.asyncIterator 가 대표적임

// Symbol. hasInstance
let uint8 = {
  [Symbol.hasInstance](x) {
    return Number.isInteger(x) && x >= 0 && x <= 255;
  },
};

128 instanceof uint8; // true
256 instanceof uint8; // false

Math.PI instanceof uint8; // false 정수가 아니다

console.log(Math.PI instanceof uint8);

// Symbol.toStringTag

// 기본 js 객체에서 toString()메서드를 호출하면 [Object Object] 가 반환됨
let normalObj = {};
normalObj.toString(); //[object  object]
console.log(normalObj.toString());
Object.prototype.toString.call([]); // [object Array]
Object.prototype.toString.call(/./); // [object RegExp]
Object.prototype.toString.call(() => {}); // "[object Function]"
Object.prototype.toString.call(""); // [object String]
Object.prototype.toString.call(0); // [object Number]
Object.prototype.toString.call(false); // "[object Boolean]"

console.log(
  "Object.prototype.toSting.call():::::",
  Object.prototype.toString.call(false)
);

// 객체 타입 정보 얻기
function classof(o) {
  return Object.prototype.toString.call(o).slice(8, -1); //  .닟ㄷ[Object NUll] -> Null 로 보이게함
}

classof(null); // "Null"
classof(undefined); // "Undefined";
classof(1); // Number
classof(10n ** 100n); // BigInt
classof(""); // String
classof(false); // Boolean
classof(Symbol()); // Symbol

console.log("classof 함수 만들어서 사용 ::: ", classof(Symbol()));

// 14.4.4 Symbol.species;
// class 와 extends 키워드 사용해 내장 클래스 확장

class EZArray extends Array {
  get first() {
    return this[0];
  }
  get last() {
    return this[this.length - 1];
  }
}

let e = new EZArray(1, 2, 3);
let f = e.map((x) => x * x);
e.last; // 3
f.last; // 9
console.log(f.last);

// *  ,  ? 사용 하는 패턴 매칭 클래스
// 아래 와 같은 패턴을 글롭 (glob)이라 한다

class Glob {
  constructor(glob) {
    this.glob = glob;

    // 내부적으로 정규식을 사용해 글롭을 검색
    // ?는 /를 제외한 글자 하나에 일치하고  *는 0개 이상의 글자에 일치한다
    let regexpText = glob.replace("?", " ([^/])").replace("*", "([^/]*)");

    // 유니 코드 인식 위해 u 사용
    this.regexp = new RegExp(`^${regexpText}$`, "u");
  }

  // toString()
  toString() {
    return this.glob;
  }

  [Symbol.search](s) {
    return s.search(this.regexp);
  }
  [Symbol.match](s) {
    return s.match(this.regexp);
  }
  [Symbol.replace](s, replacement) {
    return s.replace(this.regexp, replacement);
  }
}

let pattern = new Glob("docs/*.txt");
"docs/js.txt".search(pattern); // => 0:
"docs/js.htm".search(pattern); // => -1:
let match = "docs/js.txt".match(pattern);
match[0]; // => "docs/js.txt" match[1]     // => "js"
match.index; // => 0
"docs/js.txt".replace(pattern, "web/$1.htm"); // => "web/js.htm"

console.log("docs/js.txt".search(pattern));

template;
