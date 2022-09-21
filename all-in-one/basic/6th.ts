// # 타입 가드, 타입 좁히기
// function numOrStr(param: number | string) {
//   param.toFixed(1); // 맨 아래 에러만 보면 된다.
// }
// 위 코드에서 as를 써도 되지만 as는 unknown을 쓸때나, 남이 만든 타입이 틀렸을때만 사용하는 것이 좋다.
// 그때 쓰는게 타입 가드.

function numOrStr(param: number | string) {
  if (typeof param === 'string') {
    param.split(',');
  } else { // 이거 대신 typeof param === 'number' 를 사용해도 된다.
    param.toFixed(1);
  }
  // 다만 여기에 boolean에 대한 코드를 사용한다면 never가 뜨게 된다.
  // 왜냐면 로직상 booleanㅇㄹ 가능성이 없으니..
}

function numOrNumArr(a: number | number[]) { // 배열도 구분 가능하다.
  if (Array.isArray(a)) {
    a.slice(1);
  } else {
    a.toFixed(1);
  }
}
// 타입 스크립트에서는 인터섹션 & 보다 | 가 맣이 나온다.

class A {
  aaa() {}
}
class B {
  bbb() {}
}
// class는 그 자체로 타입이 될 수 있다.
function aOrB(param: A | B) { // 다만 여기 들어오는 param은 인스턴스를 의미한다.
  if(param instanceof A) { // param이 A라는 것이 보장된다.

  } else {

  }
}
// param은 instance를 의미하기에 아래 코드는 안된다.
// aOrB(A); // error
aOrB(new A());
aOrB(new B());

// if 문에 대해서도 타입을 정확하게 판단해준다.
type TB = { type: 'b', bbb: string };
type TC = { type: 'c', ccc: string };
type TD = { type: 'd', ddd: string };
// type TD = { type: 'c', ddd: string };
// type TA = TB | TC | TD;
// function typeCheck(a: TA) {
// function typeCheck(a: TB | TC | TD) {
//   if (a.type === 'b') {
//     a.bbb;
//   } else if (a.type === 'c') {
//     a.ccc;
//   } else {
//     a.ddd; // 여기서 TC, TD의 type 프로퍼티가 c로 같다면 뭔지 판단하기 힘드므로 a의 타입은 never가 뜬다.
//   }
// }
// 객체를 구분하는 방법은 값으로 구분하는 방법(type 프로퍼티의 값인 b, c, d)와 속성으로 구분하는 방법(bbb, ccc, ddd)가 있다.
// 보통은 값으로 구별하는 방법을 많이 쓴다.
function typeCheck(a: TB | TC | TD) {
  if ('bbb' in a) {
    a.bbb;
  } else if ('ccc' in a) {
    a.ccc;
  } else {
    a.ddd; // 여기서 TC, TD의 type 프로퍼티가 c로 같다면 뭔지 판단하기 힘드므로 a의 타입은 never가 뜬다.
  }
}

// // 위와 같은 이유로 객체를 선언할때 라벨(type)을 붙여두는게 좋다.
// const human = { type: 'human' /* ... */ };
// const dog = { type: 'dog' /* ... */ };
// const cat = { type: 'cat' /* ... */ };
// // or
// interface Cat { meow: number }
// interface Dog { bow: number }