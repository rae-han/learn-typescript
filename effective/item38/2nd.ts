interface Foo { foo: string; }
interface Bar { bar: string; }
declare function expressionReturningFoo(): Foo;
function processBar(b: Bar) { /* ... */ }
function f1() {
  const x: any = expressionReturningFoo();
  processBar(x);
  return x;
}

type FooBar = Foo & Bar;

const x: FooBar = {
  foo: 'a',
  bar: 'b',
}

function g() {
  const foo = f1();  // Type is any
  foo.fooMethod();  // This call is unchecked!
}

export {}