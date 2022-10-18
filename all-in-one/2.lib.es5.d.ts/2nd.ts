export {}

// # 타입 만들기

// ## forEach
// array 타입을 Arr 타입으로 바꿔서 하나하나 구현해보자.
interface Arr {
  // forEach(callback: () => void): void;
  forEach(callback: () => void): void;
}

const a: Arr = [1, 2, 3];
const b: Arr = ['a', 'b', 'c'];

a.forEach((item) => console.log(item))
b.forEach((item) => console.log(item))