// class A {
//   a: string;
//   b: number;
//
//   constructor() {
//     this.a = '123';
//     this.b = 123;
//   }
//
//   method() { }
// }
// // 위와 아래는 같은 코드. 위 코드에 더 익숙해야한다.
// class A {
//   a: string = '123';
//   b: number = 123;
//
//   method() { }
// }

// constructor 를 사용하는 이유
// class A {
//   a: string;
//   b: number;
//
//   // constructor(a: string = 'abc', b?: number) { // 가능
//   constructor(a: string = 'abc', b: number = 123) {
//     this.a = '123';
//     this.b = 123;
//   }
//
//   method() { }
// }
//
// const a: A = new A('가나다'); // 기본값 매개변수가 있으면 인자를 안넣어줘도 된다.
//
// type AA = A;
// // // 클래스 이름은 그 자체로 타입이 될 수 있다.
// // // 다만 저 A는 클래스를 가리키는게 아니라 new A(); 를 가리키고 있다.
// // // 그렇기 때문에 위 a 변수 코드에 클래스를 넣는게 아니라 new A()한 인스턴트를 넣는 것이다.
// // // 즉 이름 그 자체는 클래스의 인스턴스를 가리키고 있는 것이다.
// // // 클래스 자체를 가리키는 것은?
// typeof A;
// const bb: typeof A = A;
//
