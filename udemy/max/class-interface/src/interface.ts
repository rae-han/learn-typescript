// interface Person {
//   name: string;
// }
//
// interface Hero {
//   power: number;
// }
//
// interface Man {
//   gender: 'male';
// }
//
// class Developer implements Person, Hero {
//   name: string;
//   power: number;
//
//   constructor(name: string, power: number) {
//     this.name = name;
//     this.power = power;
//   }
//
//   printPower() {
//     console.log(this.power);
//   }
// }
//
// interface readonlyPerson1 {
//   readonly name1: string;
// }
//
// type readonlyPerson2 = {
//   readonly name2: string;
// };
//
// class Person3 implements readonlyPerson1, readonlyPerson2 {
//   constructor(public name1: string, public name2: string) {}
// }
//
// let person3 = new Person3('1', '2');
//
// person3.name1 = '3';
// person3.name2 = '4';
//
// interface AAAA {
//   a: string;
// }
//
// interface BBBB {
//   b: boolean;
// }
//
// interface CCCC extends AAAA, BBBB {
//   c: number;
// }
//
// export {};

type Combinable = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result1 = add('aaaa', 'bb'); // string
const result2 = add(1, 2); // number

// const delay = (ms = 1000) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// }
const delay = (ms = 5_000) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay();
console.log('after delay');