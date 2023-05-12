export {}

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
    protected nickname: string
  ) { }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

  abstract getNickName(): void;
}

class Player extends User{
  getNickName() {
    console.log(this.nickname)
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

