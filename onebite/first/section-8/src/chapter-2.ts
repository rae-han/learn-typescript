interface Person {
  name: string;
  age: number;
}

function getPropertyKey1<T>(obj: T, key: keyof T) {
  return obj[key];
}
function getPropertyKey2<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const person = { name: 'John', age: 30 };
const name1 = getPropertyKey1(person, 'name');
const age1 = getPropertyKey1(person, 'age');
const name2 = getPropertyKey2(person, 'name');
const age2 = getPropertyKey2(person, 'age');
console.log({ name1, age1, name2, age2 });
