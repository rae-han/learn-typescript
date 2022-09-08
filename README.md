# 5. 인터페이스

Typescript에서는 ES6에서 지원하지 않는 인터페이스 기능을 지원한다. 따라서 비슷한 역할을 할수 있는 추상 클래스와는 다르게 Javascript 변환시 코드 상으론 없어진다.

인터페이스는 일반적으로 타입 체크를 위해 사용되며 변수, 함수, 클래스에 사용 가능하다. 인터페이스는 여러가지 타입을 갖는 프로퍼티로 이루어진 새로운 타입을 정의하는 것과 유사하다. 인터페이스에 선언된 프로퍼티 또는 메소드의 구현을 강제하여 일관성을 유지할 수 있도록 하는 것이다.

인터페이스는 프로퍼티와 메소드를 가질 수 있다는 점에서 클래스와 유사하나 클래스와 달리 인스턴스를 생성할 수 없다.

비슷한 기능을 하는 추상 클래스와의 차이점은 인터페이스의 모든 메소드는 추상 메소드이고 추상 클래스의 추상 메소드와 달리 abstract를 사용할 필요가 없다.

# 1. 변수와 인터페이스

변수의 타입으로 인터페이스를 사용할 수 있다. 이때 인터페이스를 타입으로 선언한 변수는 해당 인터페이스를 준수하여야 한다. 이것은 새로운 타입을 정의하는 것과 유사하다.

```tsx
interface Todo {
  id: number,
  content: string,
  done: boolean,
}

const todo: Todo = { id: 1, content: 'learn typescript', done: false }
// 인터페이스 Todo를 정의한 뒤 변수 todo의 타입으로 Todo 인터페이스를 선언했다.
// 변수 todo는 Todo 인터페이스를 준수해야 한다.
```

인터페이스를 사용하여 함수 매개변수(파라미터) 타입을 선언할 수 있다.  함수에 인수(아규먼트)를 전달할 때, 함수 매개변수 타입으로 지정한 인터페이스를 준수하는 값을 전달하여야 한다.

함수에 객체를 전달할 때 복잡한 매개변수 체크가 필요 없어서 유용하다.

```tsx
interface Todo {
  id: number,
  content: string,
  done: boolean,
}

let todos: Todo[] = [];

function addTodo(todo: Todo) {
  todos = todos.concat(todo);
}

addTodo({ id: 1, content: 'learn typescript', done: false });

console.log(todos) // [ { id: 1, content: 'learn typescript', done: false } ]
```

# 2. 함수와 인터페이스

함수의 타입으로 인터페이스를 사용할 수 있다. 이때 함수 타입으로 정의된 인터페이스인 함수 인터페이스는 타입이 선언된 파라미터 리스트와, 리턴 타입을 정의해야 한다.

함수 인터페이스를 구현하는 함수는 인터페이스를 준수하여야 한다.

```tsx
interface SquareArea {
  (num: number): number;
}

const squareArea: SquareArea = (num) => num*num;
// const squareArea: SquareArea = (num: number) => num*num;

console.log(squareArea(10)); // 100
```

# 3. 클래스와 인터페이스

클래스 선언문의 `implements` 키워드 뒤에 인터페이스가 정의돼 있다면, 해당 클래스는 정의된 인터페이스를 반드시 구현하여야 한다. 이는 인터페이스를 구현하는 클래스의 일관성을 유지할 수 있는 장점을 갖는다.

인터페이스와 클래스는 프로퍼티와 메소드를 가질 수 있다는 점에서 유사하나, 인터페이스는 직접 인스턴스를 생성할 수는 없다.

```tsx
interface IPerson {
  name: string,
  age: number,
}

class Person implements IPerson {
  // name: string;
  // age: number;
  //
  // constructor(name, age) {
  //   this.name = name;
  //   this.age = age;
  // }
  // or
  constructor (
    public name: string,
    public age: number
  ) { }
}

const me = new Person('raehan', 30);
console.log(me); // Person { name: 'raehan', age: 30 }
```

인터페이스는 프로퍼티뿐 아니라 메소드도 포함할 수 있다. 단, 모든 메소드는 추상 메소드여야 한다. 인터페이스를 구현하는 클래스는 인터페이스에서 정의한 프로퍼티와 추성 메소드를 반드시 구현해야 한다.

```tsx
interface IPerson {
  name: string,
  age: number,
  introduce(): void;
}

class Person implements IPerson {
  constructor (
    public name: string,
    public age: number
  ) { }

  introduce() {
    console.log(`My name is ${this.name}`);
  }
}

const me = new Person('raehan', 30);
me.introduce(); // My name is raehan

function introduce(person: IPerson): void {
  person.introduce();
}

introduce(me); // My name is raehan
```

# 4. 덕 타이핑 (Duck typing)

Typescript의 인터페이스에서 주의해야 할 것은 타입 체크에서 중요한 것은 값을 실제로 가지고 있는 것이다. 인터페이스를 구현하였다는 것만이 타입 체크를 통과하는 유일한 방법은 아니다.

```tsx
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
```

1. 위 코드에서 MallarDuck 클래스는 인터페이스 IDuck을 구현한 클래스로, IDuck에서 정의돼 있는 quack 메서드를 구현하였다.
2. 반면 MandarinDuck 클래스는 인터페이스 IDuck을 구현하진 않지만 quack 메서드를 갖는다.
3. makeNoise 함수는 인터페이스 IDuck을 구현한 클래스의 인스턴스를 인자를 받아 duck이란 이름의 매개변수를 갖는다.
4. 이때 makeNoise 함수는 IDuck 인터페이스를 구현한 MallardDuck 클래스의 인스턴스 뿐 아니라, IDuck을 구현하지 않은 MandarinDuck 클래스의 인스턴스를 인자로 전달하여도 에러 없이 처리된다.

Typescript는 해당 인터페이스에서 정의한 프로퍼티나 메소드를 가지고 있다면 그 인터페이스를 구현한 것으로 인정한다. 이것을 덕 타이핑(duck typing) 또는 구조적 타이핑(structural typing)이라 한다.

인터페이스를 변수에 사용할 경우에도 덕 타이핑은 적용된다.

```tsx
interface IDuck {
  name: string
}

function quack(duck: IDuck): void {
  console.log(`${duck.name} quack!! quack!!!!`);
}

const myDuck = { name: 'mandarin', age: 10 };
quack(myDuck); // mandarin quack!! quack!!!!
```

변수 myDuck은 인터페이스 IDuck과 일치하지 않지만 IDuck의 name 프로퍼티를 가지고 있으면 인터페이스에 부합하는 것으로 인정된다.

인터페이스는 개발 단계에서 도움을 주기 위해 제공되는 기능이로 자바스크립트 표준이 아니다. 따라서 위 예제의 TypeScript 파일을 자바스크립트 파일로 트랜스파일링하면 아래와 같이 인터페이스는 없어진다.

```tsx
function quack(duck) {
  console.log("".concat(duck.name, " quack!! quack!!!!"));
}
var myDuck = { name: 'mandarin', age: 10 };
quack(myDuck);
```

# 5. 선택적 프로퍼티

# 6. 인터페이스 상속

\

