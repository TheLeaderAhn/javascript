// 문서 스크립트
// Document 객체 ->Window 객체에는 항상 Document 객체를 참조하는 document property가 있다

//  요소를조작 하기 위해서 어떤식으로든 반드시 그요소를 참조하는 element객체를 선택해야한다.

// css 선택자로 element 선택
// #-> id 찾기 . -> class , -> 두 선택자중 하나라도 일치하는 것 몯  선택

// css 선택자 querySelector() -> 일치하는 첫번째 찾고

// getElementById()

document.body.innerHTML += "<h1>Oops</h1>";

let para = document.querySelector("p");
console.log(para.textContent);
let text = para.textContent;

para.textContent = "Hello World";

// 노드 생성, 삽입, 삭제
// 문자열. 다른 요소 삽일 할때 append(), prepend() 메서드 사용

let paragraph = document.createElement("p");
let emphasis = document.createElement("em");
emphasis.append("world");
paragraph.append("hello", emphasis, "!!!!");
paragraph.append("i");
