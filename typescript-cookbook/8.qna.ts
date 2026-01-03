/*
  아래 예시를 만족하는 2개의 유틸타입을 작성해주세요.
  1. 특정 속성들을 읽기 전용으로 만드는 타입
  2. 두 타입의 공통 속성만 추출하는 타입

  예시를 참고해주세요.
*/

type Company = {
  id: number;
  name: string;
  email: string;
  address?: string;
};

type Employee = {
  id: number;
  name: string;
  department: string;
  salary: number;
};

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

type SetReadonly<T, K extends keyof T> = {
  readonly [P in K]: T[P];
} & {
  [P in Exclude<keyof T, K>]: T[P];
};

// 예시
// email을 읽기 전용으로
type ReadonlyEmail = Expand<SetReadonly<Company, 'email'>>;

// type CommonProperties<T, U> = {
//   [K in keyof T & keyof U]: T[K];
// };

// type CommonProperties<T, U> = {
//   [K in keyof T & keyof U]: T[K] | U[K];
// };

type CommonProperties<T, U> = {
  [K in keyof T & keyof U as T[K] extends U[K] ? (U[K] extends T[K] ? K : never) : never]: T[K];
};

// 두 타입의 공통 속성 추출
type CommonFields = CommonProperties<Company, Employee>;
/*
type CommonFields = {
  id: number;
  name: string;
}
*/

// TypeScript의 유니온 타입과 인터섹션 타입 변환을 활용한 문제입니다.

// 주어진 타입들이 있습니다:
type BasicUser = {
  id: number;
  name: string;
};

type AdminRole = { role: { type: 'Admin'; permissions: string[] } };
type EditorRole = { role: { type: 'Editor'; editScope: string[] } };
type ViewerRole = { role: { type: 'Viewer'; viewScope: string[] } };

type Roles = AdminRole | EditorRole | ViewerRole;

// 아래의 각각의 타입 결과가 나오도록 타입을 가공해주세요.
// 결과 ->  "Admin" | "Editor" | "Viewer"
// type RoleType = Roles['role']['type'];
// type RoleType = Roles extends { role: { type: infer T } } ? T : never;
type ExtractNested<T, Keys extends string[]> = Keys extends [infer First extends string, ...infer Rest extends string[]]
  ? T extends { [K in First]: infer V }
    ? Rest extends []
      ? V
      : ExtractNested<V, Rest>
    : never
  : T;

type RoleType = ExtractNested<Roles, ['role', 'type']>;

type PickFromUnion<T, K extends string> = T extends { [P in K]: infer V } ? { [P in K]: V } : never;

type Result = PickFromUnion<Roles['role'], 'type'>;

type WrapWithKey<T, K extends string> = T extends any ? { [P in K]: T } : never;

type RootUser = BasicUser & (AdminRole | EditorRole | ViewerRole);
type Result3 = WrapWithKey<ExtractNested<RootUser, ['role', 'type']>, 'type'>;

type Union = { a: number } | { b: string };
type Remap<T> = {
  [K in keyof T]: T[K];
};
type Test1 = Remap<Union>;
type Test2 = Expand<Union>;

type A = { a: number };
type B = { b: string };

type Test3 = Remap<Union>; // 유니온의 keyof = never → 결과도 이상해짐
type Test4 = Expand<Union>;

type Union2 = { a: number } | { b: string };

type Test5 = Remap<Union2>; // {} (빈 객체)
type Test6 = Expand<Union2>;
