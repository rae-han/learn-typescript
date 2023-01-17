"use strict";
// node 는 node 에 대한 타입을 따로 설치해야한다.
// package.json 이 없으므로 index.d.ts 파일을 본다.
// ts 기본 제공 라이브러리와 node에 필요한 것들을 임포트 해온다고 명시적으로 표시돼 있다.
Object.defineProperty(exports, "__esModule", { value: true });
// NodeJS 라는 네임스페이스가 있는데 이걸 사용할 때는
// 대표적으로 Node에서 setTimeout, setInterval을 사용할때 setTimeout 같은 경우 리턴 값은
// 윈도우(브라우저 전역 객체)는 id 값이 number로 돼 있는데 NodeJS에는 Nodejs.Timeout 으로 돼 있다.
// Nodejs.Timeout 은 객체로 메서드도 가지고 있다.
const fs = require("fs");
// @types/node를 설치하면 fs의 타입 정의로 이동 가능하다.
// declare module 'fs'로 돼 있다.
// 타입 선언만 있고 구현이 없는 것을 앰비언트라고 한다.
// declare module 은 앰비언트(ambient) 모듈이라 한다.
// 특정 모듈에 대한 타이핑을 해주는 것이다.
// 지금까지 없고 노드에만 있는 이유는 지금까지는 jQuery, react 같은 경우 한 패키지에 하나의 라이브러리에 대한 타이핑만 담당했지만
// 노드는 연결돼 있는 모듈이 너무 많다.
// 그래서 노드 전체를 담당하는 타이핑이 아니라 각각의 모듈별로 타이핑이 돼 있다.
// fs 파일에 2개의 declare module이 있는데 나머지 하나는 아래 코드이다.
// declare module 'node:fs' {
//   export * from 'fs'; // fs 있는 것을 불러와서 그대로 다 export 해라는 뜻
// }
// 위와 같은 코드가 있는 이유는 ㄴ드에서는 require 할때 fs 말고 node:fs 라는 이름으로 불러오는 것을 더 권장한다.
// import fs = require('node:fs')
// 노드의 모듈이라는 것을 표시해주기 위해서.
// * = 애스터리스크
const http = require("http");
const path = require("path");
// npx ts-node node.ts
http.createServer((req, res) => {
    // createServer 는 2개로 오버로딩 돼 있다. - 인덱스드 시그니처 한번 더 보
    // implements 는 클래스가 인터페이스에 있느 제안사항을 반드 구현해라는 뜻.
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        // 이미 완성된 코드에 타입을 붙여주는 것이기 때문에 코드가 잘 돌아가느냐 보다 타입이 맞냐에 주먹해서 보면 된다.
        res.writeHead(200);
        res.end(data);
    });
}).listen(8080, () => {
    console.log('서버 시작됨');
});
// node js 에서는 common js 기 때문에 require, module 에 대한 타이핑도 있다.
