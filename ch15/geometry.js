// 문서와 지오메트리와 스크롤

// 스크롤

// 문서와 뷰포트의 높이를 구한다
let documentHeight = document.documentElement.offsetHeight;
let viewPortHeight = window.innerHeight;

console.log(
  "documentHeight : ",
  documentHeight,
  "//  viewPortHeight : ",
  viewPortHeight
);

window.scrollTo(0, documentHeight - viewPortHeight);

// setInterval(() => {
//   scrollBy(0, 2);
// }, 150);
