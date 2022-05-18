// 클라이언트 사이드 자바스크립트 - 웹 브라우저에서 실행하도록 작성한 자바스크립트
// front end

// 서버사이드 ~ - 웹서버에서 실행 ~
// back end

// HTML  <script> 태그속 자바스크립트
// basic.html 참고

// 모듈
// <script type="module"></script>

// 실행시점 async
// 필요에 따른 스크립트 로드
function importScript(url) {
  return new Promise((resolve, reject) => {
    let s = document.createElement("script"); // script 요소 생성
    s.onload = () => {
      resolve();
    }; // 프라미스 해석
    s.onerror = (e) => {
      reject(e);
    };
    document.head.append(s); // 문서에 <script> 추가
  });
}

//문서 객체 모델 DOM
// Document Object Model

// 전역 객체를 사용할때는
// window를 사용하는게 좋다
// innerwidth 보다는 window.innerWidth가 더 명확하다

// 네임스페이스를 공유하는 스크립트

// 클라이언트 사이드 javascript TimeLine

// 동일 출처 정책을 완화하는 두번째 방법음
// CORS (Cross-Origin Resource Sharing) 교차 출처 간 자료 공유
