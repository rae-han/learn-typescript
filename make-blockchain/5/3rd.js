// # 복습
// 인터 페이스는 프로퍼티와 메소드가 강제되게 하지만 자바스크립트 파일에 남지 않는다.
// 추상 클래스는 비슷한 기능을 하지만 자바스크립트 파일에 남는다. 즉 파일이 커지고 추가 클래스가 남는다.
// 그러므로 추상 클래스를 다른 클래스들이 특정 모양을 따르도록 하기 위한 용도로 쓴다면
// 같은 역할을 하는인터페이스를 쓰는게 더 나은 방법이 될 수 있다.
const playerA = {
    name: 'han',
};
const playerAA = {
    name: 'han',
    lastName: 'j',
};
const playerB = {
    name: 'han',
};
const playerBB = {
    name: 'han',
    lastName: 'j',
};
class User {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
export {};
