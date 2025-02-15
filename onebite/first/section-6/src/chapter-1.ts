class Employee {
  name;
  age = 0;
  position = '';

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log('일함');
  }
}
