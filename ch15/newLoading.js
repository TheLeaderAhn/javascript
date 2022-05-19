let url = new URL(window.location);
console.log(url);

let query = url.searchParams.get("q");
console.log(query); // null
let numResults = parseInt(url.searchParams.get("n") || "10");
console.log(numResults); // 10

// window.location = "https://github.com"; 실행되면서 깃허브로 이동시킴

document.location.path = "./Toc.html";
document.location.hash = "TOC";

history.go(-2); /// 뒤로가기 두번
history.go(0); // 현재페이지 리로드
