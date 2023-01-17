// union(|) intersection(&)


type sn = string | number
// function add(x: string | number, y: string | number): string | number { return x + y }
// TS2365: Operator '+' cannot be applied to types 'sn' and 'sn'.
// 추론이 제대로 안되는 이유는 타입 스크립트는 모든 경우의 수를 다 고려하기 때문.

// const result: string | number = add(1, 2);
// add 의 결과 값은 number 타입인데 string | number가 된다.
// 함수의 타입을 선언할 때 잘못 됐기 때문에 다음 코드부터는 다 잘못된다.

type P = string & number; // never 공집합

type OU = { hello: 'world' } & { raehan: 'jeong' };
const objU: OU = { hello: 'world', raehan: 'jeong' };
// &는 모든 속성이 다 있어야한다 라고 기억하면 좋다.
// |는 여러개 중에 하나만 있으면 된다.

type OI = { hello: 'world' } | { raehan: 'jeong' };
const objI: OI = { hello: 'world', raehan: 'jeong' }
const objI1: OI = { hello: 'world' }
const objI2: OI = { raehan: 'jeong' }

// interface는 객체 지향에 가깝
// type은 값 처럼 사용할 수 있다.

// extends는 상속 보다 확장에 가깝다.

// interface는 여러번 중복 선언 가능
// 중복된 것은 합쳐지는데 그래서 라이브러리들은 interface로 돼 있다.
// 나중에 개발자가 확장할 수도 있기 때문에.

interface Person {
  eat: () => {}
}
interface Person {
  talk: () => {}
}interface Person {
  think: () => {}
}

export {}
