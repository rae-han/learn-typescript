var Person = /** @class */ (function () {
    function Person() {
        Person.population++;
    }
    Person.population = 0;
    return Person;
}());
var _a = [new Person(), new Person()], man = _a[0], woman = _a[1];
console.log(Person.population);
