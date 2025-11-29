// ramda.js 라는 함수형 프로그래밍 라이브러리에 있는 partialRight 함수를 구현해봅시다.
//   partialRight 함수의 사용법은 아래와 같습니다.

const greet = (salutation: string, title: string, firstName: string, lastName: string) =>
  salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';

// const greetMsJaneJones = partialRight(greet, ['Ms.', 'Jane', 'Jones']);
// greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'

// 아래는 우리가 구현해야할 partialRight 함수입니다. 현재로는 javascript문법으로만 구현되어있습니다.
// 이를 typescript로 변환해봅시다.

// function partialRight(fn, args) {
//   return (...rest) => fn(...rest, ...args);
// }

//   [고려사항]
// any의 사용범위는 작성자의 판단에 맡깁니다.
// 두번째 인자로 넘어가는 배열의 요소들은 number, string, boolean 타입들만 사용합니다.

//구현

// 튜플에서 마지막 N개 요소를 제거하는 타입
type DropLast<T extends unknown[], N extends unknown[]> = T extends [...infer Rest, ...N] ? Rest : never;

function partialRight<Fn extends (...args: any[]) => any, Args extends unknown[]>(
  fn: Fn,
  args: [...Args],
): (...rest: DropLast<Parameters<Fn>, Args>) => ReturnType<Fn> {
  return (...rest: any[]) => fn(...rest, ...args);
}

//
const greetMsJaneJones = partialRight(greet, ['Ms.', 'Jane', 'Jones']);

// 타입 테스트
greetMsJaneJones('Hello');

// greetMsJaneJones(); // Error: Expected 1 arguments, but got 0
// greetMsJaneJones('Hello', 'Extra'); // Error: Expected 1 arguments, but got 2

const greet2 = partialRight(greet, ['Jane', 'Jones']);
greet2('Hello', 'Ms.');

const greet3 = partialRight(greet, ['Jones']);
greet3('Hello', 'Ms.', 'Jane');
