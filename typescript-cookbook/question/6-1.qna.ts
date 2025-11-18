/**
 * 문제 1
 */

const debounce = <Fn extends (...args: any[]) => any>(fn: Fn, wait: number): ((...args: Parameters<Fn>) => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<Fn>) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      fn(...args);
    }, wait);
  };
};

/**
 * 문제 2
 */
/*
  Absolute type은 숫자 타입을 받아서 양수 타입으로 변환하는 타입입니다.
  예시: Absolute<100> -> "100"
  Absolute<-100> -> "100"
  Absolute<"100"> -> "100"
  Absolute<"-100"> -> "100"
*/

type TestNum = -100;
type ToNumericString<T> = T extends number | bigint ? `${T}` : T extends `${number}` | `${bigint}` ? T : never;

type Absolute<T> = ToNumericString<T> extends infer S extends string ? (S extends `-${infer R}` ? R : S) : never;
type Result = Absolute<TestNum>;
type Result2 = Absolute<100>;
type Result3 = Absolute<'100'>;

/**
 * 문제 3
 */

type Replace<Str extends string, From extends string, To extends string> = From extends ''
  ? Str
  : Str extends `${infer Prefix}${From}${infer Suffix}`
  ? `${Prefix}${To}${Suffix}`
  : Str;

type Parts<Str extends string, From extends string> = Str extends `${infer Prefix}${From}${infer Suffix}`
  ? [Prefix, Suffix]
  : never;
type Check = Parts<'asdf', 'asdf'>; // ['','']

type Result11 = Replace<'foobar', 'bar', 'foo'>;
type Result12 = Replace<'foobarbar', 'bar', 'foo'>;
type Result13 = Replace<'foobarbar', '', 'foo'>;
type Result14 = Replace<'foobarbar', 'bar', ''>;
type Result15 = Replace<'foobarbar', 'bra', 'foo'>;
type Result16 = Replace<'', '', ''>;

/**
 * 문제 4
 * */

type Tail<T extends unknown[]> = T extends [any, ...infer U] ? U : [];

type Prepend<ARR extends unknown[], T> = [T, ...ARR];

type Length<T extends any[]> = T['length'];

type Drop<N extends number, T extends any[], I extends any[] = []> = {
  0: Drop<N, Tail<T>, Prepend<I, any>>;
  1: T;
}[Length<I> extends N ? 1 : 0];

// [문제]
// 위 타입을 보고 역으로 drop 함수를 구현해주세요.

// const drop = <N extends number, T extends any[]>(n: N, array: T): Drop<N, T> => {
//   const recur = (current: any[], remaining: number): any[] => {
//     if (remaining <= 0 || current.length === 0) {
//       return current;
//     }

//     const [, ...rest] = current;
//     return recur(rest, remaining - 1);
//   };

//   const steps = Math.max(0, Math.trunc(n));
//   return recur(array, steps) as Drop<N, T>;
// };

// const iter = drop(1, [1, 2, 3, 4]);
// const i = iter[Symbol.iterator]();
// console.log(i.next());

const isIterable = (value: unknown): value is Iterable<unknown> =>
  value != null && typeof (value as Record<PropertyKey, unknown>)[Symbol.iterator] === 'function';

function drop<A>(length: number, iterable: Iterable<A>): IterableIterator<A>;
function drop(length: number): <A>(iterable: Iterable<A>) => IterableIterator<A>;
function drop<A>(
  length: number,
  iterable?: Iterable<A>,
): IterableIterator<A> | (<B>(iterable: Iterable<B>) => IterableIterator<B>) {
  if (iterable === undefined) {
    return <B>(source: Iterable<B>) => drop(length, source);
  }

  if (length < 0) {
    throw new RangeError("'length' must be greater than 0");
  }

  if (!isIterable(iterable)) {
    throw new TypeError("'iterable' must implement [Symbol.iterator]()");
  }

  const source = iterable;

  function* iteratorFactory(): IterableIterator<A> {
    const iterator = source[Symbol.iterator]();
    let remaining = length;

    while (remaining > 0) {
      const { done } = iterator.next();
      if (done) {
        return;
      }
      remaining -= 1;
    }

    while (true) {
      const { value, done } = iterator.next();
      if (done) {
        return;
      }
      yield value;
    }
  }

  return iteratorFactory();
}
