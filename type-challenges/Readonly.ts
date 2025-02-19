type MyReadonly<T> = {
  readonly [Key in keyof T]: T[Key];
};

type MyReadonlyCheck = MyReadonly<{ name: string; age: number }>;

const test: MyReadonlyCheck = {
  name: 'John',
  age: 20,
};
