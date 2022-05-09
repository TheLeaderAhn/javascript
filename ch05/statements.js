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

if (i === j)
  if (j === k) console.log("i와 k는 같음");
  else console.log("i와 k는 다름");

// 중괄호 사용
if (i === j) {
  if (j === k) {
    console.log("i와 k는 같음");
  }
} else {
  console.log("i와 k는 다름");
}

// else if 대응 switch 문..
