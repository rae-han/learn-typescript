// node 는 node 에 대한 타입을 따로 설치해야한다.
// package.json 이 없으므로 index.d.ts 파일을 본다.
// ts 기본 제공 라이브러리와 node에 필요한 것들을 임포트 해온다고 명시적으로 표시돼 있다.
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
export {};
// node js 에서는 common js 기 때문에 require, module 에 대한 타이핑도 있다.
