interface Arr<T> {
  forEach(callback: (item: T) => void): void;
  map<S>(callback: (value: T) => S): S[];
  filter1(callback: (item: T) => boolean): T[] // result 6이 string | number 가 됨.
  // filter2<S>(callback: (item: T) => item is S): S[] // item is S 에 에러가 뜨는 이유는 T와 S의 관계가 정립되있지 않은데 갑자기 T가 S가 됐기 때문이다.
  filter3<S extends T>(callback: (item: T) => item is S): S[]
}

const nums: Arr<number> = [1, 2, 3, 4] as unknown as Arr<number>;
const string: Arr<string> = ['a', 'b', 'c', 'd'] as unknown as Arr<string>;
const mix: Arr<number | string> = [1, 'b', 3, 'd', 5] as unknown as Arr<number | string>;

const result1 = nums.map((item) => item + 1)
const result2 = nums.map((item) => item.toString())
const result3 = nums.map((item) => item % 2 === 0)

const result4 = nums.filter1((item) => item > 2)
const result5 = nums.filter1((item) => item % 2 === 0)
const reuslt6 = mix.filter1((item) => typeof item === 'string')
// const reuslt7 = mix.filter2((item): item is string => typeof item === 'string')
const reuslt8 = mix.filter3((item): item is string => typeof item === 'string')
const reuslt9 = mix.filter3((item): item is number => typeof item === 'number')
const predicate = (item: string | number): item is number => typeof item === 'number'; // 빼면 가독성이 그나마 나아지지만.. 타입스크립트를 쓰면 가독성이 안좋아지긴한다.
const result10 = mix.filter3(predicate);


export {}