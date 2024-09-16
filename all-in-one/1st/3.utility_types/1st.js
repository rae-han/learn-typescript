const raehan = {
    name: 'raehan',
    age: 30,
    married: false
};
// const han: Profile = {
//   name: 'raehan',
//   age: 30,
//   // 만약 결혼 정보가 개인정보 보호로 입력 안해도 되는 상황이 온다면?
//   // married가 없어서 에러가 나고, 그렇다고 새로운 타입이나 인터페이스를 만들기엔..
//   // 이때 쓰이는게 utility types
// }
const partialHan = {
    name: 'raehan',
    age: 30,
};
// 1
// type Color = "White" | "Black";
// type P<T> = {
//   [Key in keyof T]: string
//   // 이렇게 하면 [Key in keyof T] 부분에 White 또는 Black이 온다.
// }
const pickHan = {
    name: 'raehan',
    age: 30,
};
// 여기서 keyof를 안붙이는 이유는 Animal에 Human을 빼는 것이라서 프로필은 객체라서.
const pickHan2 = {
    name: 'raehan',
    age: 30,
};
// const requiredHan: Required<Profile2> = { // 인터페이스 상으론 모두 옵셔널이지만 필수가 됐다.
const requiredHan = {
    name: 'raehan',
    age: 30,
    married: false
};
// const readonlyHan: Readonly<Profile> = {
const readonlyHan = {
    name: 'raehan',
    age: 30,
    married: false
};
const sample1 = { a: 1, b: 2, c: 3 };
// 샘플 코드를 만들때 위와 같이 할수도 있지만
const sample2 = { a: 1, b: 2, c: 3 };
export {};
// null 또는 undefined에 속하면 never 그게 아니면 그대로
