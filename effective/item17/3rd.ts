const obj = {
  foo: {
    bar: 123
  }
}

obj.foo.bar = 890;
console.log(obj.foo.bar)

type readonlyB = {
  readonly foo: { bar: string };
}

const x: readonlyB = { foo: { bar: 'abc' }};
x.foo.bar = 'xyz';
console.log(x.foo.bar)

export {}