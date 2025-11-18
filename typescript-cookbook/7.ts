function merge1<T extends unknown[], U extends unknown[]>(arr1: T, arr2: U) {
  return [...arr1, ...arr2];
}
const result1 = merge1([1, 2, 3], ['a', 'b', 'c']);

function merge2<T extends unknown[], U extends unknown[]>(arr1: [...T], arr2: [...U]) {
  return [...arr1, ...arr2];
}
const result2 = merge2([1, 2, 3], ['a', 'b', 'c']);

function merge3<T extends unknown[], U extends unknown[]>(arr1: T, arr2: U): [...T, ...U] {
  return [...arr1, ...arr2];
}
const result3 = merge3([1, 2, 3], ['a', 'b', 'c']);

function merge4<T extends unknown[], U extends unknown[]>(arr1: [...T], arr2: [...U]): [...T, ...U] {
  return [...arr1, ...arr2];
}
const result4 = merge4([1, 2, 3], ['a', 'b', 'c']);
// merge4 만 튜플로 추론도는 이유?

declare const a: string[];
declare const b: number[];

const test1 = merge4(a, b);
const test2 = merge4([1, 2, 3], ['a', 'b', 'c']);

function tuple<T extends unknown[]>(...args: T): T {
  return args;
}

declare const numbers: number[];
const t1 = tuple('foo', 1, true);
const t2 = tuple('bar', ...numbers);
// 이건 왜 튜플로 추론?

function argsTest1(a, b, ...c) {
  console.log(a, b, c);
}

function argsTest2(...a, b, c) {
  console.log(a, b, c);
}

type Fn<Args extends unknown[], Result> = (...args: [...Args, (result: Result) => void]) => void;
