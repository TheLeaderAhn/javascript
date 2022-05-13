// 제너레이터
// ES6를 사용한 이터레이터

// 제터레이터 함수는  * 를 붙힌다
// yield 문을 만나면 멈춘다.

function* oneDigitPrimes() {
  // 이 함수를 호출해도 코드를 실행하지 않고-> 이터러블 객체 반환
  yield 2;
  yield 3;
  yield 5;
  yield 7;
}
let primes = oneDigitPrimes(); // 제너레이터 얻음
primes.next().value; //2
primes.next().value; //3
primes.next().value; //5
primes.next().value; //7
primes.next().done; // true

// 제너레이터 예제

// 피보나치 수열 (1, 1, 2, 3, 5, 8.....
function* fibonacciSequence() {
  let x = o,
    y = 1;
  for (;;) {
    yield y;
    [x, y] = [y, x + y];
  }
}
