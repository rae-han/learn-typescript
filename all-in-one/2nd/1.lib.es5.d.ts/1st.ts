const array: number[] = [1, 2, 3]
array.forEach((value: number) => {})
// command + 마우스 좌클릭
array.map((value: number) => value)
array.filter((value) => value)

interface Array<T> {
  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void; // Array<T>에서 타입이 정해진다.
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];

  // 같은 함수가 여러가지 방법으로 사용될 경우 타입이 여러개 선언돼 있을 수 있다.
  filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
  filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[]; // unknown 있는 것보단 타입이 정확한게 보통은 더 낫다.
  // 위 예제를 기준으로 return 값이 number 이므로 위에 것일 것이다.
}

// 참고로 타입 앨리어스와 클래스도 제네릭 붙일 수 있다.
type T<T> = {}
class C<T> {}

function func<T>(x: T): T { return x }
func(123)
func<number>(123) // 타입 파라미터를 넣어주면 T의 값을 지정해줄 수 있다. 참고로 앞에 붙으면 as이다 위치 조심하자.

const filtered1 = ['1', 2, '3', 4, '5'].filter((value) => typeof value === 'string');
// filtered는 자바스크립트에서 string 값만 남을 것인데 왜 (string | number)가 되지?
// 위 첫번째 filter 기준으로 T가 stirng | number S는 (string | number)가 되므로 마지막 리턴 값이 (stirng | number)[] 가 되버린다.
// 두번째 기준으로도..
// 두번째 기준은 리턴 값이 T로 고정이 돼 있지만 첫번째 타입은 S로 바뀔 가능성이 있기 때문에 저걸 이용해야한다.
// S extends T(=string | number)면 S가 string | number, string, number 3가지가 되기 때문이다.
// predicate를 빼서 똑같이 만들어 준 후 S를 지정해보자.
const predicate = (value: string | number): value is string => typeof value === 'string'
const filtered2 = ['1', 2, '3', 4, '5'].filter(predicate);

// const filtered3 = ['1', 2].filter<string extends string | number>((value) => typeof value === 'string');
// 이게 안되는 이유는 아마도 커스텀 타입가드라 아니여서.
// predicate 함수가 형식 조건자여야한다.

const filtered4 = ['1', 2].filter<string>(predicate);
// 이건 된다.

export {}