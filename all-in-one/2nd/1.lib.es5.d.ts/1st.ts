const array: number[] = [1, 2, 3]
array.forEach((value: number) => {})
// command + 마우스 좌클릭
array.map((value: number) => value)
array.filter((value) => value)

interface Array<T> {
  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void; // Array<T>에서 타입이 정해진다.
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
  filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
}

// 참고로 타입 앨리어스와 클래스도 제네릭 붙일 수 있다.
type T<T> = {}
class C<T> {}

function func<T>(x: T): T { return x }
func(123)
func<number>(123) // 타입 파라미터를 넣어주면 T의 값을 지정해줄 수 있다. 참고로 앞에 붙으면 as이다 위치 조심하자.

export {}