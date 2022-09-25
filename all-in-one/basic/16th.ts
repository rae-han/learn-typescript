// const x: {} = 'hello';
// const y: Object = 'hi';
// // {}, Object는 모든 타입
//
// // const obj1: object = 'bye'; // error
// const obj2: object = { key: 'this is object'};
// const obj3: {} = 'hi';
// const obj4: Object = 'hello';
// //
// const z: unknown = 'test'; // any처럼 모든 걸 다 받을수 있지만 any는 타입을 포기, unknown은 나중에 정해줘야 한다.
// //
// // // {} 등장으로
// // // unknown = {} | null | undefined 가 성립된다.
// if(z) {
//   z; // 여기는.. {} 모든 타입이지만 null, undefined 는 제외
// } else {
//   z; // null, undefined는 여기에
// }