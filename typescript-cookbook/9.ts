type Person = {
  name: string;
  age: number;
  // married: boolean;
};

const person: Person = {
  name: 'Raehan',
  age: 30,
  // married: true,
};

// Object.keys(person).map((k) => person[k]);

function printPerson<T extends Person>(p: T) {
  const you: Person = {
    name: 'Reader',
    age: NaN,
  };
  for (let k in p) {
    console.log(k, you[k]);
    // 'Extract<keyof T, string>' 형식을 인덱스 형식
    // 'Person'에 사용할 수 없습니다. ts(2536)
  }
}

// ## 9.2
interface Body {
  json(): Promise<unknown>;
}
interface Response {
  json(): Promise<unknown>;
}

const req = async () => {
  const ppl: Person[] = await fetch('/api/people').then((res) => res.json());
};

// ## 9.3
type InferValue<Prop extends PropertyKey, Desc> = Desc extends { get(): any; value: any }
  ? never
  : Desc extends { value: infer T }
  ? Record<Prop, T>
  : Desc extends { get(): infer T }
  ? Record<Prop, T>
  : never;

type DefineProperty<Prop extends PropertyKey, Desc extends PropertyDescriptor> = Desc extends {
  writable: any;
  set(val: any): any;
}
  ? never
  : Desc extends { writable: any; get(): any }
  ? never
  : Desc extends { writable: false }
  ? Readonly<InferValue<Prop, Desc>>
  : Desc extends { writable: true }
  ? InferValue<Prop, Desc>
  : Readonly<InferValue<Prop, Desc>>;

function defineProperty<Obj extends object, Key extends PropertyKey, PDesc extends PropertyDescriptor>(
  obj: Obj,
  prop: Key,
  val: PDesc,
): asserts obj is Obj & DefineProperty<Key, PDesc> {
  Object.defineProperty(obj, prop, val);
}

const storage = {
  currentValue: 0,
};

defineProperty(storage, 'maxValue', {
  writable: false,
  value: 9001,
});

storage.maxValue; // number
// storage.maxValue = 2; // 오류! 읽기 전용

// # 9.4
// 방법 1: 인터페이스 패치 - 선언 합치기 오버로드 문제로 잘 안 됨
// interface ReadonlyArray<T> {
//   includes(searchElement: any, fromIndex?: number): searchElement is T;
// }

// 방법 2: 헬퍼 함수 - 확실하게 동작
function includes<T extends U, U>(coll: ReadonlyArray<T>, el: U): el is T {
  return coll.includes(el as T);
}

const actions = ['CREATE', 'READ', 'UPDATE', 'DELETE'] as const;

function execute(action: string) {
  if (includes(actions, action)) {
    // action: "CREATE" | "READ" | "UPDATE" | "DELETE"
  }
}

// # 9.5
const array = [1, 2, 3, undefined, 4, null];
const filtered = array.filter(Boolean);
