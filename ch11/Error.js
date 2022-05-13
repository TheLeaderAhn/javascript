//Error 클래스

// throw 와 catch 문 이용 어떤값이든 에러일으키고 확인가능

// Errow 객체 message, name--prop , toString() 메서드 존재

// Http 에러

class HTTPError extends Error {
  constructor(status, statusText, url) {
    super(`${status} ${statusText}: ${url}`);
    this.status = status;
    this.statusText = statusText;
    this.url = url;
  }
  get name() {
    return "HTTPError";
  }
}

let error = new HTTPError(404, "Not Found", "http://example.com");
error.status; // 404
error.message; // 404 Not Found: http://example.com
error.name; // HTTPError;

console.log(error.name);
