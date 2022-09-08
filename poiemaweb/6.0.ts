// # Type vs Interface
interface IPerson {
  name: string,
  age?: number,
}

type TPerson = {
  name: string,
  age?: number,
}

const man = {} as IPerson; // 빈 객체를 IPerson 타입으로 지정
const woman = {} as TPerson; // 빈 객체를 TPerson 타입으로 지정

man.name = 'King';
man.age = 20;
// man.gender = 'male'; // TS2339: Property 'gender' does not exist on type 'IPerson'.

woman.name = 'Queen';
woman.age = 21;
// woman.gender = 'female'; // TS2339: Property 'gender' does not exist on type 'TPerson'.