class Foo {
  constructor(public text: string) { }
}

const foo = new Foo('hello');
console.log(foo);
console.log(foo.text);

class Bar {
  constructor(public text: string) { }
}

const bar = new Bar('bye');
console.log(bar);
console.log(bar.text);