function processBar(b) { }
function f1() {
    const x = expressionReturningFoo();
    processBar(x);
    return x;
}
const x = {
    foo: 'a',
    bar: 'b',
};
function g() {
    const foo = f1(); // Type is any
    foo.fooMethod(); // This call is unchecked!
}
export {};
