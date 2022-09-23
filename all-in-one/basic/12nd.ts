interface Parents {
  readonly a: string;
  private b: string;
}

class Children implements Parents {
  a: string = 'abc';
  b: string = '123';
}

// interface A {
//   readonly a: string;
//   b: string;
// }
//
// class B implements A {
//   // private a: string ;
//   // protected b: string;
//   private a: string = 'abc';
//   protected b: string = 'xyz';
//   public c: string = 'abcxyz';
//
//   method() {
//     console.log(this.a); // private 속성은 클래스 B 내부에서만 사용해야 한다.
//   }
// }
// 클래스는 인터페이스를 구현할 수 있다.
// js로 컴파일 했을때 interface는 사라진다.
// 클래스의 모양을 인터페이스로 통제 가능하다.

// private, protected
// public은 그냥 안써도 된다. 어차피.. 안쓰면 public
// private 속성은 클래스 B 내부에서만 사용해야 한다.

class C extends B {
  method() {
    // console.log(this.a);
    console.log(this.b);
  }
}

// new C().a; // private 속성은 클래스 B 내부에서만 사용해야 한다.
// new C().b;
// protected는 안에서는 사용 가능한데 밖(인스턴스)에서는 사용 불가능
// private와의 차이는 상속 됐을때 사용할수 있냐가 구별된다.
// protected는 상속 받은 클래스 까지는 사용 가능하다.
new C().c;

// 즉 퍼블릭은 클래스 내부, 상속 클래스, 인스턴스 모두에서 사용 가능하고
// 프로텍티드는 클래스 내부와 상속 클래스까지
// 프라이빗은 클래스 내부에서만 사용 가능하다.

// 셋다 주의할 점은 JS로 컴파일 되면 전부다 사라진다.

// 또한 interface 임플리먼츠를 안써도 리드온리 프라이빗 같은거 다 붙일수 있다.
// 객체지향 원칙 중에서 추상에 의존하고 구현에 의존하지 말라는 조항이 있다.
// 인터페이스가 추상이고 클래스가 구현이기 때문에 객체 지향 원칙을 중시한다면..

// 클래스는 자체로 타입이라서 유용하다.
// 또한 ts만 있는 interface와 달리 class는 js 변환 후에도 남아있다.

// 클래스도 추상 클래스가 가능하다.
abstract class D {}
// 클래스를 모양만 만드어 두고 extends로 상속 받아 구현한다.

// 참고로 추상 클래스도 구현된 메서드를 작성할 수 있다.
// 다만 abstract가 붙은 구현 안된 메서드는 반드시 하위 클래스에서 구현해 줘야 한다.