class A {
    a = '123';
    b = 123;
}
class B {
    a;
    b;
    constructor() {
        // 이 부분 생략하면 초기화, 할당되지 않았단 에러가 떠서 위처럼 써주는 거다.
        this.a = '123';
        this.b = 123;
    }
}
class C {
    a;
    b;
    constructor(a, b = 123) {
        // 기본값이 있다면 ? 안써줘도 된다.
        this.a = a;
        this.b = b;
    }
}
// 클래스 자체로 타입이 된다. 하지만 A 자체를 나타내는 것이 아니라 A로 만들어진 인스턴스의 타입이다.
const aa = new A();
// A의 typeof를 하면 클래스 자체의 타입이다.
const aaa = A;
class D {
    a = '123';
    #b = 123;
}
class Y {
    // 클래스는 인터페이스를 구현 가능하다.
    x = '123';
    y = '456';
    a = 123; // private는 해당 클래스 안에서만 사용 가능.
    b = 456; // protected는 해당 클래스를 상속 받은 클래스까지 사용 가능.
    c = 789; // 사실 public은 안써도..
}
// 추상에 의존하고 구현에 의존하지 말라.
// 인터페이스를 꼭 만들어란 말이지만 자바스크립트에서는.. 어차피 사라지는건데 그냥 클래스에 private protected readonly 다 써진다.
// 자바스크립트에 남았으면 하면 class, 객체 지향 원칙을 좀 더 잘 지키고 싶다 하면 interface
// class도 추상 클래스가 가능하다.
class N {
    a = 123;
    method2() {
        // 그냥 메서드도 가능.
    }
}
// 클래스를 모양만 만들어 놨다.
class M extends N {
    // 실제 구현은 여기서.
    method() {
        // abstract로 돼 있으면 상속 받았을 때 반드시 구현해줘야한다.
        console.log(this.a);
    }
}
export {};
