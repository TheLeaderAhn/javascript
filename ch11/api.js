// URL API
console.log("::::::::::::::::::::::::::::::::::::::::::::::::::");
//

let url = new URL(
  "http://localhost:5500/ch11/ch11index.html/path/name? q=term#fragment"
);
url.href; // "http://localhost:5500/ch11/ch11index.html"
url.origin; // http://localhost:5500
url.protocol; // http
url.host; // localhost:5500
url.port; // 5500
url.pathname; // /ch11/ch11index.html/path/name
url.search; // ?%20q=term
url.hash; // #fragment

// URL console
console.log(url.hash);

// 타이머 setTimeout() SetInterval()
console.log(":::::::::setTimeout():::::::");
setTimeout(console.log("setTimeout(1000)::: "), 1000000);
setTimeout(console.log("setTimeout(2000)::: "), 2000);
setTimeout(console.log("setTimeout(3000)::: "), 3000);

// set interval
