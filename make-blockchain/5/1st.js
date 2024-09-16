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
class User {
    firstName;
    lastName;
    nickname;
    constructor(firstName, lastName, 
    // 이렇게 해주면 js처럼 블록문 안에서 this.firstName = firstName 을 해줄 필요가 없다.
    nickname) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
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
class Dict {
    // constructor(private x: string) {
    // } // 이렇게 안해도 된다.
    words;
    // 초기화르 ㄹ안시켜줬기에 에러가 나는데 생상자의 매개변수로 초기화 시켜줄 생각이 아니므로 아래와 같이 초기화 하자
    constructor() {
        this.words = {}; // 수동 초기화
    }
    add(word) {
        // 클래스를 타입 처럼 사용 가능.
        // 클래스 자체가 아니라 그 클래스로 생성된 인스턴스가 통과 된다.
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term) {
        return this.words[term];
    }
    // ## 3 이건 ts 문법이 아니라 js 문법
    static hello() {
        return 'hello';
    }
}
class Word {
    term;
    def;
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
}
// TODO: 추상 클래스
const kimchi = new Word('kimchi', '김치');
console.log(kimchi);
const dict = new Dict();
dict.add(kimchi);
console.log(dict.def('kimchi'));
export {};
