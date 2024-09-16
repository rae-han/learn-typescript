const obj = {
    foo: {
        bar: 123
    }
};
obj.foo.bar = 890;
console.log(obj.foo.bar);
const x = { foo: { bar: 'abc' } };
x.foo.bar = 'xyz';
console.log(x.foo.bar);
export {};
