// const a: Arr = [1, 2, 3];
const a = [1, 2, 3]; // 11.
a.forEach((item) => {
    console.log(item);
    item.toFixed(1);
});
a.forEach((item) => {
    console.log(item);
    return '3';
});
// const b: Arr< = ['a', 'b', 'c'];
const b = ['a', 'b', 'c']; // 11.
b.forEach((item) => {
    console.log(item);
    item.charAt(3);
});
b.forEach((item) => {
    console.log(item);
    return '3';
});
export {};
