/*
[문제]
우리가 지금까지 공부한 모든 내용을 활용해서 객체를 합치는 MergeAll 이라는 유틸 함수를 만들어 봅시다.
재귀, 조건부, infer, 제네릭 등등을 활용해봅시다.
*/

type Foo = { a: 1; b: 2 };
type Bar = { a: 2 };
type Baz = { c: 3 };

// [해결책] 두 객체를 합치는 Merge + 재귀적으로 적용하는 MergeAll

// 1. 두 객체 합치는 함수
type Merge<A, B> = {
  [K in keyof A | keyof B]: K extends keyof A
    ? K extends keyof B
      ? A[K] | B[K]
      : A[K]
    : K extends keyof B
    ? B[K]
    : never;
};

// 2. 튜플의 모든 객체를 재귀적으로 합치는 함수
type MergeAll<T extends object[]> = T extends [infer Only extends object]
  ? Only
  : T extends [infer First extends object, ...infer Rest extends object[]]
  ? Merge<First, MergeAll<Rest>>
  : never;

// 기대값 : { a: 1 | 2; b: 2; c: 3 }
type Result = MergeAll<[Foo, Bar, Baz]>;

// ============================================
// [다른 접근법 비교]
// ============================================

// 버전 2: length 체크 방식
type MergeAll2<T extends object[]> = T extends [infer First, ...infer Rest]
  ? First extends object
    ? Rest extends object[]
      ? Rest['length'] extends 0
        ? First
        : Merge<First, MergeAll2<Rest>>
      : First
    : never
  : never;

type Result2 = MergeAll2<[Foo, Bar, Baz]>;

// 버전 3: 누적 패턴 (Accumulator)
// - Omit<Result, never>는 중첩된 & 타입을 펼쳐서 보기 좋게 만듦
type MergeAll3<O extends object[], Result = object> = O extends [
  infer Left,
  ...infer Right extends object[],
]
  ? MergeAll3<
      Right,
      Omit<Result, keyof Left> & {
        [Key in keyof Left]: Key extends keyof Result
          ? Result[Key] | Left[Key]
          : Left[Key];
      }
    >
  : Omit<Result, never>;

type Result3 = MergeAll3<[Foo, Bar, Baz]>;

/*
[버전 비교]
| 버전 | 방식 | 특징 |
|------|------|------|
| 1 | [infer Only] 패턴 | 간결, 명확 |
| 2 | length 체크 | 의도 명확하나 중첩 깊음 |
| 3 | Accumulator 패턴 | 꼬리 재귀 최적화, Omit으로 타입 펼침 |
*/
