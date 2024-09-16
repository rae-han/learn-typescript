function a() {
    // return 값이 void로 나온다.
    // 리턴 값이 있으면 안된다.
    // 다만 undefined는 되고 null은 안된다.
    // return undefined;
    return;
    // return null;
}
const human = {
    talk() {
        return 'abc'; // 잉? 리턴 타입이 void인데 왜 되지?
    },
};
// function에서는 void를 두가지로 기억하자.
// 함수로 선언할때랑 메서드로 선언할때의 void가 약간 다르다.
// 하나 더 있다면 매개변수로 선언한 void도 있다.
// 즉 aa 함수의 리턴값, bb 매개변수가 void인 함수, cc 메소드의 리턴 값 으로 나뉜다.
function fn(callback) { }
fn(() => 'abc');
const c = {
    cc: () => {
        return 'a';
    },
};
// 구현부를 만들기 싫다면 declare를 사용하면 된다.
// 다만 자바스크립트로 변환할 때 사라진다.
let target = [];
forEach([1, 2, 3], (el) => target.push(el)); // push는 return 값이 number인데 타입 정의는 undefined로 해놔서 에러가 난다.
// 위 undefined 값을 number로 하면 에러가 안난다.
// 근데 void로 해도 에러가 안난다???
// 매개변수로 쓰이는 void는 실제 리턴값이 무엇이든 상관하지 않겠다는 의
// 아래 코드도 위와 같은 기능을 하는 정상적인 코드이다.
forEach([1, 2, 3], (el) => {
    target.push(el);
}); // push는 return 값이 number인데 타입 정의는 undefined로 해놔서 에러가 난다.
const cat = {
    meow() {
        return 'nyang';
    },
};
const what = cat.meow(); // 실제 리턴값 nyang이 무시되고 void가 된다.
// 자바스크립트상 nyang이 맞지만 타입스크립트는 무시되기 때문에 void가 된다.
// 원칙적으론 void로 하면 리턴값 쓰면 안된다.
// 타입스크립트에서 위 forEach 같은 경우 때문에 예외로 만들었기 때문.
// whit.toString();
const _what = cat.meow();
// as number로 못바꿔준다. 타입스크립트가 실수로 보기 때문
// 내가 책임 진다면 위처럼 가능..
// 또는 <>로 가능은한데 jsx랑 겹칠까봐..
_what.toString();
sample = 3;
export {};
