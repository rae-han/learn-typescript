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

type OI = { hello: 'world' } | { raehan: 'jeong' };
const objI: OI = { hello: 'world', raehan: 'jeong' }
const objI1: OI = { hello: 'world' }
const objI2: OI = { raehan: 'jeong' }

export {}
