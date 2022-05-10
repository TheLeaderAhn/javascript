//  복합문과 빈 문
{
  x = Math.PI;
  cx = Math.cos(x);
  console.log("con(n) = " + cx);
}

// 조건문

// if
let address; //undefined
if (!address) {
  address = "";
  message = "주소를 입력해주세요.";
}

console.log(message);

var n = 3;

if (n === 1) console.log("You have 1 new message.");
else console.log(`You have ${n} new messages.`);

i = j = 1;
k = 2;

// 중괄호 사용
if (i === j) {
  if (j === k) {
    console.log("i와 k는 같음");
  }
} else {
  console.log("i와 k는 다름");
}

// else if 대응 switch 문..
function convert(x) {
  switch (typeof x) {
    case "number":
      return x.toString(16) + " : 16진수 변환"; // 16진수;
    case "string":
      return '"' + x + '"' + " : 문자"; // 따옴표 감싸 문자열표시
    default:
      return String(x);
  }
}

var xx = 1;

convert(2);
console.log(convert(xx));
