// // default parameters
// const func1 = (param1 = 1, param2: number = 2) => {
//   // 기본값을 통해서 자동으로 추론을 한다. 위 같은 경우 number
//   return '3';
// }
//
// const func2 = (param: { children: string } = { children: 'abc xyz' }) => {
//
// }
// // 객체 일때 명시적이지 않아 헷갈려 하는 사람이 많다.
// // 매개 변수 뒤가 타입이다.
//
// const func3 = <T>(x: T, y: T) => ({ x, y });
// // jsx는 위 코드가 <tag></tag>와 혼동되어 에러가 나는 현상이 있다.
// // 아래와 같이 기본 값을 넣어주면 해결되긴 한다. 아니면 설정에서 바꿔줘야 한다.
// // TypeScript Playground에서 TS Config의 JSX를 None <-> React 로 바꿔보며 확인해보자.
// const func4 = <T = unknown>(x: T, y: T) => ({ x, y });
// // 제네릭도 기본 값을 넣어줄수 있다.
// // extends 도 가능하다.
// const func5 = <T extends unknown>(x: T, y: T) => ({ x, y });
//
// const result = func4(1, 2);
//
// const func6 = <T,>(x: T, y: T) => ({ x, y });
// // 뒤에 콤마(,)만 찍어도 되긴되는데 오류 같기도하고 명시적이지 않다.
