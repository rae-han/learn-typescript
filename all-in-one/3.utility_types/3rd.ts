export {}

const p1 = Promise.resolve(1).then((a) => a + 1).then((a) => a + 1).then((a) => a.toString());
// 프로미스는 Promise<결괏값> 타입으로 표시한다.
// 바로 성공하는 프로미스로 1을 리졸브 한 다음 바로 옆에 댄이 붙어있는데 덴이 3개 연소 깅ㅆ다.
// Promise.all에 넣으면 전부다 실행해서 리턴한다.
const p2 = Promise.resolve(2);
const p3 = new Promise((res, rej) => {
  setTimeout(res, 1000)
});

Promise.all([p1, p2, p3]).then((result) => {
  console.log(result); // ['3', 2, undefined]
  // result의 타입이 string, number, unknown으로 정확하게 추론됐다.
  // 어떻게 최종적인 타입을 알아낼수 있었을까? toString을 빼면 number로 추론된다.
});

// all의 구현을 보면 아래와 같다. // 왜 all을 클릭하면 iterator의 all이 찍히지? // es2015.promise.d.ts 를 볼 것
// all<T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }>;
// 키와 벨류를 따로 때서 생각해보자.
// 키 분석 -readonly [P in keyof T]
// T는 [p1, p2, p3] keyof T 는 0 | 1 | 2 | length

const arr1 = [1, 2, 3];
type Arr1 = keyof typeof arr1;
// "length" | "toString" | "toLocaleString" | "pop" | "push" | "concat" | "join" | "reverse" | "shift" | "slice" | "sort" | ...
// or keyof number[]

const arr2 = [1, 2, 3] as const;
type Arr2 = keyof typeof arr2;
// keyof readonly [1, 2, 3]

const key2: Arr2 = '2'; // 아마 keyof T = '0' | '1' | '2' | 'Leongth' 일 것으로 추정된다.

// p1, p2, p3은 readonly라 수정할 순 없는데 -readonly가 있기 때문에 키는 수정 가능하다.

// 벨류 분석
// Awaited<T[P]>
// 맵드 타입스로 만들어도 벨류 역시 배열
// 어웨이트에서 무슨 마법을 부렸길래 최종적으로 p1을 string으로 바꿨지?
// Awaited 의 제네릭에는 T[P]가 들어가므로 배열의 값들 즉 p1, p2, p3인 프로미스가 들어간다.
// 다 듣긴 했는데 한번 더 듣자..
// Awaited 안에 Awaited가 또 있다. 즉 재귀해서 타입을 구한다.

// const p1 = Promise.resolve(1).then((a) => a + 1).then((a) => a + 1).then((a) => a.toString()); 를 한번 더 보면
// Promise.resolve(1) => Promise<Number>
// then

// p3가 unknown인 이유는 resolve 할때 벨류를 안넣어줫기 때문에 res는 () => { res() } 와 같다.

// 이런거 만들때 컨디셔널 타입과 infer가 중요
// Infer가 추론 하는 것일수도 있지만 어떻게 보면 새로운 타입 변수를 만들어내는 셈이다.

// 프로미스에도 댄이 있고 같은 객체에도댄이 있다? 덕 타이핑, 노션 참고
// then이 있는 객체 thenable 도 promise라고 인정해준다.


