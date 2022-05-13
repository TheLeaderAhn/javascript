// JSON 직렬화 분석
// 네트워크 연결을 통해 다른프로그램에 전송할때 반드시 문자열로 변환해야함
// 바이트나 문자 스트림으로 변환하는것을 직렬화(serializaion, marshaling,pickling) 라고 부른다.

//JSON -- JavaScript Object Notation 자바스크립트 객체 표기법

/// JSON.Stringify()... JSON.Parse() .. 직렬화 역직렬화 함

// JSON.Stringify() 로 문자열 만들고
// JSON.Parse() -> 원래 구조로 만듬 // 객체 , 배열,, 등등

let o = { s: "", n: 0, a: [true, false, null] };
let s = JSON.stringify(o); // {"s":"","n":0,"a":[true,false,null]}
console.log(s);

let copy = JSON.parse(s); // {s: "", n: 0, a: [true, false, null]} 원래대로
console.log(copy);

function deepcopy(o) {
  return JSON.parse(JSON.stringify(o));
}

// JSON 변형
