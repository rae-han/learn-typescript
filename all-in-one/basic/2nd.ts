// const a: string = 'hello';
// const b: String = 'hell';
// // string과 String의 타입은 다르다.
//
// type World = "world";
// const c: World = 'world'; // control + space를 하면 자동 완선 추천해준다.
// const d = `hello ${c}`;
//
// type Greeting = `hello ${World}`; // 이렇게도 가능하다. 타입이 hello world도 hello hell도 될수 있다.

let arr1: string[] = [];
let arr2: Array<string> = [];
function rest(a: string, ...args: string[]) {
  console.log(a, args)
}
rest('1', '2', '3');

const tuple: [string, number] = ['1', 1];
tuple[2] = 'hello';
tuple.push('hello'); // 타입 스크립트가 이것 까진 못막아준다.