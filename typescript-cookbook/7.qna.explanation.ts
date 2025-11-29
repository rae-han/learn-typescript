// ============ 1. DropLast 타입 설명 ============

// 튜플에서 마지막 N개 요소를 제거하는 타입
type DropLast<T extends unknown[], N extends unknown[]> = T extends [...infer Rest, ...N] ? Rest : never;

// 하나하나 뜯어보기:

// 1-1. 제네릭 매개변수 선언
// type DropLast<
//   T extends unknown[],  // T는 unknown[] 타입이어야 함 (배열/튜플)
//   N extends unknown[]   // N도 unknown[] 타입이어야 함 (배열/튜플)
// >

// 1-2. 조건부 타입 (Conditional Type)
// T extends [...infer Rest, ...N] ? Rest : never
//
// 의미: "T가 [...어떤것, ...N] 형태인가?"
// - Yes → Rest를 반환
// - No → never를 반환

// 1-3. infer 키워드
// [...infer Rest, ...N]
// "Rest"는 추론해서 알아내라는 의미
// T를 앞부분(Rest)과 뒷부분(N)으로 분리

// 예제로 이해하기:
type Example1 = DropLast<[string, number, boolean], [boolean]>;
// T = [string, number, boolean]
// N = [boolean]
// T extends [...infer Rest, ...boolean] ?
// → [string, number, boolean] extends [...Rest, boolean] ?
// → Rest = [string, number] ✅
// 결과: [string, number]

type Example2 = DropLast<[string, string, string, string], [string, string, string]>;
// T = [string, string, string, string]
// N = [string, string, string]
// T extends [...infer Rest, ...string, string, string] ?
// → Rest = [string] ✅
// 결과: [string]

type Example3 = DropLast<[number, string], [boolean]>;
// T = [number, string]
// N = [boolean]
// T extends [...infer Rest, ...boolean] ?
// → [number, string] extends [...Rest, boolean] ?
// → 매치 안됨! (마지막이 string이지 boolean이 아님)
// 결과: never

// ============ 2. partialRight 함수 설명 ============

const greet = (salutation: string, title: string, firstName: string, lastName: string) =>
  salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';

function partialRight<
  Fn extends (...args: any[]) => any, // 2-1. Fn은 함수 타입이어야 함
  Args extends unknown[], // 2-2. Args는 배열/튜플 타입이어야 함
>(
  fn: Fn, // 2-3. 첫 번째 매개변수: Fn 타입의 함수
  args: [...Args], // 2-4. 두 번째 매개변수: Args를 튜플로 추론
): (...rest: DropLast<Parameters<Fn>, Args>) => ReturnType<Fn> {
  // 2-5. 반환 타입 설명
  return (...rest: any[]) => fn(...rest, ...args);
  // 2-6. 구현부
}

// 2-1. Fn extends (...args: any[]) => any
// "Fn은 함수여야 한다"는 제약
// 예: (a: string) => number, (x: number, y: number) => void 등

// 2-2. Args extends unknown[]
// "Args는 배열/튜플이어야 한다"는 제약

// 2-3. fn: Fn
// 첫 번째 인자로 함수를 받음
// 예: partialRight(greet, ...)

// 2-4. args: [...Args]
// 🔑 핵심! [...Args]는 배열 리터럴을 튜플로 추론하도록 강제
//
// 비교:
// args: Args           → ['a', 'b'] 는 string[] 로 추론
// args: [...Args]      → ['a', 'b'] 는 [string, string] 로 추론

// 2-5. 반환 타입: (...rest: DropLast<Parameters<Fn>, Args>) => ReturnType<Fn>
//
// Parameters<Fn>: Fn의 매개변수를 튜플로 추출
// ReturnType<Fn>: Fn의 반환 타입 추출
//
// 예제:
// Fn = (a: string, b: number) => boolean
// Parameters<Fn> = [string, number]
// ReturnType<Fn> = boolean

// 2-6. 구현부
// return (...rest: any[]) => fn(...rest, ...args);
//
// rest: 왼쪽에서 받을 인자들
// args: 이미 부분 적용된 오른쪽 인자들
// fn(...rest, ...args): 모두 합쳐서 원래 함수 호출

// ============ 3. 실제 동작 예제 ============

const greetMsJaneJones = partialRight(greet, ['Ms.', 'Jane', 'Jones']);

// 단계별 추론 과정:
//
// 1) greet의 타입 추출
//    Fn = (salutation: string, title: string, firstName: string, lastName: string) => string
//
// 2) Parameters<Fn> 추출
//    Parameters<Fn> = [string, string, string, string]
//
// 3) args 타입 추론
//    ['Ms.', 'Jane', 'Jones'] with [...Args]
//    → Args = [string, string, string]
//
// 4) DropLast 계산
//    DropLast<[string, string, string, string], [string, string, string]>
//    = [string, string, string, string] extends [...infer Rest, ...string, string, string]
//    = Rest = [string] ✅
//
// 5) 반환 타입
//    (...rest: [string]) => string
//    = (rest: string) => string

// 타입 테스트
greetMsJaneJones('Hello'); // ✅ OK - 정확히 1개 인자
// greetMsJaneJones(); // ❌ Error: Expected 1 arguments
// greetMsJaneJones('Hello', 'Extra'); // ❌ Error: Expected 1 arguments

// 다른 예제
const greet2 = partialRight(greet, ['Jane', 'Jones']);
// DropLast<[string, string, string, string], [string, string]> = [string, string]
// 타입: (rest: string, rest: string) => string

const greet3 = partialRight(greet, ['Jones']);
// DropLast<[string, string, string, string], [string]> = [string, string, string]
// 타입: (rest: string, rest: string, rest: string) => string

// ============ 4. 왜 이렇게 작동하는가? ============

// 핵심 1: [...Args]가 튜플 추론을 강제
//
// Without [...Args]:
// const arr = ['a', 'b'] → type: string[]
//
// With [...Args]:
// const arr: [...Args] = ['a', 'b'] → type: [string, string]

// 핵심 2: DropLast가 가변 튜플 매칭
//
// T extends [...infer Rest, ...N]
// 이것은 "T를 Rest와 N으로 분리할 수 있는가?"를 확인
//
// [A, B, C, D] extends [...Rest, C, D] ?
// → Rest = [A, B] ✅

// 핵심 3: Parameters<Fn>과 Args를 조합
//
// 원래 함수 매개변수: [A, B, C, D]
// 부분 적용할 인자: [C, D]
// 남은 인자: [A, B] ← DropLast가 계산

// ============ 5. 주의사항 ============

// 주의 1: args의 타입이 fn의 매개변수와 호환되어야 함
// const bad = partialRight(greet, [123, 456]); // ❌ number는 string에 할당 불가

// 주의 2: args는 fn의 "오른쪽 끝" 매개변수여야 함
// partialRight(greet, ['Ms.'])
// → 이것은 마지막 1개 인자(lastName)를 'Ms.'로 고정
// → greet('Hello', 'Dr.', 'Jane') 로 호출 가능

// 주의 3: 너무 많은 인자를 전달하면?
// const invalid = partialRight(greet, ['a', 'b', 'c', 'd', 'e']);
// DropLast<[string, string, string, string], [string, string, string, string, string]>
// → never (매칭 실패)
