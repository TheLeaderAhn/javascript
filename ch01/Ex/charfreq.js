// 사용한 글자 빈도 히스토그램

// 맵을 확장 get()- null 대신
class DefaultMap extends Map {
  constructor(defaultValue) {
    super();
    this.defaultValue = defaultValue; // 기본값 기억
  }
  get(key) {
    if (this.has(key)) {
      return super.get(key); // 슈퍼클래스 값 가져옴
    } else {
      return this.defaultValue; // 가져온키 없으면 기본값 반환
    }
  }
}

// 글자 빈도 히스토그램을 표시
class Histogram {
  constructor() {
    this.letterCoounts = new DefaultMap(0); // 글자 등장 횟수 기록
    this.totalLetters = 0;
  }
  //  히스토그램 업데이트
  add(text) {
    // 공백제거, 대문자로 변환
    text = text.replace(/\s/g, "").toUppercase();
    // 글자들 순회
    for (let character of text) {
      let count = this.letterCoounts.get(character);
      this.letterCoounts.set(character, count + 1);
      this.totalLetters++;
    }
  }

  // 히스토그램을 ASCII 그래프로 표시
  toString() {
    // 맵을 배열로 반환
    let entries = [...this.letterCoounts];
    // 횟수 알파벳순 정렬
    entries.sort((a, b) => {
      if (a[1] === b[1]) {
        // 횟수가 같으면
        return a[0] < b[0] ? -1 : 1; // 알파벳 순으로 정렬
      } else {
        return b[1] - a[1]; // 큰것이 앞으로 온다
      }
    });

    // 횟수를 퍼센트로 반환
    for (let entry of entries) {
      entry[1] = (entry / this.totalLetters) * 100;
    }

    // 1% 미만 글자는 버립니다.
    entries = entries.filter((entry) => entry[1] >= 1);

    // 이제 각 항목을 글자의 나열로 반환 합니다.
    let lines = entries.map(
      ([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
    );

    // 줄바꿈 문자로 구분해 병합한 문자열을 반환
    return lines.join("\n");
  }
}

async function histogramFromstdin() {
  process.stdin.setEncoding("utf-8"); // Unicode 로 일기
  let histogram = new Histogram();
  for await (let chunk of process.stdin) {
    histogram.add(chunk);
  }
  return histogram;
}

histogramFromStdin().then((histogram) => {
  console.log(histogram.toString());
});
