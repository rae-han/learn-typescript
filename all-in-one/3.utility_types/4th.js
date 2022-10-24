"use strict";
exports.__esModule = true;
var obj = { name: 'reahan' };
function print() {
    console.log(this.name);
}
var printName = print.bind(obj);
printName();
// ...args 는 this를 제외한 나머지 매개변수를 가져온다.
