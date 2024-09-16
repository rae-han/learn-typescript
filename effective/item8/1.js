try {
    const nv = [];
}
catch (e) {
}
const _PI = 3.14;
console.log(typeof _PI);
// function func() {
//   return { x: 1, y: 2 };
// }
//
// type T = ReturnType<typeof func>
const colors = {
    red: 'ff0000',
    green: '00ff00',
    blue: '0000ff',
};
function func(num, str) {
    return num.toString();
}
console.log(typeof func); // function
// console.log(TFunc); // error TS2693: 'TFunc' only refers to a type, but is being used as a value here.
const arrowFunc = (num, str) => str;
class MyClass {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const obj = {
    name: 'raehan',
    age: 30,
};
const myInstance1 = new MyClass('abc', 123);
const myInstance2 = new MyClass('abc', 123);
const myClass = MyClass;
console.log(myClass); // [class MyClass]
function email({ person, subject }) {
}
export {};
