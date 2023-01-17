class A {
  a: string = '123'
  b: number = 123
}

class B {
  a: string;
  b: number;

  constructor() { // 이 부분 생략하면 초기화, 할당되지 않았단 에러가 떠서 위처럼 써주는 거다.
    this.a = '123'
    this.b = 123;
  }
}

class C {
  a: string;
  b: number;

  constructor(a: string, b: number = 123) { // 기본값이 있다면 ? 안써줘도 된다.
    this.a = a
    this.b = b;
  }
}

type AA = A;
// 클래스 자체로 타입이 된다. 하지만 A 자체를 나타내는 것이 아니라 A로 만들어진 인스턴스의 타입이다.
const aa: A = new A();
// A의 typeof를 하면 클래스 자체의 타입이다.
const aaa: typeof A = A;

class D {
  private a: string = '123';
  #b: number = 123;
}
// private는 타입 스크립트 #은 자바 스크립트의 private
// private를 더 권장하는데 protected, public과 구별 할 수 있기 때문이다.
// 다만 타입스크립트의 은 실제 코드에서는 다 public으로 바뀐다.




export {}