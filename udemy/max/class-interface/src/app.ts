class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }
}

const accounting = new Department('Accounting');

accounting.describe();

const accountingCopy = { name: 'dummy', describe: accounting.describe };

accountingCopy.describe();

class Person1 {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  printName(this: Person1) {
    console.log(this.name);
  }
}

class Person2 {
  constructor(private name: string) {}

  printName(this: Person2) {
    console.log(this.name);
  }
}

const person1 = new Person1('Raehan');
const person2 = new Person2('Max');

person1.printName();
person2.printName();

class Person {
  private static instance: Person;

  private constructor(private name: string) {}

  static getInstance(name?: string) {
    if (Person.instance) {
      return this.instance;
    }

    if (!name) {
      throw new Error('No name provided');
    }

    this.instance = new Person(name);
    return this.instance;
  }

  printName(this: Person) {
    console.log(this.name);
  }
}

const personA = Person.getInstance('Raehan');
const personB = Person.getInstance();
console.log('personA is personB: ', personA === personB);
