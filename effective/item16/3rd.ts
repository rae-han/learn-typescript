function checkAccess<T>(al: ArrayLike<T>, i: number) {
  if (i < al.length) {
    return al[i]
  }

  throw new Error(`배열의 끝을 지나 ${i}를 접근하려 했습니다.`);
}

const tupleLike: ArrayLike<string> = {
  '0': 'A',
  '1': 'B',
  length: 2,
};

console.log(tupleLike[1]); // 'B'
