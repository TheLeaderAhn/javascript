// DOMContentLoaded 이벤트 일어날때 실행

/*
    스타일 시트 참고

#TOC { border: solid black 1px; margin: 10px; padding:
10px; }
.TOCEntry { margin: 5px 0px; }
.TOCEntry a { text-decoration: none; }
.TOCLevel1 { font-size: 16pt; font-weight: bold; }
.TOCLevel2 { font-size: 14pt; margin-left: .25in; }
 .TOCLevel3 { font-size: 12pt; margin-left: .5in; }
.TOCSectNum:after { content: ": "; }
.TOCSectNum { display: none }

*/
document.addEventListener("DOMcontentLoaded", () => {
  let toc = document.querySelector("#TOC");
  if ("!toc") {
    let toc = document.createElement("#TOC");
    toc.id = "TOC";
    document.body.prepend(toc);
  }

  // 색션 제목 요소 찾기
  let headings = document.querySelectorAll("h2,h3,h4,h5,h6");

  //색션 번호를 추적할 배열을 초기화
  let sectionNumbers = [0, 0, 0, 0, 0];

  for (let heading of headings) {
    if (heading.parentNode === toc) {
      continue;
    }

    let level = parseInt(heading.tagName.charAt(1)) - 1;

    sectionNumbers[level - 1]++;
    for (let i = level; i < sectionNumbers.length; i++) {
      sectionNumbers[i] = 0;
    }
    // 2.3.1 과 같은 색션 번호 만듬
    let sectionNumber = sectionNumbers.slice(0, level).join(".");

    // 제목에 색션 번호 추가
    let span = document.createElement("span");
    span.className = "TOCSectNum";
    span.textContent = sectionNumber;
    heading.prepend(span);

    // 제목을 a 넣어 링크
    let anchor = document.createElement("a");
    let fragmentName = `TOC${sectionNumber}`;
    anchor.name = fragmentName;
    heading.before(anchor); //제목 앞에 앵커 삽입
    anchor.append(heading); // ;

    // 이 색션 링크 를 만든다
    let link = document.createElement("a");
    link.href = `#${fragmentName}`; // 대상을 연결
    link.innerHTML = heading.innerHTML;

    let entry = document.createElement("div");
    entry.classList.add("TOCEntry", `TOCLevel${level}`);
    entry.append(link);

    toc.append(entry);
  }
});
