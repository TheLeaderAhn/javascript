const fs = require("fs"); // filesystem module module 호출

function readConfigFile(path, callback) {
  fs.readFile(path, "utf8", (err, text) => {
    if (err) {
      console.error(err);
      callback(null);
      return;
    }

    let data = null;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.log(e);
    }
    callback(data);
  });
}
