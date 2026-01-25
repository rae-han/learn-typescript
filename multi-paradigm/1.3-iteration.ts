function naturals(end = Infinity): Iterator<number> {
  let n = 0;

  return {
    next(): IteratorResult<number> {
      return n <= end ? { done: false, value: n+,} : {done: true, value: undefined};
    }
  }
}

const iter = naturals(3);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());