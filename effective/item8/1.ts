try {
  const nv = [];
} catch (e) {

}

const _PI = 3.14;

console.log(typeof _PI)

// function func() {
//   return { x: 1, y: 2 };
// }
//
// type T = ReturnType<typeof func>

const colors = {
  red: 'ff0000',
  green: '00ff00',
  blue: '0000ff',
}

type Colors = typeof colors;

function func(num: number, str: string): string {
  return num.toString()
}

type TFunc = typeof func;
console.log(typeof func); // function
// console.log(TFunc); // error TS2693: 'TFunc' only refers to a type, but is being used as a value here.

const arrowFunc: TFunc = (num: number, str: string): string => str;

class MyClass {
  constructor(public name: string, public age: number) { }
}

type TMyClass = MyClass;

const obj: TMyClass = {
  name: 'raehan',
  age: 30,
}

const myInstance1: MyClass = new MyClass('abc', 123);
const myInstance2: TMyClass = new MyClass('abc', 123);

const myClass: typeof MyClass = MyClass;

console.log(myClass); // [class MyClass]

export {}