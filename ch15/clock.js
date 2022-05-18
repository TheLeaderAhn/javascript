// svg스크립트

// 동적 시계
(function updateClock() {
  let now = new Date();
  console.log("로딩시간 : ", now);
  let sec = now.getSeconds();
  let min = now.getMinutes() + sec / 60;
  let hour = (now.getHours() % 12) + min / 60;

  let minangle = min * 6;
  let hourangle = hour * 30;

  //
  let minhand = document.querySelector("#clock .minutehand");
  let hourhand = document.querySelector("#clock .hourhand");

  // 시침 분침 회전
  minhand.setAttribute("transform", `rotate(${minangle},50,50)`);
  hourhand.setAttribute("transform", `rotate(${hourangle},50,50)`);

  // 5초마다 업데이트(재실행)
  setTimeout(updateClock, 5000);
})(); // 즉시 실행시킨다.
