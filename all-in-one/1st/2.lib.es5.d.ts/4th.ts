export {}

// # 공변성과 반공변성
// - 함수 간에 대입이 되냐 안되냐

function toNumber(x: string): number {
  return +x;
}

toNumber('1') // 1

type TFromString = (x: string) => number | string;

const fromString: TFromString = toNumber;
// toNumber 함수보다 TFromString의 타입 범위가 더 넓으므로 대입 가능하다.

// 매개변수는?
function a(x: string | number): number {
  // 매개변수는 string, number를 하나로 보고~
  // 리턴 값과 반대라 생각하면 된다.
  return 0
}

type B = (x: string) => number;
let b: B = a;

// 매개 변수는 넓은 타입으로는 대입이 안된다.

// 위 내요을 설명하는 것이 공변성, 반공변성, 이변성
// 불변성 variance

function sub(x: string | number): number {
  return 0;
}

type Upper = (x: string) => number | string;

let up: Upper = sub;

