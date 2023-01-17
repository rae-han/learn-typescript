// readonly

interface A {
  readonly a: string;
  b: string;
}

const a: A = { a: '1', b: '2' };
// a.a = '123'; // 속성 실수로 바꾸는걸 막아준다.

type S1 = {
  a: string,
  b: string,
  c: string,
} // 이렇게 100개쯤 있으면 너무 많다.
// 이때 사용하는 것이 인덱스드 시그니처

type S2 = {
  [key: string]: string // key는 문자열, 값도 문자열
}

type TB = 'Human' | 'Mammal' | 'Animal';
// 키가 이중에 하나였으면 좋겠다?
// 이때 쓰이는 것이 맵드 타입스, 키의 범위를 줄일 수 있다.
type TBB = { [key in TB]: number }
const b: TBB = {
  Human: 1,
  Mammal: 2,
  Animal: 3,
}

type TBBB = { [key in TB]: TB } // 이런 식도 된다.
const bb: TBBB = {
  Human: 'Human',
  Mammal: 'Mammal',
  Animal: 'Animal',
}

export {}