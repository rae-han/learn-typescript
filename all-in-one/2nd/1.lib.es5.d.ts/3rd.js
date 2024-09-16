const nums = [1, 2, 3, 4];
const string = ['a', 'b', 'c', 'd'];
const mix = [1, 'b', 3, 'd', 5];
const result1 = nums.map((item) => item + 1);
const result2 = nums.map((item) => item.toString());
const result3 = nums.map((item) => item % 2 === 0);
const result4 = nums.filter1((item) => item > 2);
const result5 = nums.filter1((item) => item % 2 === 0);
const reuslt6 = mix.filter1((item) => typeof item === 'string');
// const reuslt7 = mix.filter2((item): item is string => typeof item === 'string')
const reuslt8 = mix.filter3((item) => typeof item === 'string');
const reuslt9 = mix.filter3((item) => typeof item === 'number');
const predicate = (item) => typeof item === 'number'; // 빼면 가독성이 그나마 나아지지만.. 타입스크립트를 쓰면 가독성이 안좋아지긴한다.
const result10 = mix.filter3(predicate);
export {};
