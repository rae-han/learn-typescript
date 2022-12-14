"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Name과 Age의 합집합이 더 넓은 타입이다.
const person1 = { name: 'Raehan' };
// Name과 Age의 교집합이 더 좁은 타입이다.
// 객체가 상세할수록 더 좁은 타입이다.
const person2 = { name: 'Raehan', age: 30 };
const person3 = { name: 'Reahan', age: 30 };
// const person4: Person = { name: 'Reahan', age: 30, married: false }
const tempPerson = { name: 'Reahan', age: 30, married: false };
const person4 = tempPerson;
