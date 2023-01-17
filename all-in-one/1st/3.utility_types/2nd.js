"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function zip(x, y, z) {
    return { x, y, z };
}
// 위 아래 모두 <T extends abstract new (...args: any) => any> 로 앞의 모양이 같고
// 매개변수나 인스턴스 자리에 infer를 넣는 순간 그 자리가 추론이 되는 것이다.
// 타입 스크립트의 추론 능력을 믿고
class ConstructorClass {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
const inst = new ConstructorClass('abc', 123, true);
// I's type ConstructorClass
// 여기서 추가로 알아가면 좋은게 클래스는 타입으로 바로 사용할 수 있다.
// 실제로 위 기준으로 ConstructorClass란 타입이 있는 것이다.
const i = new ConstructorClass('abc', 123, false);
// 하지만 위에서 : ConstructorClass 부분은 실제로 클래스가 아니라 인스턴스이다.
// 즉 new 붙여서 실제 객체로 만들어진 것의 타입으로 사용 가능하다는 것이다.
// 생성자 타입 가져올 땐 typeof [ClassName]을 해야한다.
// 그래서 위에 ConstructorParameters, InstanceType 의 제네릭 매개변수에 typeof 를 붙인것이다.
// 즉 T가 생성자(constructor)인걸 알려주는 것이 abstract new (...args: any) => any 이다.
// Uppercase, Lowercase, Capitalize 이런 것들은 구현 방법이 안나와 있다.
// 타입스크립트로 구현할 수 없어서 내부적으로 처리만 해둔 듯?
const introduction = 'Hello world';
// @ts-ignore
const upperIntroduction; // 타입 이름을 대문자로 만들어버린다.
// this의 타입을 내부적으로 어떻게해서 가져온다.
