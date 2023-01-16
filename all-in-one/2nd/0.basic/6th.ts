type tisn = string | number;
type tusn = string & number;
type ts = string;
type tn = number;

const a: ts = 'abc';
const b: tisn = a;

// 일반적인 타입은 |가 넓고 &가 좁은 타입 집합이 작을수록 좁은 타입

type aa = { name: string }
type bb = { age: number }
type cc = { name: string, age: number } // 객체는 상세할수록 좁은 타입, cc가 더 상세하고 좁다.
type ccc = aa & bb;

// 좁은 타입을 넓은 타입에 대입 하는건 되지만 반대는 안된다.

// const c: ccc = { name: 'raehan', age: 34, married: false  };
// ccc타입보다 객체가 더 상세하고 좁은 타입인데 왜 안되지?
// 객체 리터럴 검사인 잉여 속성 검사를 하기 때문.
// 중간에 변수를 한번 거쳐서가면 쉽게 해결 가능하다.

// 함수는 좁은 타입 넓은 타입 조금 다르다. 공변성 반공변성

export {}