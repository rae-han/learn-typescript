class Department {
    name;
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log('Department: ' + this.name);
    }
}
const accounting = new Department('Accounting');
accounting.describe();
const accountingCopy = { name: 'dummy', describe: accounting.describe };
accountingCopy.describe();
class Person1 {
    name;
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name);
    }
}
class Person2 {
    name;
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name);
    }
}
const person1 = new Person1('Raehan');
const person2 = new Person2('Max');
person1.printName();
person2.printName();
class Person {
    name;
    static instance;
    constructor(name) {
        this.name = name;
    }
    static getInstance(name) {
        if (Person.instance) {
            return this.instance;
        }
        if (!name) {
            throw new Error('No name provided');
        }
        this.instance = new Person(name);
        return this.instance;
    }
    printName() {
        console.log(this.name);
    }
}
const personA = Person.getInstance('Raehan');
const personB = Person.getInstance();
console.log('personA is personB: ', personA === personB);
export {};
