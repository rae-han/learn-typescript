const arr = [1, 2, 3]

const items = Object.entries(arr);

for (const [key, value] of items) {
  console.log(typeof key, typeof value); // string number
  // items[key]
}

const keys = Object.keys(arr); // type string[]

for (const key in arr) {
  const value = arr[key];
  // string을 number에 할당할 수 없는데 동작한다??
  // 배열을 순회하는 코드 스타일에 대한 실용적 허용이다.
}

export {}

