"use strict";
// // # is keyword
// // ## is keyword
// // ### is keyword
// interface Cat { meow: number }
// interface Dog { bow: number }
// // 리턴 값에 is를 사용할 수 있는데 타입 가드의 하나이다.
// // 타입을 구분해주는 커스텀 함수를 개발자가 직접 만들수 있다.
// // 지금까지는 자바스크립트 문법으로 a가 뭔지 찾아줬다.
// function catOrDog(animal: Cat | Dog): animal is Dog {
//   if ((animal as Cat).meow) { return false } // 타입 판별 하는건 개발자가 직접 해줘야한다.
//   return true;
// }
//
// //
// function pet(animal: Cat | Dog) {
//   if(catOrDog(animal)) { // 커스텀 한 타입 가드
//     console.log(animal.bow); // a 의 타입은 Dog
//   }
//   if('meow' in animal) {
//     console.log(animal.meow);
//   }
// }
//
// const cat: Cat | Dog = { meow: 3 }
// if (catOrDog(cat)) {
//   // 이 안에서 cat은 Cat & Dog가 된다. 하지만 실행될 일은 없다.
//   console.log(cat.meow);
// }
// if ('meow' in cat) {
//   console.log(cat.meow);
// }
//
// // 간단하면 굳이 사용하지 않아도 되고
// // 타입 판별이 복잡할 경우 is키워드를 사용하여 만들면 괜찮다.
