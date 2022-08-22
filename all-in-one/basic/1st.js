var a = 5;
var b = '5';
var PI = 3.14; // const 같은건 애초에 바뀔 필요가 없다. 타입은 최대한 정확하게 적어주는 것이 좋다.
var c = true;
var c2 = true; // PI와 마찬가지 타입은 최대한 정확하게.
var d = undefined;
var e = null;
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
var obj = { lat: 37.5, lon: 127.5 };
var arr1 = ['a', 'b'];
var arr2 = [1, 2, 3];
var arr3 = [1, 2, 3]; // <> 을 제네릭이라 부른다.
// 튜블 - 길이가 고정된 배열
var arr4 = [1, 2, 'a'];
// 타입 추록을 적극 활용하자.
var o = '5'; // 문제 없다.
// const o: string = '5'; // const 라서 스코프의 수명이 끝날 때까지 '5' 여야 하는데 억지로 문자열이라는 타입을 넣어줬다.
// function add(x: number, y: number): number; // 타입
// function add(x, y) {
//   return x + y; // 선언
// }
//
var abc = 123;
abc = 'abc'; // as라는 특별한 키워드로 앞에 타입을 강제로 number로 바꿈.
// never
try {
    var array = [];
    array.push('hello');
}
catch (error) {
    error;
}
// !
// const head = document.querySelector('#head')!; // !을 붙이면 타입이 Element | null 이 아닌 Element로 된다. 절대 null이 아님을 보장한 다는 뜻이다.
// console.log(head);
// head.innerHTML = 'hello';
//
var head = document.querySelector('#head');
if (head) { // if를 안붙이면 개체가 null일 수도 있다고 IDE가 알려준다.
    console.log(head);
    head.innerHTML = 'hello';
}
