// # 변수와 인터페이스
// interface Todo {
//   id: number,
//   content: string,
//   done: boolean,
// }
//
// const todo: Todo = { id: 1, content: 'learn typescript', done: false }
// // 인터페이스 Todo를 정의한 뒤 변수 todo의 타입으로 Todo 인터페이스를 선언했다.
// // 변수 todo는 Todo 인터페이스를 준수해야 한다.


// interface Todo {
//   id: number,
//   content: string,
//   done: boolean,
// }
//
// let todos: Todo[] = [];
//
// function addTodo(todo: Todo) {
//   todos = todos.concat(todo);
// }
//
// addTodo({ id: 1, content: 'learn typescript', done: false });
//
// console.log(todos) // [ { id: 1, content: 'learn typescript', done: false } ]


// # 함수와 인터페이스
// interface SquareArea {
//   (num: number): number;
// }
//
// const squareArea: SquareArea = (num) => num*num;
//
// console.log(squareArea(10)); // 100


// # 클래스와 인터페이스
// interface IPerson {
//   name: string,
//   age: number,
//   introduce(): void;
// }
//
// class Person implements IPerson {
//   // name: string;
//   // age: number;
//   //
//   // constructor(name, age) {
//   //   this.name = name;
//   //   this.age = age;
//   // }
//   // or
//   constructor (
//     public name: string,
//     public age: number
//   ) { }
//
//   introduce() {
//     console.log(`My name is ${this.name}`);
//   }
// }
//
// const me = new Person('raehan', 30);
// console.log(me); // Person { name: 'raehan', age: 30 }
// me.introduce(); // My name is raehan
//
// function introduce(person: IPerson): void {
//   person.introduce();
// }
//
// introduce(me); // My name is

// # 덕 타이핑
interface IDuck { // - 1
  quack(): void;
}

class MallardDuck implements IDuck { // - 1
  quack() {
    console.log('Quack!');
  }
}

class MandarinDuck { // - 2
  quack() {
    console.log('q~uack!');
  }
}

function makeNoise(duck: IDuck): void { // - 3
  duck.quack();
}

makeNoise(new MallardDuck()); // Quack! - 4
makeNoise(new MandarinDuck()); // q~uack! - 4