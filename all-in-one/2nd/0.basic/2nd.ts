// 템플릿 리터럴 타입
type World = 'world' | 'hell';
const a: World = 'world';

const b = `hello ${a}`;

type Greeting = `hello ${World}`;

const c: Greeting = 'hello world';
const d: Greeting = 'hello hell';

console.log(a, b, c, d);

export {};

const root = document.querySelector(`#root`)!;

type NumberRange = `${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0}`;
type NumberRanges = `${NumberRange}${NumberRange}${NumberRange}${NumberRange}`;
