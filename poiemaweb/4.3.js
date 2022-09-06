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
var Baz = /** @class */ (function () {
    function Baz(text) {
        console.log(text);
    }
    return Baz;
}());
var baz = new Baz('Hi!');
console.log(baz);
