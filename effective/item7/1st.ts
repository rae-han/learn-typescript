type Name = { name: string }
type Age = { age: number }

type Wide = Name | Age;
// Name과 Age의 합집합이 더 넓은 타입이다.
const person1: Wide = { name: 'Raehan' }

type Narrow = Name & Age;
// Name과 Age의 교집합이 더 좁은 타입이다.
// 객체가 상세할수록 더 좁은 타입이다.
const person2: Narrow = { name: 'Raehan', age: 30 }

type Person = { name: string, age: number }
const person3: Person = { name: 'Reahan', age: 30 }
// const person4: Person = { name: 'Reahan', age: 30, married: false }
const tempPerson = { name: 'Reahan', age: 30, married: false }
const person4: Person = tempPerson;

interface A {
  name: string
}

interface B {
  birth: string;
  death?: string;
}

//
type C = A & B;

const cc: C = {
  name: 'asdf',
  birth: 'qwer',
  // death: 'zxcv',
  // etc: 'asdf'
}

export {}