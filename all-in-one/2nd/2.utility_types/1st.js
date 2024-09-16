// Utility Types
// https://www.typescriptlang.org/docs/handbook/utility-types.html
const raehan = {
    name: 'raehan',
    age: 30,
    married: false,
};
// Profile 인터페이스에서 특정 값을 빼고 쓰고 싶일 때.
// 새로 인터페이스를 만드는 방법도 있지만..
// Partial을 써도 된다.
// Partial은 모든 키를 optioinal 로 만들어준다.
const newRaehan1 = {
    name: 'raehan',
    age: 30,
};
const newRaehan2 = {
    name: 'raehan',
    age: 30,
};
// 사실 근데 Partial은 전부 다 옵셔널로 만들어 빈 값도 가능하기 때문에 많이 안쓰인다.
// 그래서 쓰이는 것이 Pick과 Omit
// pick은 해당 타입에서 원하는 것만 가져오는 것.
// omit은 해당 타입에서 원하는 것만 빼주는 것.
const newRaehan3 = {
    name: 'raehan',
    age: 30,
};
// 이렇게 돌아갈 수 있기 때문에 제네릭 끼리의 제한 조건을 먼저 해주는 것이 좋다.
const newRaehan4 = {
    name: 'raehan',
    age: 30,
};
const newRaehan5 = {
    name: 'raehan',
    age: 30,
};
// S가 아무 값이나 되면 안되니 다른 어떤 것의 키 값이 와라 제한을 붙여줬다.
// 키 값으로 오도록.
// 반대로 생각하면 extends keyof any를 써주면 키 값만 올 수 있구나.
const newRaehan6 = {
    name: 'raehan',
    age: 30,
};
const newRaehan7 = {
    name: 'raehan',
    age: 30,
};
// 수정 못하게 막는 Readonly
const newRaehan8 = {
    name: 'raehan',
    age: 30,
    married: false,
};
const newRaehan9 = {
    name: 'raehan',
    age: 30,
    married: false,
};
const temp1 = { a: 1, b: 2, c: 3 };
const temp2 = { a: 1, b: 2, c: 3 };
const temp3 = { a: 1, b: 2, c: 3 };
export {};
