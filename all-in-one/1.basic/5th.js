"use strict";
// // interface는 2번 선언하면 선언한 타입들이 합쳐지지만 type alias는 에러가 난다.
// // interface A { name: string }
// // interface A { age: number }
// // const person: A = { name: 'raehan', age: 33 }
//
// // # 객체 리터럴에서는 잉여 속성 검사를 한다.
// interface A { a: number }
// const aa: A = { a: 1, b: 2 }
//
// function a(): void {
//
// }
//
// const b = a();
// // a에 리턴 값이 없으면 b위에 마우스를 올렸을때 void 타입이 뜬다.
// // 이때 a 함수 리턴 값에 :void를 표기해주고 return 값을 만들면 에러가 뜬다.
// // undefined는 되고 null은 안된다.
// // 보통 return; 을 하는 함수에서 뜬다.
//
// interface Human {
//   talk: () => void
// }
// const human: Human = {
//   talk() { return 'abc' } // 잉 근데 이거 왜 되지?
// }
//
// // void의 3가지 종류
// // 함수 리턴 값
// function void1(): void {
//   return;
// }
// // 메서드로 선언할 때
// interface VoidObject {
//   void2: () => void
// }
// const instVoidObject: VoidObject = {
//   void2() { return 'return' }
// }
// // 매개변수
// function voidFunc(callback: () => void) {
//
// }
// voidFunc(() => {
//   return 'return';
// })
// // 함수 리턴 값의 void는 리턴 값이 없다는 의미
// // 나머지 2개는 리턴 값을 사용하지 않겠다는 의미
//
// // 실전
// // declare function forEach(arr: number[], callback: (el: number) => undefined): void;
// declare function forEach(arr: number[], callback: (el: number) => void): void;
// // function forEach() { // 구현부로 구현하기 귀찮을때 위 코드처럼 declare를 사용해주면 된다. 위 방법으로 일단 타입만 만들어 둘 수 있다.
// //
// // }
// let target: number[] = [];
// forEach([1,2,3], el => target.push(el));
// // push 는 리턴값이 number인데 타입 정의는 undefined라 에러가 난다.
// // 근데 undefined대신 void를 사용해도 에러가 안난다??
// // 매개변수로 쓰이는 void는 실제 리턴 값이 무엇이든 상관하지 않겠다는 의미.
// // void인지 아닌지에 따라서 표현에 차이가 난다.
// // 아래 코드는 둘다 정상적인 코드이지만 콜백 함수의 정의에 void를 사용하지 않고 undefined를 쓸 경우 각기 다른 에러가 난다.
// forEach([1,2,3], el => { target.push(el) });
// forEach([1,2,3], el => target.push(el));
//
// interface VoidTest {
//   test: () => void;
// }
// const voidTest: VoidTest = {
//   test() { return 1 }
// }
// // const b = voidTest.test(); // 실제로 타입 스크립트는 void 리턴을 사용 안하는 걸로 인식하여 return '3'부분을 신경 쓰지 않기(무시하기) 때문에 에러가 뜬다.
// // 위 코드를 as를 통해 강제로 바꿔줄순 있는데 타입 스크립트는 실수로 본다.
// // const b = voidTest.test() as number;
// // 내가 책임 질수 있을 땐??
// const b = voidTest.test() as unknown as number;
// // 앞에 꺾쇠를 통해서 강제로 맞춰주는 방법도 있기는 하다.
// // const b = <number><unknown>voidTest.test();
// // <> 보다 as를 더 권장하는 이유는 react의 jsx같은 경우 <>가 있어서 ts가 이해를 잘 못할때가 있기 때문이다.
//
// // declare를 쓸 일이 있나요?
// // 브라우저에서는 스크립트 태그가 나눠져 있을 때가 있는데
// // 이때 위에 스크립트에 구현이 돼 있고 아래 스크립트에서 사용될때 코드가 나눠져 있다면 아래 코드에서 그냥 사용하면 에러가 뜬다.
// // 에러를 막기 위해서 타입만 선언해주고 사용을 한다.
//
// // unknown은 뭐냐?
// // 일단 any 쓸 빠엔 unknown을 사용하자.
// // any는 타입 체크를 포기한다는 뜻.
// // unknown은 타입을 정해줘서 사용한다는 뜻.
// const c: unknown = voidTest.test();
// (c as VoidTest).test();
// // unknown은 지금은 당장 타입을 정확하게 모를때 사용하는 것.
// // type을 포기한 any와는 다르다.
// // 주로 try-catch에서 catch안에 있는 에러가 정확히 뭐가 올지 모르기 때문에 사용한다.
// try {
//
// } catch(error) {
//   (error as Error).message;
//   // Axios 에러면?
//   // (error as AxiosError)
// }
//
// // 타입 간 대입가능 표에 초록색 체크도 그냥 안된다고 보면 된다. 왜냐면 강의에서는 strict: true를 사용하기 때문에.
