// const a: string = 'hello';
// const b: String = 'hell';
// // string과 String의 타입은 다르다.
//
// type World = "world";
// const c: World = 'world'; // control + space를 하면 자동 완선 추천해준다.
// const d = `hello ${c}`;
//
// type Greeting = `hello ${World}`; // 이렇게도 가능하다. 타입이 hello world도 hello hell도 될수 있다.

// let arr1: string[] = [];
// let arr2: Array<string> = [];
// function rest(a: string, ...args: string[]) {
//   console.log(a, args)
// }
// rest('1', '2', '3');
//
// const tuple: [string, number] = ['1', 1];
// tuple[2] = 'hello';
// tuple.push('hello'); // 타입 스크립트가 이것 까진 못막아준다.

const enum EDirection {
  Up = 3, // 원래 0부터 시작해서 차례대로 0, 1, 2, 3을 부여받지만 이렇게 시작 값을 정해주면 3, 4, 5, 6 이 된다.
  Down,
  Left,
  Right,
}
// = 로 문자열도 되고 숫자 순서 상관 없이 마구잡으로 지정도 가능하다.

const aa = EDirection.Up;
const ab = EDirection.Down;
// 여러개의 변수를 하나의 그룹으로 묶고 싶을 때 enum으로 묶어주긴 한다.

// 객체와 이넘의 차이는 이넘은 자바스크립트로 갈때 사라지고 객체는 안사라지고 남는다.
// const ODirection: {   Up: 0, Down: 1, Left: 2, Right: 3, } = { // 타입을 number가 아닌 정확하게 0123 으로 하려면 왼쪽과 같이 해줘야 하는데 아래와 같은 방법도 있다.
//   Up: 0,
//   Down: 1,
//   Left: 2,
//   Right: 3,
// };

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const; // 위 값, 속성을 상수로 쓰겠다 readonly도 붙는다.

// Using the enum as a parameter
function walk(dir: EDirection) {} // dir은 EDirection중에 하나가 와야한다는 뜻.

// It requires an extra line to pull out the keys
type Direction = typeof ODirection[keyof typeof ODirection]; // 객체를 이넘과 같이 사용하려면 이것과 같이 해주면 된다.
function run(dir: Direction) {}

walk(EDirection.Left);
run(ODirection.Right);

// 잠깐 keyof는?
const obj3 = { a: 1, b: 2, c: 3 };
// 위 객체에서 key만 가져오고 싶으면? keyof
// type Key = keyof obj3; // obj3은 값인데 타입으로 사용하려니 안된다?
type Key = keyof typeof obj3; // 값을 타입으로 사용하고 싶다면 typeof
// 뽑아낸 타입을 Key라는 타입으로 만든다.
// 즉 자바스크립트 값인 obj3은 타입으로 쓸수 없어서
// 타입으로 쓰기 위해 typeof을 붙여주고
// keyof로 abc를 뽑아내고
// Key라는 타입으로 만들었다.

const obj4 = { a: 1, b: 2, c: 3 } as const;

// type Key2 = typeof obj3[keyof typeof obj4];
type Key2 = typeof obj4[keyof typeof obj4];
// as const를 사용하는 이유는 널널하게 타입을 뽑아내기 때문(number)
// 타입이 123이 안되고 number number number가 된다.
// 위 코드는 벨류들의 값을 타입으로 가져오고 싶다는 뜻.