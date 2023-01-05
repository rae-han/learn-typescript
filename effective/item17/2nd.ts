const a: number[] = [1, 2, 3];
const b: readonly number[] = a;
// const c: number[] = b;
// TS4104: The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.

type x = string | number;
type y = number;
let n: x = 123;
let m: y = n;


export {}