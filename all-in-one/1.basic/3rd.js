"use strict";
// // // # 객체 타이핑 type과 interface 구분하기
//
// type A = { a: string }; // type alias(타입 에일리어스), 타입 정의
// const a: A = { a: 'hello' };
//
// interface B { a: string } //
// const b: B = { a: 'hello' };
// //
// // // 간단하게 하고 싶으면 type
// // // 상속, 구현(impolement) 같은 걸 하기 위해서는 interface, 객체 지향의 개념이 포함돼 있다.
// // // type으론 안되는건 아닌데.. 기본 기능이..
//
// // ### union(|), intersection(&)
// function add(x: string | number, y: string | number): string | number { return x + y }
// // function add<T extends number | string>(x: T, y: T):T { return x + y }
// add(1, 2)
// const result: string | number = add(1, 2); // result는 number인데 string | number가 된다. 좋지 않다.
// add('1', '2')
// add(1, '2')
//
// type A = { a: string; }
// type B = { b: string; }
//
// const ab1: A | B = { a: 'hello', b: 'world' };
// const ab2: A | B = { a: 'hi' };
// const ab3: A | B = { b: 'hi' };
// const ab4: A | B = { }; // Error! - TS2322: Type '{}' is not assignable to type 'A | B'.
// const ab5: A | B = { c: 'bye' }; // Error! - TS2322: Type '{ c: string; }' is not assignable to type 'A | B'.   Object literal may only specify known properties, and 'c' does not exist in type 'A | B'.
// const ab1: A & B = { a: 'hello', b: 'world' };
// const ab2: { a: 'hello' } & { b: 'bye' } = { a: 'hello', b: 'bye' };
// const abc: { a: string } & { b: number } = { a: 'hello', b: 123 };
//
// const ee: { a: string } | { b: number } = { a: 'hello', b: 123 };
// const ff: { a: string } | { b: number } = { a: 'hello' };
// const gg: { a: string } | { b: number } = { b: 123 };
// // const hh: { a: string } | { b: number } = { };
//
// type Animal = { breath: true }
// type Mammals = Animal & { breed: true }
// type Human = Mammals & { think: true }
// // 타입 확장(상속)의 개념으로 쓸수 있다.
//
// interface Animal {
//   breath: true
// }
//
// interface Mammals extends Animal {
//   breed: true
// }
//
// interface Human extends Mammals {
//   think: true
// }
// // type과 interface간의 차이는 있지만 몰라도 된다.
//
// const human: Human = { breath: true, breed: true, think: true };
// // type 같은 경우 윗 줄 BB위치에 우겨 넣거나 & 같은걸 사용하여 추가할 수 있지만 interface는 힘들다.
// type을 interface에서 extends할 수 있다.
// 두 가지의 기능적 차이는 있지만 중요하게 생각하기 보다, 표현 방식의 차이에 초첨을 맞추는게 좋다고 한다.
// // interface는 여러번 선언 가능하다.
// interface Human {
//   talk: () => void;
// }
// interface Human {
//   eat: () => void;
// }
//
// const human: Human = {
//   talk() { },
//   eat() { },
// }
// 여러개 서언한 인터페이스는 합쳐진다.
// 그래서 라이브러리들은 인터페이스로 돼 있다. 사용자가 확장할 수 있기 때문이다.
// 예전에는 명명 할때 interface는 I, type은 T, enum은 E를 붙이는데 요즘은 안하는 추세이다. 제너레이터는 아직도 붙일때가 많다.
//
//
//
//
//
//
