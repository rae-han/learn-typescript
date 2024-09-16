// # 결국 type alias, interface 둘 다 객체의 모양을 알려주기 위해 있다.
// 상속 하는 방법이라던가 몇개의 다른 동작이 있으므로 필요에 따라 잘 쓰자.
// 복습
class User {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class Player extends User {
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name) {
        return `Hello ${name}. My name is ${this.fullName()}`;
    }
}
class Player2 {
    firstName;
    lastName;
    health;
    // - 2 자바스크립트에는 없는 implements로 상속 그리고 구현
    // - 3
    // 다 구현해도 Player2의 에러가 사라지지 않는 이유는??
    // 인터페이스를 상속할 때 property를 private로 만들지 못한다.
    // Player는 firstName 프로퍼티를 private로 상속했지만 User 인터페이스에는 접근 제한자에 관한 내용이 없다.
    // public으로 바꿔주자.
    constructor(firstName, lastName, health) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.health = health;
    }
    // - 4 여기서 Human 인터페이스와 두개를 동시에 상속 받는 것은 매우 중요한 개념
    // 어뎁터 패턴과 같은 디자인 패턴을 사용하여 팀과 함께 일할 때
    // 인터페이스를 만들어두고 팀원이 원하는 각자의 방식으로 클래스를 상속하도록 한다.
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name) {
        return `Hello ${name}. My name is ${this.fullName()}`;
    }
}
// 인터페이스를 통해 상속하는 문제점
// private, protected 사용 못함
// 추상 클래스에서는 constructor가 이부분을 해주도록 해줌.
// # 다른 점
function makeUser1(user) { }
makeUser1({
    firstName: 'f',
    lastName: 'l',
    sayHi(name) {
        return 'name';
    },
    // sayHi: (name) => 'name',
    fullName: () => 'name',
});
// 인터페이스를 인자에 사용해 오브젝트의 모양을 지정해 줄 수도 있다.
// 너무 당연한 이야기지만 타입, 인터페이스 둘 다 인자, 결과 값의 타입이 될수 있단 말이다.
function makeUser2(user) {
    // return {
    //   firstName: 'f',
    //   lastName: 'l',
    //   sayHi: (name) => 'name',
    //   fullName: () => 'name',
    // };
    // 클래스는 이게 안된다. 무조건 인스턴스를 리턴해야 한다.
    return new Player('f', 'l');
}
// makeUser2({
//   firstName: 'f',
//   lastName: 'l',
//   sayHi: (name) => 'name',
//   fullName: () => 'name',
// });
makeUser2(new Player('a', 'b'));
export {};
