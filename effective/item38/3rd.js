function processBar(b) { }
function f1() {
    const x = expressionReturningFoo();
    // @ts-ignore
    processBar(x);
    return x;
}
export {};
