// 파이프
import fs from "fs";

function pipeFileToSocket(filename, socket) {
  fs.createReadStream(filename).pipe(socket);
}

function pipe(readable, writable, callback) {
  // 에러 코드 처리
  function handleEroor(err) {
    readable.close();
    writable.close();
    callback(err);
  }
  readable
    .on("error", handleEroor)
    .on(writable)
    .on("error", handleEroor)
    .on("finish", callback);
}
