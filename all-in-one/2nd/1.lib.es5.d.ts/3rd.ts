interface Arr<T> {
  forEach(callback: (item: T) => void): void;
  map<S>(callback: (value: T) => S): S[];
}

const nums: Arr<number> = [1, 2, 3, 4];
const string: Arr<string> = ['a', 'b', 'c', 'd'];

const result1 = nums.map((item) => item + 1)
const result2 = nums.map((item) => item.toString())
const result3 = nums.map((item) => item % 2 === 0)


export {}