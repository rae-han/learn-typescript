var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greeting = function () {
        console.log("Hi. ".concat(this.name, "!"));
    };
    return Person;
}());
console.log(new Person('raehan').greeting());
