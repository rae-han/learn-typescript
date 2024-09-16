"use strict";
// # 콜백 사용 시 주의점
// function callWithRandomNumbers(fn: (n1: number, n2: number) => void) {
//   fn(Math.random(), Math.random());
// }
// callWithRandomNumbers((a, b) => {
//   a; // Type is number
//   b; // Type is number
//   console.log(a + b);
// });
// 콜백을 다른 함수로 전달할 때 타입스크립트는 콜백의 매개변수 타입을 추론하기 위해 문맥을 사용한다.
// 하지만 콜백 함수를 상수로 뽑아내면 문맥이 소실되므로 타입 추론이 안된다.
function callWithRandomNumbers(fn) {
    fn(Math.random(), Math.random());
}
// const fn = (a, b) => {
//   a; // Parameter 'a' implicitly has an 'any' type
//   b; // Parameter 'a' implicitly has an 'any' type
//   console.log(a + b);
// }
//
// callWithRandomNumbers(fn);
//  이 경우 매개변수에 타입 구문을 추가해 해결 가능하다.
// const fn = (a: number, b: number) => {
//   a;
//   b;
//   console.log(a + b);
// };
// 다만 가능하다면 전체 함수 표현식에 타입 선언을 적용하는 것이 좋다.
const fn = (a, b) => {
    a;
    b;
    console.log(a + b);
};
callWithRandomNumbers(fn);
