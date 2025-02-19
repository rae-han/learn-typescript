type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type Omit2<T, K extends keyof T> = {
  [Key in keyof T extends K ? never : K]: T[Key];
};

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

type ExpandOmitType = Expand<Omit2<{ title: string; content: string }, 'title'>>;

// 일반적으로 naked 조건부 타입은 extends 조건문의 좌변에 generic 타입 매개변수가 래퍼 없이 사용될 때 만들어
// distributive conditional types 분산 조건부 타입
// 파라메트릭스 타입에서 사용되는 조건부 타입은 분산 조건부 타입이다.

// re-mapping 타입
type Omit3<T, K extends keyof T> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key];
};
