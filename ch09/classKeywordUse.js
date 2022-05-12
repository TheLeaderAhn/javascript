// class 키워드 사용하기

class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  includes(x) {
    return this.from <= x && x <= this.to;
  }
  // 인스턴스 제너레이터
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }
  toString() {
    return `(${this.from}...${this.to})`;
  }
}
// Range 클래스 사용
let r = new Range(1, 3);
console.log(r); //=> Range {from: 1, to: 3}
r.includes(2); //true
r.toString(); // (1...3)
[...r]; // [1,2,3]
console.log([...r]); //=> Range {from: 1, to: 3}

// 다른 클래스를 상속하는 서브 클래스 extends
class Span extends Range {
  constructor(start, length) {
    if (length > 0) {
      super(start, start + length);
    } else {
      super(start + length, start);
    }
  }
}

// 정적 메서드

/*
static parse(s) {
    let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/); 
    if (!matches) {
        throw new TypeError( `Cannot parse Range from "${s}".`)
    }
    return  new Range(parseInt(matches[1], parseInt(matchep[2])))
}

*/
