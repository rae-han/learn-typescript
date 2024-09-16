// interface Foo { foo: string; }
// interface Bar { bar: string; }
// declare function expressionReturningFoo(): Foo;
// function processBar(b: Bar) { /* ... */ }
//
// function f() {
//   const x = expressionReturningFoo();
//   processBar(x); // Argument of type 'Foo' is not assignable to parameter of type 'Bar'.   Property 'bar' is missing in type 'Foo' but required in type 'Bar'.  1st.ts(2, 17): 'bar' is declared here.
// }
function processBar(b) { }
const foobar = {
    foo: 'a',
};
function f1() {
    const x = expressionReturningFoo(); // Don't do this
    processBar(x);
}
function f2() {
    const x = expressionReturningFoo();
    processBar(x); // Prefer this
}
export {};
