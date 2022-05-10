console.log(":::::::::::::::::::::::::loops2::::::::::::::::::::::::");

// 점프문
// identifier: statement

var token;
var a = [];
// continue
mainloop: while (token != null) {
  continue mainloop; // mainloop로 돌아감 아래 작성되는 코드 생략
}

// break
for (let i = 0; i < a.length; i++) {
  if (a[i] === target) break;
}

var date = new Date();
let matrix = date.getDate();
let Asum = 0,
  success = false;
// 에러가나면 나갈수 있도록 라벨문을 만든다
computeSum: if (matrix) {
  for (let x = 0; x < matrix.length; x++) {
    let row = matrix[x];
    if (!row) break computeSum;
    for (let y = 0; y < row.length; y++) {
      let cell = row[y];
      if (isNaN(cell)) break computeSum;
      Asum += cell;
    }
  }
  success = true;
}

console.log(success);
console.log(Asum);
