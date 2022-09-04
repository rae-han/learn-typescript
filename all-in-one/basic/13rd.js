"use strict";
// # optional
function func1(a, b, c) { }
// ? 기호는 값이 옵션이라는 것. 없어도 된다.
func1(1);
func1(1, 2);
func1(1, 2, 3);
// 전부 다 받고 싶으면? 그냥 스프레드 문법
function func2(...args) { }
func2(1);
func2(1, 2, 3, 4, 5);
// 인터페이스나 타입 에일리어스에서도 된다.
let obj = { a: 'hello', b: 'world' };
obj = { a: 'bye' };
