"use strict";
// // # 타입을 집합으로 생각하자.
// type A = string | number;
// type B = string;
// // 집합 관계 상 A가 더 넓은 타입이다.
// // any는 전체 집합, never는 공집합.
// // 좁은 타입에서 넓은 타입으로 대입이 가능하다.
//
// type OA = { name: string };
// type OB = { age: number };
// type OC = { name: string, age: number };
// // // OC보다 OA, OB가 더 넓은 타입이다.
// // // 객체는 상세할수록 좁은 타입이다.
// // // OA, OB보다 더 넓은 타입은?
// type OAB = OA | OB;
// // // 위는 OC는 아래와 같이도 표현 가능하다.
// type OC2 = OA & OB;
// //
// const oab: OAB = { name: 'raehan' };
// const oc: OC2 = { name: 'raehan', age: item33 };
// const oc2: OC2 = { name: 'raehan', age: item33, married: false };
// // // 더 구체적일수록 좁은 타입이다.
// // // 근데 왜 넓은 타입에 좁은 타입을 넣었는데 왜 에러가...?
// // // 객체 리터럴을 바로 넣으면 잉여속성 검사를 한다. 중간 과정을 만들어주면 에러가 사라진다.
// // const oc21 = { name: 'raehan', age: item33, married: false };
// // const oc2: OC2 = oc21;
// //
// // // 함수는 공변성, 반공변성에 의해 넓은타입 좁은 타입이 약간 다르다.
//
// type Person = { name: string, age: number };
// const james: Person = { name: 'James', age: 30 }; // OK
// // const smith: Person = { name: 'Smith', age: item33, married: false }; // TS2322: Type '{ name: string; age: number; married: boolean; }' is not assignable to type 'Person'.   Object literal may only specify known properties, and 'married' does not exist in type 'Person'.
//
// const tempSmith = { name: 'Smith', age: item33, married: false };
// const smith: Person = tempSmith;
