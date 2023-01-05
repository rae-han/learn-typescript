// interface Array<T> {
//   length: number,
//   [n: number]: T;
// }
// const arr: Array<string> = ['a', 'b', 'c'];
var arr = [1, 2, 3];
var a1 = arr[1];
var a2 = arr['2'];
function get(array, k) {
    return array[k];
    // TS7015: Element implicitly has an 'any' type because index expression is not of type 'number'.
}
