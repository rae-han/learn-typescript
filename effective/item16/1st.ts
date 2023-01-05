// interface Array<T> {
//   length: number,
//   [n: number]: T;
// }

// const arr: Array<string> = ['a', 'b', 'c'];
const arr: Array<number> = [1, 2, 3];

const a1 = arr[1];
const a2 = arr['2'];

// function get<T>(array: T[], k: string): T {
  // return array[k];
  // TS7015: Element implicitly has an 'any' type because index expression is not of type 'number'.
// }

export {}