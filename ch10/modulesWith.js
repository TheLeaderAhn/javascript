// 클래스 객체 클로저를 사용하는 모듈

/*
const BitSet = function () {
  // 비공개 세부사항
    function inValid(set,n) {...}
};
*/

// 클로저를 사용하는 모듈
const modules = {};
function require(moduleName) {
  return modules[moduleName];
}

// modules["set.js"] = function () {
//   const exports = {};

//   exports.BitSet = Cl;
// };
