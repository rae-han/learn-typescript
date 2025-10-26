// [ 문제 ]
// 함수의 결과값의 타입을 뱉어주는
// MyReturnType 을 직접 정의해봅시다.
// any 를 써도 됩니다.
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

function func(a: string) {
  return a;
}

type T = MyReturnType<typeof func>;

// console.log(T);

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
  tags: string[];
  rating?: number;
  summary?: string;
};

// 1. FilterByType 제네릭 타입을 구현하세요.
// - 첫 번째 파라미터로 객체 타입을 받습니다.
// - 두 번째 파라미터로 필터링할 값의 타입을 받습니다.
// - 해당 타입의 속성만 포함하는 새로운 타입을 반환합니다.
type FilterByType<O, T> = {
  [K in keyof O as O[K] extends T | undefined ? K : never]: O[K];
};

type NumericProductFields = FilterByType<Product, number>;
// { id: number; price: number; rating?: number | undefined; }

type StringProductFields = FilterByType<Product, string>;
// { name: string; description: string; summary?: string | undefined; }
type ExcludeByType1<O, T> = {
  [K in keyof O as O[K] extends T | undefined ? never : K]: O[K];
};

type ExcludeByType2<O, T> = {
  [K in keyof O as Extract<O[K], T> extends never ? K : never]: O[K];
};

// 2. ExcludeByType 제네릭 타입을 구현하세요.
// - 첫 번째 파라미터로 객체 타입을 받습니다.
// - 두 번째 파라미터로 제외할 값의 타입을 받습니다.
// - 해당 타입이 아닌 속성만 포함하는 새로운 타입을 반환합니다.
type ExcludeByType<O, T> = {
  [K in keyof O as undefined extends O[K] ? never : Extract<O[K], T> extends never ? K : never]: O[K];
};

type ExcludeByType<O, T> = {
  [K in keyof O as {} extends Pick<O, K> ? never : O[K] extends T ? never : K]: O[K];
};

type NonStringFields = ExcludeByType<Product, string>;
// { id: number; price: number; inStock: boolean; tags: string[]; }

type NonBooleanFields = ExcludeByType<Product, boolean>;
// { id: number; name: string; price: number; description: string; tags: string[]; }

// 3. 두 객체를 합치는 타입을 만들어주세요.

type Boo = {
  name: string;
  age: string;
};

type Coo = {
  age: number;
  sex: string;
};

type Merge<
  O1 extends Record<PropertyKey, unknown>,
  O2 extends Record<PropertyKey, unknown>,
  Combined = Omit<O1, keyof O2> & O2,
> = {
  [K in keyof Combined]: Combined[K];
};

type Result = Merge<Boo, Coo>;
// expected to be {name: string, age: number, sex: string}

// 사용 시 확인용
type AgeInResult = Result['age']; // number 이어야 함
