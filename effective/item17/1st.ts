// function arraySum(arr: number[]) {
//   let sum = 0, num;
//   while ((num = arr.pop()) !== undefined) {
//     sum += num;
//   }
//   return sum;
// }
function arraySum(arr: readonly number[]) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

function printTriangles(n: number) {
  const nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(i);
    console.log(arraySum(nums));
  }
}



printTriangles(5); // 0 1 2 3 4