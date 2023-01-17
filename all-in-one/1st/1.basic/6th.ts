// # 타입 가드, 타입 좁히기
// function numOrStr(param: number | string) {
//   param.toFixed(1); // 맨 아래 에러만 보면 된다.
// }
// 위 코드에서 as를 써도 되지만 as는 unknown을 쓸때나, 남이 만든 타입이 틀렸을때만 사용하는 것이 좋다.
// 그때 쓰는게 타입 가드.

// function numOrStr(param: number | string) {
//   if (typeof param === 'string') {
//     param.split(',');
//   } else { // 이거 대신 typeof param === 'number' 를 사용해도 된다.
//     param.toFixed(1);
//   }
  // 다만 여기에 boolean에 대한 코드를 사용한다면 never가 뜨게 된다.
  // 왜냐면 로직상 booleanㅇㄹ 가능성이 없으니..
// }

// function numOrNumArr(param: number | number[]) { // 배열도 구분 가능하다.
//   if (Array.isArray(param)) {
//     param.slice(1);
//   } else {
//     param.toFixed(1);
//   }
// }
// 타입 스크립트에서는 인터섹션 & 보다 | 가 맣이 나온다.

// class Dog {
//   woof() {}
// }
// class Cat {
//   meow() {}
// }
//
// function dogOrCat(param: Dog | Cat) { // 여기에서 param은 인스턴스 값이다.
//   if(param instanceof Dog) { // param이 Dog의 인스턴스라는 것이 보장.
//   } else {
//   }
// }

// dogOrCat(Dog); // Error - TS2345: Argument of type 'typeof Dog' is not assignable to parameter of type 'Dog | Cat'.
// dogOrCat(new Dog());
// dogOrCat(new Cat());

// // if 문에 대해서도 타입을 정확하게 판단해준다.
// type Dog = { type: 'dog', woof: string };
// type Cat = { type: 'cat', meow: string };
// type Cow = { type: 'cow', moo: string };
// // type Cow = { type: 'cat', moo: string };
//
// // type Animal = Dog | Cat | Cow;
// // function typeCheck(animal: Animal) {
// function typeCheck(animal: Dog | Cat | Cow) {
//   if (animal.type === 'dog') {
//     animal.woof;
//   } else if (animal.type === 'cat') {
//     animal.meow;
//   } else {
//     animal.moo; // 여기서 Cat, Cow type 프로퍼티가 cat으로 같다면 타입스크립트에서 타입을 판단하기 모호하므로 animal의 타입은 never가 되고 윗 줄의 animal은 CAT | COW 타입이 된다.
//   }
// }
// // 객체를 구분하는 방법은 값으로 구분하는 방법(type 프로퍼티의 값인 dog, cat, cow)과 속성으로 구분하는 방법(woof, meow, moo)이 있다.
// // 보통은 값으로 구별하는 방법을 많이 쓴다.
// function typeCheck(animal: Dog | Cat | Cow) {
//   if ('woof' in animal) {
//     animal.woof;
//   } else if ('meow' in animal) {
//     animal.meow;
//   } else {
//     animal.moo;
//   }
// }
//
// // // 위와 같은 이유로 객체를 선언할때 라벨(type)을 붙여두는게 좋다.
// const human = { type: 'human' /* ... */ };
// const dog = { type: 'dog' /* ... */ };
// const cat = { type: 'cat' /* ... */ };
// // or
// interface Cat { meow: number }
// interface Dog { bow: number }