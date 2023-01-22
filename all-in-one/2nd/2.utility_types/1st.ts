// Utility Types
// https://www.typescriptlang.org/docs/handbook/utility-types.html

interface Profile {
  name: string,
  age: number,
  married: boolean
}

const raehan: Profile = {
  name: 'raehan',
  age: 30,
  married: false,
}

// Profile 인터페이스에서 특정 값을 빼고 쓰고 싶일 때.
// 새로 인터페이스를 만드는 방법도 있지만..
// Partial을 써도 된다.
// Partial은 모든 키를 optioinal 로 만들어준다.
const newRaehan1: Partial<Profile> = {
  name: 'raehan',
  age: 30,
}

type _Partial<T> = {
  [K in keyof T]?: T[K]
}

const newRaehan2: _Partial<Profile> = {
  name: 'raehan',
  age: 30,
}

// 사실 근데 Partial은 전부 다 옵셔널로 만들어 빈 값도 가능하기 때문에 많이 안쓰인다.
// 그래서 쓰이는 것이 Pick과 Omit
// pick은 해당 타입에서 원하는 것만 가져오는 것.
// omit은 해당 타입에서 원하는 것만 빼주는 것.
const newRaehan3: Pick<Profile, 'name' | 'age'> = {
  name: 'raehan',
  age: 30,
}

// type _Pick<T, S extends keyof T> = {
//   // [K in keyof S]: S[K]
//   [K in S]: T[K]
// }
// type _Pick<T, S> = {
//   // [K in keyof S]: T[K];
//   // TS2536: Type 'K' cannot be used to index type 'T'.
//   // K를 인덱스 형식 T에 사용할수 없다.
//
//   [K in keyof S]: S[K];
//   // 이렇게 하면 T가 없네..??
//   // Profile과 S가 관계가 있는 데이터이기 때문에 관계를 제한해줘야한다. 이어줘야한다.
// }

type _Pick<T, S extends keyof T> = {
  [K in S]: T[K];
}
// 이렇게 돌아갈 수 있기 때문에 제네릭 끼리의 제한 조건을 먼저 해주는 것이 좋다.

const newRaehan4: _Pick<Profile, 'name' | 'age'> = {
  name: 'raehan',
  age: 30,
}

// Omit은 만드려면 Exclude, Pick이 쓰인다.
// Exclude는 T에서 U타입을 빼는 것.
type excluded1 = Exclude<keyof Profile, 'married'>

type _Exclude<T, U> = T extends U ? never : T;

type excluded2 = _Exclude<keyof Profile, 'married'>

const newRaehan5: Omit<Profile, 'married'> = {
  name: 'raehan',
  age: 30,
}

type _Omit<T, S extends keyof T> = {
  [K in _Exclude<keyof T, S>]: T[K]
}

// 강의
type O1<T, S> = Pick<T, Exclude<keyof T, S>>
type O2<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>>
// S가 아무 값이나 되면 안되니 다른 어떤 것의 키 값이 와라 제한을 붙여줬다.
// 키 값으로 오도록.
// 반대로 생각하면 extends keyof any를 써주면 키 값만 올 수 있구나.

const newRaehan6: _Omit<Profile, 'married'> = {
  name: 'raehan',
  age: 30,
}

const newRaehan7: O1<Profile, 'married'> = {
  name: 'raehan',
  age: 30,
}

// Extract는 Exclude의 반대
type _Extract<T, U> = T extends U ? T : never;
type extracted = _Extract<keyof Profile, 'married'>

// Required 는 옵셔널은 모드 옵셔널이 아닌 필수로 만드는 타입
type OptionalProfile = Partial<Profile>

type RequiredProfile1 = Required<OptionalProfile>

type _Required<T> = {
  [Key in keyof T]-?: T[Key]
  // modifier
  // - 하면 옵셔널은 뺀다.
  // + 도 되는데 똑같다..
}

type RequiredProfile2 = _Required<OptionalProfile>

// 수정 못하게 막는 Readonly
const newRaehan8: Readonly<Profile> = {
  name: 'raehan',
  age: 30,
  married: false,
}
// newRaehan8.age = 20;

type _Readonly<T> = {
  readonly [Key in keyof T]: T[Key]
  // readonly를 빼려면 -readonly를 하면 된다.
}
const newRaehan9: _Readonly<Profile> = {
  name: 'raehan',
  age: 30,
  married: false,
}
// newRaehan9.age = 20;

// 아무 객체를 표현하고 싶을 때
interface Obj {
  [key: string]: number;
}
const temp1: Obj = { a: 1, b: 2, c: 3 };
const temp2: Record<string, number> = { a: 1, b: 2, c: 3 };

type _Record<T extends keyof any, S> = {
  // 객체의 키는 string number symbol 만 되므로 위 제네릭 조건이 붙어야한다.
  [key in T]: S
}
const temp3: _Record<string, number> = { a: 1, b: 2, c: 3 };

type All = string | number | null | undefined | boolean;
type NN1 = NonNullable<All>; // null, undefined를 빼고 들고오고 싶을 때

type _NonNullable1<T> = T extends null | undefined ? never : T;
type NN2 = _NonNullable1<All>;

type _NonNullable2<T> = T & {};
type NN3 = _NonNullable2<All>;



export {}

