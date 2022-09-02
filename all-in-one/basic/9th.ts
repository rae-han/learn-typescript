// // # readonly
// interface A {
//   readonly b: string;
//   c: string;
// }
//
// const a: A = {
//   b: 'hello',
//   c: 'world',
// }
// // a.b = 'bye';
// // readonly로 값의 변경을 막을 수 있다.

// // # 인덱스드 시그니처
// type A = { a: number, b: number, c: number, d:number };
// // 모든 값이 다 숫자었으면 좋겠을때 위처럼 하는 방법도 있지만
// // 아래와 같은 방법도 있다.
// type B = { [key: string]: number };
//
// const a: A = { a: 1, b: 2, c: 3, d: 4 };
// const b: B = { a: 1, b: 2, c: 3, d: 4 };
//
// // # 맵드 타입스
// // 위 예제에서 key 값도 제한할 수 있다.
// type D = 'x' | 'y' | 'z';
// type C = { [key in D]: number };
// const c: C = { x: 8, y: 9, z: 10 };
//
