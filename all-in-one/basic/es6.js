class Person {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    console.log(`Hi. ${this.name}!`)
  }
}

console.log(new Person('raehan').greeting());