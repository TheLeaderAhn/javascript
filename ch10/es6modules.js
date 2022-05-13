// ES6 내보내기

export const PI = Math.PI;

export function degreesToRadians(d) {
  return (d * PI) / 180;
}

export class Circle {
  constructor(r) {
    this.r = r;
  }
  area() {
    return PI * this.r * this.r;
  }
}

// 위에서 세번 뺀걸 한방에 뺄수 있음
export { Circle, degreesToRadians, PI };

// 함수 하나만 내보낼때 , export 대신 export default를 사용한다

export default class BitSet {
  // 클래스 바디
}

// export 내보내기는 이름을 선언해 내보낼수 있음

// ES6 가져오기
// export 한 값을 import 키워드로 가져올수있음
import { BitSet } from "./modulesWith";
