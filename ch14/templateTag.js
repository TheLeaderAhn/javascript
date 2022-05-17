// 템플릿 태그
console.log(":::::::::::::");

// 백틱(``) 안에 포함된 문자열을 '템플릿 리터럴'이라고 부른다.
/*
HTML 문자 엔티티

&nbsp;
” ” : 공백(스페이스 한 칸)을 의미
 
&lt;
부등호(<)
 
&gt;
부등호(>)
 
&amp;
앰퍼샌드(&) 기호
 
&quot;
쌍따옴표(“)
 
&#035;
sharp(#)
 
&#039;
따옴표(‘)

*/

// html `` 템플릿
function html(strings, ...values) {
  let escaped = values.map((v) =>
    String(v)
      .replace("&", "&amp;")
      .replace("<", "&lt;")
      .replace(">", "&gt;")
      .replace('"', "&quot;")
      .replace("'", "&#39;")
  );

  let result = strings[0];
  for (let i = 0; i < escaped.length; i++) {
    result += escaped[i] + strings[i + 1];
  }
  return result;
}

let operator = "<";
html`<b>x ${operator} y</b>`;
console.log(html`<b>x ${operator} y</b>`);
