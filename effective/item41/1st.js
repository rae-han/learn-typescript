function range(start, limit) {
    const out = []; // any[]
    for (let i = start; i < limit; i++) {
        out.push(i); // any[]
    }
    return out; // type is number[]
}
const result = []; // any[]
result.push('a');
result; // string[]
result.push(1);
result; // (string|number)[]
// let val; // any
// if (Math.random() < 0.5) {
//   val = /hello/;
//   val; // RegExp
// } else {
//   val = 123;
//   val; // number
// }
// val; // number | RegExp
let val = null; // any
try {
    val = 123;
    val;
}
catch (e) {
    console.warn('alas!');
}
val; // number | null
export {};
