// # 복습
// 인터 페이스는 프로퍼티와 메소드가 강제되게 하지만 자바스크립트 파일에 남지 않는다.
// 추상 클래스는 비슷한 기능을 하지만 자바스크립트 파일에 남는다. 즉 파일이 커지고 추가 클래스가 남는다.
// 그러므로 추상 클래스를 다른 클래스들이 특정 모양을 따르도록 하기 위한 용도로 쓴다면
// 같은 역할을 하는인터페이스를 쓰는게 더 나은 방법이 될 수 있다.

// ## 타입과 인터페이스 비교
// 객체 기준 결국 타입과 인터페이스는 타입스크립트에게 오브젝트의 모양과 타입을 알려주는 것으로 변수 입장(뒤에 붙은 타입)만 보고는 구별 하지 못한다.

// 하지만 둘의 이용해서 할수 있는 것 허용 된 것은 다르다.
type PlayerA = {
  name: string;
};
// - 차이점 1 상속 받는 방법
type PlayerAA = PlayerA & { lastName: string };
const playerA: PlayerA = {
  name: 'han',
};
const playerAA: PlayerAA = {
  name: 'han',
  lastName: 'j',
};

interface PlayerB {
  name: string;
}
interface PlayerBB extends PlayerB {
  lastName: string;
}
const playerB: PlayerB = {
  name: 'han',
};
const playerBB: PlayerBB = {
  name: 'han',
  lastName: 'j',
};
// - 차이점 2, 인터페이스는 프로퍼티 병합이 가능

// 인터페이스, 타입 모두 추상 클래스를 대체해서 쓸수 있다.

type UserA = {
  firstName: string;
};
interface UserB {
  lastName: string;
}
class User implements UserA, UserB {
  constructor(public firstName: string, public lastName: string) {}
}

// ## 주로 타입스크립트 커뮤니티에서는 클래스나 오프젝트를 정의할 때는 인터페이스를 그 외에는 타입 앨리어스를 쓰는 것을 권장한다.

// 타입스크립트를 생성해주는 큰 프로젝트 같은 경우 인터페이스를 제공할 텐데
// 이유는 인터페이스를 상속시키는 방법이 좀더 직관적이라 그런거 같다.

// 공식 문서의 타입 앨리어스와 인터페이스 비교
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

export {};
