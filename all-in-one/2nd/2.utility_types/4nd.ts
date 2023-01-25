const p1 = Promise.resolve(1).then((a) => a+1).then((a) => a+1).then((a) => a.toString());
const p2 = Promise.resolve(2);
const p3 = new Promise((res, rej) => {
  setTimeout(res, 1000)
})

Promise.all([p1, p2, p3]).then((result) => {
  const [r1, r2, r3] = result;
})
// all은 es5.d.ts가 아니라 es2015.promise.d.ts에 적혀 있다.
// es2015.iterator .d.ts
