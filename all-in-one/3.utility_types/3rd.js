"use strict";
exports.__esModule = true;
var p1 = Promise.resolve(1).then(function (a) { return a + 1; }).then(function (a) { return a + 1; }).then(function (a) { return a.toString(); });
// 프로미스는 Promise<결괏값> 타입으로 표시한다.
// 바로 성공하는 프로미스로 1을 리졸브 한 다음 바로 옆에 댄이 붙어있는데 덴이 3개 연소 깅ㅆ다.
// Promise.all에 넣으면 전부다 실행해서 리턴한다.
var p2 = Promise.resolve(2);
var p3 = new Promise(function (res, rej) {
    setTimeout(res, 1000);
});
Promise.all([p1, p2, p3]).then(function (result) {
    console.log(result); // ['3', 2, undefined]
    // result의 타입이 string, number, unknown으로 정확하게 추론됐다.
    // 어떻게 최종적인 타입을 알아낼수 있었을까? toString을 빼면 number로 추론된다.
});
// all의 구현을 보면 아래와 같다. // 왜 all을 클릭하면 iterator의 all이 찍히지?
// all<T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }>;
