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


1차

첫 번째 문제
[start_i, end_i] 로 시작 점과 끝 점이 있는 시퀀스의 배열이 들어올 때, 겹치는 부분이 있다면 합쳐서 출력해주기.

ex.1
input: [[1, 2], [3, 5], [6, 9], [2, 4]]
output: [[1, 5], [6, 9]];

ex.2
input: [[0, 0], [2, 4], [1, 9]]
output [[0, 0], [1, 9]]

저 같은 경우 input 값을 sort해주고(5log2) 누산기(reduce 함수)를 이용하여 차례대로 넣어주는데 누산기에 들어있는 마지막 값 범위 안에 새로 들어 갈 값의 시작 점이 속해 있다면 합쳐주는 방식(그리드)로 풀었습니다.

두 번째 문제
카드 값들이 주어질 때, 같은 값을 시작과 끝점으로 하는 길이가 가장 짧은 값들을 출력하는 문제

ex.1
input: [1, 1, 3, 2, 4, 3, 5, 1, 2]
output: [3, 2, 4, 3] (113243511, 3243, 243512 중 3-3이 길이가 4로 가장 짧음)

ex.2
input: [1, 3, 5, 7]
output: -1

저 같은 경우 input 같을 키로 가지는 객체를 만들어서 해당 키 안에 해당 카드 번호의 인덱스를 기록(그래프)했습니다.
```javascript
{
  '1': [0, 1, 7],
    ...
  '3': [2, 5],
}
```
그 후 객체를 이터레이터 프로토콜을 사용해 entries 해주며 반복 하여 0번째 값과 맨 마지막 값의 차이가 가장 작은 키를 저장하고 있다가 리턴해줬습니다.

2차

첫 번째 문제
1, 2, 3이라는 색이 있고 그 색을 중복되게 가지는 배열(colors)이 있고, 특정 인덱스로부터 찾으려는 색을 가진 배열들이 담긴 배열(queries)이 있을 때 그 색까지의 최소 거리를 구하는 문제.

input: 
colors: [1, 2, 3, 2, 2, 1, 3, 1]
queries: [[1, 2], [3, 2], [5, 1]]

output:
[2, 1, 2]

저는 colors를 이용하여 각각 색의 최소 값이 담긴 그래프를 그려줬습니다.
[
    { 1: 5, 2: 1, 3: 2 },
    { 1: 1, 2: 2, 3: 1 }, ...
]
그려주는 방법은 전체를 Infinity 값으로 초기화 하고,
2중 반복을 통해서 0번째 인덱스에서 123 까지의 거리를 구합니다. 그 과정에서 방문한(visited) 색은 다시 찾지 않습니다.
위의 거리를 구하는 과정에서 찾은 색에 있는 값(123까지의 거리)와 지금 색(0번째 인덱스에 있는 색)까지의 거리가 찾은 색에 있는 값보다 작다면 바꿔줍니다.
이미 지나간 노드의 거리는이미 최소 값 이므로 이중 반복문에서 안쪽 반복문은 시작점을 현재 인덱스로 계속 하나씩 올려줍니다.
그리고 queries에 있는 값으로 검색을 하는게 아닌 이미 저장돼 있는 최소 값을 거리를 바로바로 리턴해줬습니다.
시간 복잡도는 상수 값을 무시하면 c^2가 되고 공간 복잡도는 컬러 갯수 * c가 됩니다.

두 번째 문제
위 문제에서 c의 배열 길이는 비슷한데, 색의 갯수(1, 2, 3)이 엄청 많아진다면 어떻게 할 것인가?
시간 복잡도는 단순의 c의 길이에만 의존하고, 공간 복잡도는 컬러 갯수 * c가 되므로 메모리 문제가 생길수 있겠다 라고 답변했습니다.
면접관이 그러면 구현을 어떻게 바꿀 것인가 라고 해서 저 같은 경우에는
1차의 두 번째 문제처럼 각 컬러를 키로 하는 인덱스 배열을 만든 후 queries에는 인데스 값과 색 값이 있기 때문에 해당 색의 배열만 검색하여 인덱스 괎고 컬러 키에 있는 인덱스 배열의 값 중 차이가 가장 작은 값을 리턴하게 했습니다.
면접 중에는 구현을 다 못했는데 마지막에 궁금한거 있냐고 할때 방법이 맞냐고 하니 접근 방법은 맞았다고 답변 들었습니다.










유니온블루 넣입 셔츠 23SS신상으로 출시 예정입니다. 2월 예상입니다.
인스펙터 25mm 기본 벨트























