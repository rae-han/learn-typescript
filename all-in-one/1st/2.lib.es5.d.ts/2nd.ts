export {}

// # 타입 만들기

// ## forEach
// array 타입을 Arr 타입으로 바꿔서 하나하나 구현해보자.
// interface Arr {
//   // forEach(callback: () => void): void;
//   // 콜백 함수의 인자를 적어준다.
//   // forEach(callback: (item: number) => void): void;
//   // 변수를 number 나 string 으로 지정해주면 a, b 둘중 하나는 에러가 난다.
//   // 참고는 에러는 아래부터 보면 좋고 정확하지 않다 생각들면 윗줄로 하나씩 옮겨가며 읽는다.
//   // forEach(callback: (item: string | number) => void): void;
//   // 이때 에러는 안나지만 만약 함수에 a에서 toFixed(1), b에서  charAt(3) 같은 메서드를 사용하면 에러가 난다.
//   forEach<T>(callback: (item: T) => void): void;
//   // Arr<T>를 하는 방법도 있고 forEach<T>를 하는 방법이 있다.
//   // 하지만 이렇게 하면 item이 unknown이 된다.
//   // 왜냐면 타입 스크립트가 제네릭 자리를 제대로 추론해주지 못해서 그렇다.
//   // 아래 코드에서 forEach뒤에 <타입>을 명시하면 된다.
//   // 11. 하지만 자연스럽게 타입이 추론돼야 좋다.
// }
// 11. 이렇게 수정한다.
interface Arr<T> {
  forEach(callback: (item: T) => void): void;
}

// const a: Arr = [1, 2, 3];
const a: Arr<number> = [1, 2, 3]; // 11.
a.forEach((item) => {
  console.log(item)
  item.toFixed(1)
})
a.forEach((item) => {
  console.log(item)
  return '3'
})

// const b: Arr< = ['a', 'b', 'c'];
const b: Arr<string> = ['a', 'b', 'c']; // 11.
b.forEach((item) => {
  console.log(item)
  item.charAt(3)
})
b.forEach((item) => {
  console.log(item)
  return '3'
})