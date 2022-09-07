"use strict";
class Person {
    constructor() {
        Person.population++;
    }
}
Person.population = 0;
const [man, woman] = [new Person(), new Person()];
console.log(Person.population); // 2
