const a: number = 5;
const b: string = '5';
const PI: 3.14 = 3.14; // const 같은건 애초에 바뀔 필요가 없다. 타입은 최대한 정확하게 적어주는 것이 좋다.
const c: boolean = true;
const c2: true = true; // PI와 마찬가지 타입은 최대한 정확하게.
const d: undefined = undefined;
const e: null = null;


// function add(x: number, y: number): number/* 리턴 값도 숫자 */ { return x + y }
//
// const add: (x: number, y: number) => number = (x, y) => x + y;
// // ===
// type Add = (x: number, y: number) => number; // 타입 애일리어스(type alias)
// const add: Add = (x, y) => x + y;
// // ===
// interface Add {
//   (x: number, y: number): number;
// }
// const add: Add = (x, y) => x + y;


const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };

const arr1: string[] = ['a', 'b'];
const arr2: number[] = [1, 2, 3];
const arr3: Array<number> = [1, 2, 3]; // <> 을 제네릭이라 부른다.
// 튜블 - 길이가 고정된 배열
const arr4: [number, number, string] = [1, 2, 'a'];

// 타입 추록을 적극 활용하자.
const o = '5'; // 문제 없다.
// const o: string = '5'; // const 라서 스코프의 수명이 끝날 때까지 '5' 여야 하는데 억지로 문자열이라는 타입을 넣어줬다.
