// interface는 2번 선언하면 선언한 타입들이 합쳐지지만 type alias는 에러가 난다.
// interface A { name: string }
// interface A { age: number }
// const person: A = { name: 'raehan', age: 33 }

// # 객체 리터럴에서는 잉여 속성 검사를 한다.
interface A { a: number }
const aa: A = { a: 1, b: 2 }

function a(): void {

}

const b = a();
// a에 리턴 값이 없으면 b위에 마우스를 올렸을때 void 타입이 뜬다.
// 이때 a 함수 리턴 값에 :void를 표기해주고 return 값을 만들면 에러가 뜬다.
// undefined는 되고 null은 안된다.
// 보통 return; 을 하는 함수에서 뜬다.

interface Human {
  talk: () => void
}
const human: Human = {
  talk() { return 'abc' } // 잉 근데 이거 왜 되지?
}

// void의 3가지 종류
// 함수 리턴 값
function void1(): void {
  return;
}
// 메서드로 선언할 때
interface VoidObject {
  void2: () => void
}
const instVoidObject: VoidObject = {
  void2() { return 'return' }
}
// 매개변수
function voidFunc(callback: () => void) {

}
voidFunc(() => {
  return 'return';
})
// 함수 리턴 값의 void는 리턴 값이 없다는 의미
// 나머지 2개는 리턴 값을 사용하지 않겠다는 의미

// 실전
// declare function forEach(arr: number[], callback: (el: number) => undefined): void;
declare function forEach(arr: number[], callback: (el: number) => void): void;
// function forEach() { // 구현부로 구현하기 귀찮을때 위 코드처럼 declare를 사용해주면 된다. 위 방법으로 일단 타입만 만들어 둘 수 있다.
//
// }
let target: number[] = [];
forEach([1,2,3], el => target.push(el));
// push 는 리턴값이 number인데 타입 정의는 undefined라 에러가 난다.
// 근데 undefined대신 void를 사용해도 에러가 안난다??
// 매개변수로 쓰이는 void는 실제 리턴 값이 무엇이든 상관하지 않겠다는 의미.
// void인지 아닌지에 따라서 표현에 차이가 난다.
// 아래 코드는 둘다 정상적인 코드이지만 콜백 함수의 정의에 void를 사용하지 않고 undefined를 쓸 경우 각기 다른 에러가 난다.
forEach([1,2,3], el => { target.push(el) });
forEach([1,2,3], el => target.push(el));

interface VoidTest {
  test: () => void;
}
const voidTest: VoidTest = {
  test() { return '3' }
}
// const b = voidTest.test(); // 실제로 타입 스크립트는 void 리턴을 사용 안하는 걸로 인식하여 return '3'부분을 신경 쓰지 않기(무시하기) 때문에 에러가 뜬다.

