export {};

// // # 1
// // ts도 객체 지향을 구현하기 좋다
// // 코드를 더 안전하게 만들고 도와주는 기능을 제공한다.
//
// // 클래스 만드는 법
// // 이건 객체지향 수업이 아니다.
// class Player {
//   constructor(
//     private firstName: string,
//     private lastName: string,
//     // 이렇게 해주면 js처럼 블록문 안에서 this.firstName = firstName 을 해줄 필요가 없다.
//     public nickname: string
//   ) {
//   }
// }
//
// const han = new Player('han', 'j', 'hanrae');
//
// // han.firstName // 실제 js로 컴파일 되면 정상 작동 한다.
// console.log(han.nickname)

// 추상 클래스
// 다른 클래스가 상속 받을 수 있는 클래스
// 하지만 직접 새로운 인스턴스를 만들수는 없다.
abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    // 이렇게 해주면 js처럼 블록문 안에서 this.firstName = firstName 을 해줄 필요가 없다.
    protected nickname: string,
  ) {}

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  abstract getNickName(): void;
}

class Player extends User {
  getNickName() {
    console.log(this.nickname);
  }
}

const han = new Player('han', 'j', 'hanrae');
// console.log(han.nickname)

// get FulName
console.log(han.getFullName()); // method에 private를 붙이면 에러 난다.
// 참소로 abstract는 ts만 있기 때문에 js에서는 없어진다.
// getFullName의 추상 클래스의 메소드
// 추상 메소드를 만드려면 메소드를 클래스 안에서 구현하지 않으면 된다.

// 메소드는 클래스 안에서 존재하는 함수
// getFullName의 return 부분이 구현(implementation) 이다.

// 추상 클래스 안에서는 추상 메소드를 만들 수 있는데
// 대신 메소드를 구현하면 안돼고 대신 메소드의 call signature만 적어놔야 한다. -> getNickNAme

// User 추상 클래스는 getNickName을 가지고 void를 리턴한다는 것을 라려줘야 한다.

// 이때 상속 받는 클래스에 추상 메서드를 구현하지 않으면 에러가 난다.
// 하지만 private인 값을 자식 클래스에서 접근 할 수 없다. protect 사용.

// ㅈㅓㅇ리
// ts의 특별한 기능들은 js에서 보이지 않는다.
// 추상 클래스는 직접적으로 인스턴스는 못만들지만 상속은 가능하다.
// 추상 클래스, 추상 메서드, 접근 제한자

// # 2

type Words = {
  [key: string]: string;
};

class Dict {
  // constructor(private x: string) {
  // } // 이렇게 안해도 된다.
  private words: Words;
  // 초기화르 ㄹ안시켜줬기에 에러가 나는데 생상자의 매개변수로 초기화 시켜줄 생각이 아니므로 아래와 같이 초기화 하자
  constructor() {
    this.words = {}; // 수동 초기화
  }

  add(word: Word) {
    // 클래스를 타입 처럼 사용 가능.
    // 클래스 자체가 아니라 그 클래스로 생성된 인스턴스가 통과 된다.
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  def(term: string) {
    return this.words[term];
  }

  // ## 3 이건 ts 문법이 아니라 js 문법
  static hello() {
    return 'hello';
  }

  // TODO: 삭제 업데이트
}

class Word {
  constructor(public readonly term: string, public readonly def: string) {}
  // ## 3
  // term, def 는 Dict에서 접근 가능해야 하기 때문에 public으로 선언해줬다.
  // 하지만 누가 수정 가능한데..???
  // readonly를 붙인다. js에서는 안보인다.
  // TODO: 정의 추가 수정 출력
}
// TODO: 추상 클래스

const kimchi = new Word('kimchi', '김치');
console.log(kimchi);

const dict = new Dict();

dict.add(kimchi);
console.log(dict.def('kimchi'));

// # 3 interface -1

type Team = 'red' | 'blue' | 'yellow';

type Player2 = {
  name: string;
  team: Team;
};

interface Player3 {
  name: string;
  team: Team;
}

// team에는 3가지 값만 들어올수 있다.

// - type 키워드가 활용할 방법이 더 많다.?

// interface는 오브젝트의 모양을 타입스크립트에게 설명해 주기 위해서만 사용 되는 키워드.

// - 아래 둘은 같다.
type TPerson = {
  name: string;
};

interface IPerson {
  name: string;
}

// 하지만 interface를 다루는게 class를 다루는 느낌이라 좀 더 쉽게 느껴진다.
interface User2 {
  name: string;
}

interface Player4 extends User2 {}

type User3 = { name: string };
type Player5 = User3 & {};

// 니꼬 말로는 인터페이스 더 나은거 같다.
// 왜냐면 인터페이스는 타입스크립트에게 오브젝트의 모양을 설명할 때만 사용할 수 있다.

// type은 종류에 관계 없이 어떤 타입을 만들때 다 사용할수 있다.

// - 인터페이스는 property 축적도 가능하다.
interface User {
  name: string;
}
interface User {
  gender: string;
}
