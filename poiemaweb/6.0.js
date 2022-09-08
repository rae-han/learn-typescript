// # Type vs Interface
// interface IPerson {
//   name: string,
//   age?: number,
// }
//
// type TPerson = {
//   name: string,
//   age?: number,
// }
//
// const man = {} as IPerson; // 빈 객체를 IPerson 타입으로 지정
// const woman = {} as TPerson; // 빈 객체를 TPerson 타입으로 지정
//
// man.name = 'King';
// man.age = 20;
// // man.gender = 'male'; // TS2339: Property 'gender' does not exist on type 'IPerson'.
//
// woman.name = 'Queen';
// woman.age = 21;
// // woman.gender = 'female'; // TS2339: Property 'gender' does not exist on type 'TPerson'.
// const snow: White = '#000'; // TS2322: Type '"#000"' is not assignable to type '"#fff"'.
var snow = '#fff'; // White 타입은 스트링이 아니라 오직 문자열 리터럴 #fff만 가능하고 그 자체로 타입이다.
console.log(typeof snow);
// const pi: PI = 3.14;
var pi = 3.1415; // pi의 타입은 number가 아니라 3.1415 그 자체이다.
