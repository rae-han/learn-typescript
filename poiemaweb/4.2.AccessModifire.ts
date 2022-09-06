class Foo {
  public a: number;
  protected b: number;
  private c: number;

  constructor(a: number = 1, b: number = 2, c: number = 3) {
    this.a = a;
    this.b = b;
    this.c = c;
    // public, protected, private 접근 제한자 모드 클래스 내부에서 참조 가능.
  }
}

const foo = new Foo(1, 2, 3);

console.log(foo.a);
// public 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조 가능하다.

// console.log(foo.b); // Error! TS2445: Property 'b' is protected and only accessible within class 'Foo' and its subclasses.
// console.log(foo.c); // Error! TS2341: Property 'c' is private and only accessible within class 'Foo'.
// protected, private 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할 수 없다.

class Bar extends Foo {
  constructor(a: number, b: number, c: number) {
    super(a, b, c);

    console.log(this.a);
    console.log(this.b);
    // public, protected 접근 제한자는 자식 클래스 내부에서 참조 가능하다.

    // console.log(this.c); // Error! TS2341: Property 'c' is private and only accessible within class 'Foo'.
    // private 접근 제한자는 자식 클래스 내부에서 참조할 수 없다.
  }
}

