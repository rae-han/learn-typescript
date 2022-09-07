"use strict";
// class Foo {
//   constructor(public text: string) { }
// }
//
// const foo = new Foo('hello');
// console.log(foo); // Foo { text: 'hello' }
// console.log(foo.text); // hello
//
// class Bar {
//   constructor(private text: string) { }
// }
//
// const bar = new Bar('bye');
// console.log(bar); // Bar { text: 'bye' }
// // console.log(bar.text); // Error! TS2341: Property 'text' is private and only accessible within class 'Bar'.
//
// class Baz {
//   constructor(text: string) {
//     console.log(text);
//   }
// }
//
// const baz = new Baz('Hi!'); // Hi!, 생성자 함수에서 초기화 하는 도중 console.log 메서드를 통해 발생
// console.log(baz); // Baz {}
