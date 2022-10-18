// // # readonly
// interface Test {
//   readonly immutability: string;
//   variable: string;
// }
//
// const value: Test = {
//   immutability: 'hello',
//   variable: 'world',
// }
// value.immutability = 'bye';
// readonly로 값의 변경을 막을 수 있다.

// // # 인덱스드 시그니처
// type Numbers_A = { a: number, b: number, c: number, d:number };
// type Numbers_B = { [key: string]: number };
//
// const a: Numbers_A = { a: 1, b: 2, c: 3, d: 4 };
// const b: Numbers_B = { a: 1, b: 2, c: 3, d: 4 };
//
// // # 맵드 타입스
// 위 예제에서 key 값도 제한할 수 있다.
// type types = 'x' | 'y' | 'z';
// type Coordinates = { [key in types]: number };
// const coordinates: Coordinates = { x: 8, y: 9, z: 10 };
// //
