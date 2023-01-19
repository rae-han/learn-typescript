interface Arr<T> {
  forEach(callback: (item: T) => void): void;
}

const nums: Arr<number> = [1, 2, 3, 4];
const string: Arr<string> = ['a', 'b', 'c', 'd'];

nums.forEach((item) => {
  console.log(item)
  item.toFixed(1)
});

nums.forEach((item) => {
  console.log(item);
  return '3';
})

string.forEach((item) => {
  console.log(item)
  item.charAt(3)
});

string.forEach((item) => {
  console.log(item);
  return '3';
})

// interface Arr1<T> {
//   forEachTest(callback: (aaa: T) => void): void;
// }
//
// const test: Arr1<string> = ['hello', 'world'];
// console.log(
//   'test',
//   test.forEachTest((item) => console.log('item', item))
// );

/**
 * https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%98%AC%EC%9D%B8%EC%9B%90-1/unit/122327?category=questionDetail&q=664606&tab=community
 *
 *
 *
 * 이 글 보고 질문드립니다.
 *
 * interface myArray<T> {
 *   myForEach(callback: (v: T) => void): void;
 * }
 *
 * const a: myArray<number> = [1, 2, 3] as myArray<number>; // 에러 발생
 * a.myForEach((v) => console.log(v));
 *
 *
 * 이렇게만 작성할 경우, Property 'myForEach' is missing in type 'number[]' but required in type 'myArray<number>' 에러가 발생합니다.
 *
 *
 *
 * a의 타입을 myArray<number>로 지정했음에도 Array<number>를 참고하는 이유가 뭔가요?
 *
 *
 *
 * Array<number>를 참고하기 때문에 밑의 댓글에 interface myArray<T> extends Array<T> 로 적으셨던 건가요?
 *
 *
 *
 * 강의에서 forEach 메서드가 에러가 안났던 이유는 Array<T>에 이미 forEach 메서드가 있었기 때문인가요?
 *
 * 답변 1
 *
 * 조현영
 *
 * 2023.01.01 오후 11:48
 *
 * const a의 타입이 myArray<number>이지 [1, 2, 3]이 myArray<number>가 아니라서 그렇습니다.
 *
 * myArray extends Array를 하면 Array가 myArray의 부분집합이 되므로 as로 전환이 가능해집니다.
 *
 * forEach가 있는 경우는 myArray가 Array의 부분집합이 되므로 as로 전환이 가능해집니다.
 *
 *
 * 좋아요(1)
 * 답글 작성
 * 바스니카
 *
 * 2023.01.02 오전 12:07
 *
 * 자바스크립트의 extends와 다른건가요?
 *
 * myArray > Array라는 말씀이시죠?
 *
 * extends를 안 썼는데 Arr와 Array 관계를 어떻게 알 수 있나요? tsc가 암묵적으로 관계를 만드나요?
 *
 *
 * 좋아요
 * 조현영
 *
 * 2023.01.02 오전 12:40
 *
 * 타입스크립트의 인터페이스인지라 extends는 js와 비교가 좀 어려울 것 같습니다.
 *
 * { forEach } 는 { forEach, fill, map, every, ...} (배열)의 부분집합입니다.
 *
 *
 * 좋아요(1)
 * 바스니카
 *
 * 2023.01.02 오전 1:19
 *
 * 답변 감사합니다.
 *
 * 3에 대해 마지막으로 추가 질문드립니다.
 *
 * interface myArray<T> {
 *   forEach(callback: (v: T) => void): void;
 * }
 *
 * const a: myArray<number> = [1, 2, 3];
 * a.forEach((v) => console.log(v));
 * 위와 같이 작성하면 에러가 안나는데,
 *
 * 아래와 같이 작성하면 에러가 납니다.
 *
 * interface myArray<T> extends Array<T>{
 *   forEach(callback: (v: T) => void): void;
 * }
 *
 * const a: myArray<number> = [1, 2, 3];
 * a.forEach((v) => console.log(v));
 *
 *
 * 첫 번째 경우는 Array를 생략한 거고, 두 번째 경우는 Array를 적어준 건데 에러가 나는 이유가 궁금합니다.
 *
 * 에러의 내용은 아래와 같습니다.
 *
 * Interface 'myArray<T>' incorrectly extends interface 'T[]'.
 *   Types of property 'forEach' are incompatible.
 *     Type '(callback: (v: T) => void) => void' is not assignable to type '(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any) => void'.
 *       Types of parameters 'callback' and 'callbackfn' are incompatible.ts(2430)
 *
 * 좋아요
 * 조현영
 *
 * 2023.01.02 오전 1:34
 *
 * 에러메시지에 나온대로 매개변수 타입을 똑같이 만들어보세요
 */

export {}