function func<T>(value: T) {
  return value;
}

let num = func(1);
let str = func('1');
let bool = func(true);

function funcParam<const T>(value: T) {
  return value;
}

let numTuple = funcParam([1, 2, 3]);
