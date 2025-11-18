/**
문제:
문자열을 객체 형식으로 변환하는 타입 ParseObject을 완성해주세요.

예시:
입력: "{ a: string; b: number; }"
출력: { a: string } & { b: number }

 */
// type Whitespace = ' ' | '\n' | '\r' | '\t';

// type TrimLeft<S extends string> = S extends `${Whitespace}${infer Rest}` ? TrimLeft<Rest> : S;
// type TrimRight<S extends string> = S extends `${infer Rest}${Whitespace}` ? TrimRight<Rest> : S;
// type Trim<S extends string> = TrimLeft<TrimRight<S>>;

// type StripBraces<S extends string> = Trim<S> extends `{${infer Inner}}`
//   ? Trim<Inner>
//   : Trim<S>;

// type ToKey<S extends string> = Trim<S>;

// type ParseArrowValue<S extends string> = Trim<S> extends `()=>${infer Return}`
//   ? () => ParseValue<Trim<Return>>
//   : Trim<S> extends `() => ${infer Return}`
//     ? () => ParseValue<Trim<Return>>
//     : never;

// type ParseValue<S extends string> =
//   Trim<S> extends ''
//     ? unknown
//     : Trim<S> extends 'string'
//       ? string
//       : Trim<S> extends 'number'
//         ? number
//         : Trim<S> extends 'boolean'
//           ? boolean
//           : Trim<S> extends '{}'
//             ? {}
//             : Trim<S> extends 'null'
//               ? null
//               : Trim<S> extends 'undefined'
//                 ? undefined
//                 : Trim<S> extends 'undefiend'
//                   ? undefined
//                   : Trim<S> extends 'never'
//                     ? never
//                     : Trim<S> extends 'any'
//                       ? any
//                       : ParseArrowValue<S> extends never
//                         ? unknown
//                         : ParseArrowValue<S>;

// type ParseEntry<S extends string> = Trim<S> extends ''
//   ? {}
//   : Trim<S> extends `${infer Key}:${infer Value}`
//     ? { [K in ToKey<Key>]: ParseValue<Value> }
//     : {};

// type ParseEntries<S extends string> = Trim<S> extends ''
//   ? {}
//   : Trim<S> extends `${infer Head};${infer Tail}`
//     ? ParseEntry<Head> & ParseEntries<Tail>
//     : ParseEntry<S>;

// type ParseObject<S extends string> = ParseEntries<StripBraces<S>>;

// type Reust = ParseObject<'{ a: string; b: number; }'>;

// 문자열 토큰을 실제 타입으로 치환하기 위한 매핑 테이블
type TokenMap = {
  string: string;
  number: number;
  boolean: boolean;
  '{}': {};
  null: null;
  undefined: undefined;
  undefiend: undefined;
  never: never;
  any: any;
};

// 간결 버전에서 사용할 공백 문자 정의
type Whitespace = ' ';

// 앞뒤 공백을 모두 제거하는 핼퍼
type TrimLeft<S extends string> = S extends `${Whitespace}${infer Rest}` ? TrimLeft<Rest> : S;
type TrimRight<S extends string> = S extends `${infer Rest}${Whitespace}` ? TrimRight<Rest> : S;
type Trim<S extends string> = TrimLeft<TrimRight<S>>;

// 중괄호를 벗겨내고 내부 문자열만 남기는 역할
type StripBraces<S extends string> = Trim<S> extends `{${infer Inner}}` ? Trim<Inner> : Trim<S>;

// 값 토큰을 실제 타입으로 변환하는 로직
type ParseValue<S extends string> = Trim<S> extends `()=>${infer Ret}`
  ? () => ParseValue<Ret>
  : Trim<S> extends `() => ${infer Ret}`
  ? () => ParseValue<Ret>
  : Trim<S> extends keyof TokenMap
  ? TokenMap[Trim<S>]
  : unknown;

// "key: value" 구문 하나를 객체 타입으로 변환
type ParseEntry<S extends string> = Trim<S> extends `${infer Key}:${infer Value}`
  ? { [K in Trim<Key>]: ParseValue<Value> }
  : {};

// 세미콜론으로 구분된 항목을 재귀적으로 병합
type ParseEntries<S extends string> = Trim<S> extends ''
  ? {}
  : Trim<S> extends `${infer Head};${infer Tail}`
  ? ParseEntry<Head> & ParseEntries<Tail>
  : ParseEntry<S>;

// 최종적으로 문자열 객체 표현을 타입으로 치환
type ParseObject<S extends string> = ParseEntries<StripBraces<S>>;

type MapFormatType = {
  string: string;
  number: number;
  boolean: boolean;
  null: null;
  undefiend: undefined;
  never: never;
  [x: string]: any;
};

// type ParseObject<T extends string> = T extends `${string} ${infer Key}: ${infer Type};${infer Rest}`
//   ? { [k in Key]: MapFormatType[Type] } & ParseObject<Rest>
//   : {};

// 아래 테스트 케이스를 통과시켜주세요.
type Test_6_1_1 = ParseObject<'{ a: string; b: number; }'>;
// { a: string } & { b: number }
type Test_6_1_2 = ParseObject<'{ a: string; b: number; c: boolean; }'>;
// { a: string } & { b: number } & { c: boolean }
type Test_6_1_3 =
  ParseObject<'{ a: string; b: number; c: boolean; d: {}; e: null; f: undefiend; g: never; h: ()=>any; }'>;
// { a: string } & { b: number } & { c: boolean } & { d: {} } & { e: null } & { f: undefiend } & { g: never } & { h: ()=>any }

/**
문제:
다음과 같은 요구사항을 만족하는 TypeScript 타입을 작성하세요:
주어진 문자열에서 모든 공백을 제거하고
각 단어의 첫 글자를 대문자로 변환하며
단어 사이에 언더스코어()를 추가하는 타입을 구현하세요.

예시:
입력: "hello world typescript"
출력: "Hello_World_Typescript"

힌트:
- 재귀적 타입과 템플릿 리터럴 타입을 활용하세요
- Capitalize, Uncapitalize 유틸리티 타입을 사용할 수 있습니다
 */

// 아래 타입을 완성시켜주세요.
type PascalCaseWithUnderscore<T extends string> = T extends `${infer First} ${infer Rest}`
  ? `${Capitalize<First>}_${PascalCaseWithUnderscore<Rest>}`
  : Capitalize<T>;

// 아래 테스트 케이스를 통과시켜주세요.
type Test_6_2_1 = PascalCaseWithUnderscore<'hello world typescript'>; // "Hello_World_Typescript"
type Test_6_2_2 = PascalCaseWithUnderscore<'this is a test'>; // "This_Is_A_Test"
type Test_6_2_3 = PascalCaseWithUnderscore<'single'>; // "Single"
type Test_6_2_4 = PascalCaseWithUnderscore<'hello  world'>; // "Hello__World"
