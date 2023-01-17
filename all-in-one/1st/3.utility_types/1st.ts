export {}

interface Profile {
  name: string,
  age: number,
  married: boolean,
}

const raehan: Profile = {
  name: 'raehan',
  age: 30,
  married: false
}

// const han: Profile = {
//   name: 'raehan',
//   age: 30,
//   // 만약 결혼 정보가 개인정보 보호로 입력 안해도 되는 상황이 온다면?
//   // married가 없어서 에러가 나고, 그렇다고 새로운 타입이나 인터페이스를 만들기엔..
//   // 이때 쓰이는게 utility types
// }

const partialHan: Partial<Profile> = { // Partial이 하는 일은 필수 값들을 모두 옵셔널로 만드는 것이다.
  name: 'raehan',
  age: 30,
}

type MyPartial<T> = {
  [Key in keyof T]?: T[Key]
  // [Key in keyof T] 가 하는 역할은 어떤 객체가 오든 해당 객체의 키들을 Key in keyof T 안에 넣는다. - 1
}

// 1
// type Color = "White" | "Black";
// type P<T> = {
//   [Key in keyof T]: string
//   // 이렇게 하면 [Key in keyof T] 부분에 White 또는 Black이 온다.
// }

const pickHan: Pick<Profile, 'name' | 'age'> = {
  name: 'raehan',
  age: 30,
}
// Pick이 하는 역할은 뒤에 적혀 있는 name, age만 가져오는 것. Partial보다 사실 Pick과 후술할 Omit이 많이 쓰인다.

// type MyPick<T, S> = {
//   [Key in keyof S]: S[Key] // 2-1. 이러면 T와 S의 관계가..? 그리고 T가 필요 없게 된다.
// }

type MyPick<T, S extends keyof T> = {
  // 2-2. extends keyof T 를 하는 이유는 S 값은 결국 T의 키 값 중 하나여야 하기 때문이다.
  [Key in S]: T[Key]
}
// ! 2-3 제네릭을 사용할 땐 제네릭 간 제한 조건을 먼저 적어주는 것이 좋다.

// Exclude는 T에서 U타입을 빼는 것
type ExcludedType =  Exclude<keyof Profile, 'married'>
// 3-1. "name" | "age" 타입이 된다.
// 3-2. 그럼 위 40번째줄 Pick 에서 "name" | "age" 부분을 대체할수 있지 않나?

type Animal = 'Cat' | 'Dog' | 'Human';
type Mammal = Exclude<Animal, 'Human'>;
// 여기서 keyof를 안붙이는 이유는 Animal에 Human을 빼는 것이라서 프로필은 객체라서.

const pickHan2: Pick<Profile, Exclude<keyof Profile, 'married'>> = {
  name: 'raehan',
  age: 30,
}
// 3-3. Pick이 가져오고 싶은 타입만 가져오는 기능이라면 위 코드는 빼고 싶은 타입만 뺄수 있는 기능을 한다. 이게 Omit

// type MyOmit<T, S> = Pick<T, Exclude<keyof T, S>>
// Pick과 Exclude의 조합으로 작성 가능하다.
// S가 아무 값이 되면 안되니 제한을 붙여줘야한다.
type MyOmit<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>>
// 다른 어떤 것의 키 값이 돼야한다. 이걸 써주면 아래와 같은 코드를 사용 불가능하다.
// 즉 키 값은 string, number, symbol 중에 하나가 돼야한다.
// 한마디로 S extends keyof any 는 string | number | symbol 이다.
// const OmitError: MyOmit<Profile, Profile>

// Extract는 코드랑 Exclude의 반대 느낌.
type Human = Extract<Animal, 'Human'>;

// type Exclude<T, U> = T extends U ? never : T;
// // T가 U의 부분 집합이면? never 아니면 T
// // 62 번째줄 기준으로 'Cat' | 'Dog' | 'Human' -> 'Cat' | 'Dog' | never 이 되는데 never은 아무것도 아니므로 없어진다.
// type Extract<T, U> = T extends U ? T : never;
// // 위와 반대
// // 참고로 T가 Animal 순서 유의
// // 타입에 삼항 연상자가 들어갈 수 있다.

interface Profile2 {
  name?: string,
  age?: number,
  married?: boolean,
}

// const requiredHan: Required<Profile2> = { // 인터페이스 상으론 모두 옵셔널이지만 필수가 됐다.
const requiredHan: MyRequired<Profile2> = { // 인터페이스 상으론 모두 옵셔널이지만 필수가 됐다.
  name: 'raehan',
  age: 30,
  married: false
}

type MyRequired<T> = {
  [Key in keyof T]-?: T[Key]
  // - 는 모디파이어로 ?를 하면 전부 옵셔널인데 -? 를 하면 옵셔널을 전부 빼버려란 뜻
  // + 도 사용가능한데 사실 사용하나 안하나 같은 뜻(?, +?) 이라서 의미 없다.
  // 왜냐면 키를 가져올 때 ?까지 그대로 가져오기 때문이다.
}

// const readonlyHan: Readonly<Profile> = {
const readonlyHan: MyReadonly<Profile> = {
  name: 'raehan',
  age: 30,
  married: false
}

// readonlyHan.name = ''

type MyReadonly<T> = {
  readonly [Key in keyof T]: T[Key]
}

type MyNotReadonly<T> = {
  -readonly [Key in keyof T]-?: T[Key]
  // 리드온리도 모디파이드로 빼고 가져올수 있다. 옵셔널도 마찬가지
}

// 레코드는 객체를 표현하는 한가지 방법
interface Obj {
  [key: string]: number,
}

const sample1: Obj = { a: 1, b: 2, c: 3 };
// 샘플 코드를 만들때 위와 같이 할수도 있지만
const sample2: Record<string, number> = { a: 1, b: 2, c: 3 };

// type MyRecord<T, S> = {
type MyRecord<T extends keyof any, S> = {
  // 객체의 키는 stirng number symbol 만 올수 있기 때문에 extends keyof any가 붙어야 함
  [Key in T]: S
}

type Origin = string | null | undefined | boolean | number;
type NonNullUndefined1 = NonNullable<Origin>; // ????
type NonNullUndefined2 = NonNullable<string | number | undefined>; // ????
type NonNullUndefined3 = NonNullable<string[] | null | undefined>;
type NonNullUndefined4 = MyNotNullable<Origin>; // ????
// NonNullable 은 키에 적용되는 것이다.
// 파셜 리콰이어드 리드온리는 픽 같은 애들은 인터페이스에 적용
// 익스크루드 익스 는 키에 적용되는 애들

// const test: NonNullUndefined = 123

// type MyNotNullable<T> = T extends null | undefined ? never : T
type MyNotNullable<T> = T extends {} ? T : never
type DocNonNullable<T> = T & {};
// null 또는 undefined에 속하면 never 그게 아니면 그대로





