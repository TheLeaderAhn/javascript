// 문서를 불러올때 호출됨
window.onload = function () {
  // <form> 요소를 찾는다
  let form = document.querySelector("form#shipping");
  //isFormValid() 다른곳에 정의했다 가정
  form.onsubmit = function (event) {
    if (!isFormValid(this)) {
      event.preventDefault; // 유효하지 않다면 폼 제출을 막는다
    }
  };
};

// 이벤트 핸들러 속성 설정

// addEventListener()
// Window, Document, Element 객체는 모두 이벤트 대상이 될수 있다.
// addEventListener() 인자 세게 1. eventType, 2. 타입이 일어날대 호출될 function, 3. 선택사항 불값 객체

// basic.html에 작성
var b = document.querySelector("#mybutton");
b.onclick = function () {
  console.log("저를 선택해 주셔서 감사합니다.");
};
//b.addEventListener("click", () => console.log("거듭 감사드립니다."));

// removeEventListener() 이벤트 제거

// 3. 세번째 인자를  ex) 세번째 인자를 true로 넣으면 제거 할때도 true 를 넣어야 한다.
// document.addEventListener("click", handle)

// 이벤트 핸들러 호출
// 이벤트 핸들러를 등록하면 -> 브라우저 -> 지정된 타입의 이벤트가 일어 날 때마다 자동으로 호출한다

// 이벤트 핸들러 인자
