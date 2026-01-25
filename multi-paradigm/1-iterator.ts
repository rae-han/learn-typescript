interface IteratorYieldResult<T> {
  done: false;
  value: T;
}

interface IteratorReturnResult {
  done: true;
  value: undefined;
}

interface Iterator<T> {
  next(): IteratorYieldResult<T> | IteratorReturnResult;
}

function* generator() {
  let count = 0;
  while (true) {
    if (count % 3 === 0) {
      console.log(count);
    }

    yield count++;
  }
}

const iter = generator();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

function* generator2() {
  let count = 0;
  yield* [count++, count++, count++];
}

const iter2 = generator2();

console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
