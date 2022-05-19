console.log(process.argv);

// 모듈 종류를 노드레 알리는 가장 단순한 방법
// .mjs 파일에 코드 저장하면 노드는 그파일으르 항상 ES6 모듈로 간주한다. -> import, export 사용하리라 예상 + require 사용불가

// 반대로

// .cjs 파일에 코드 저장하면 노드는 CommonJS 모듈로 취급해 require 함수 제공 + import, export 사용하묜 syntaxError 일으킴

// 확장자 일반 .js -> package.json 파일을 찾음
// JSON 객체 최상위 type 프로퍼티를 체크함
// module -> ES6모듈 // commonjs -> commonjs 모듈로 간주
// type 프로퍼티나 // package.json 이 없다면 commonjs 모듈로 간주

// node 설치 -> 자동 npm 설치 (Node package Manager)--라이브러리 내려받고 관리하는 역할
