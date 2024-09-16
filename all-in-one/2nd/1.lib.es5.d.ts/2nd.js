const nums = [1, 2, 3, 4];
const string = ['a', 'b', 'c', 'd'];
nums.forEach((item) => {
    console.log(item);
    item.toFixed(1);
});
nums.forEach((item) => {
    console.log(item);
    return '3';
});
string.forEach((item) => {
    console.log(item);
    item.charAt(3);
});
string.forEach((item) => {
    console.log(item);
    return '3';
});
export {};
