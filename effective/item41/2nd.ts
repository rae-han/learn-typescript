// function range(start: number, limit: number) {
//   const out = []; // Variable 'out' implicitly has type 'any[]' in some locations where its type cannot be determined.
//   if (start === limit) {
//     return out; // Variable 'out' implicitly has an 'any[]' type
//   }
//   for (let i = start; i < limit; i++) {
//     out.push(i);
//   }
//   return out;
// }

function range(start: number, limit: number) {
  const out = []; // Type is any[]
  for (let i = start; i < limit; i++) {
    out.push(i); // Type of out is any[]
  }
  return out; // Type is number[]
}
// function _makeSquares(start: number, limit: number) {
//   const out = [];
//   // Variable 'out' implicitly has type 'any[]' in some locations
//   range(start, limit).forEach((i) => {
//     out.push(i * i);
//   });
//   return out;
//   // Variable 'out' implicitly has an 'any[]' type
// }

const makeSquares = (start: number, limit: number) => range(start, limit).map((i) => i * i);
console.log(makeSquares(3, 5)); // [9, 16]

export default {};
