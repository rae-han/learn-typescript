// # 제네릭
// // 제네릭이 필요한 이유
// function add(x: string | number, y: string | number): string | number { return x + y };
// // 위 코드는 잘못된 코드.
// // 개발자가 원한건
// add(1, 2); // 3
// add('1', '2'); // 12
// add('1', 2); // 12
// add('1', '2'); // 12
// // 하지만 타입이 섞여서 들어오면 둘다 12가 나오고 실제로 의도하지 않은 로직이 된다.

// 함수를 string, number 나눠서 구현한다? 말이 안됨.

// // 바디를 없애면 되지 않나? 그런데 어차피 한번 더 구현해줘야한다.
// // 어차피 구현할 때원래 문제로 돌아간다.
// function add(x: string, y: string) : string;
// function add(x: number, y: number) : number;
// function add(x, y) {
//   return x + y;
// }
// add(1, 2); // 3
// add('1', '2'); // 12
// add('1', 2); // 12
// add(1, '2'); // 12

// 이 문제를 해결할수 있는 것이 제네릭
// 현재 지금 타입은 뭔지 모르겠지만 나중에 정하겠다 -> 타입을 변수처럼 정하겠다.
// 보통을 T를 많이 사용하는데 반드시 아니여도 된다.
// function add<T>(x: T, y: T): T { return x + y }
// add(1, 2); // 3
// add('1', '2'); // 12
// // add('1', 2); // TS2345: Argument of type '2' is not assignable to parameter of type '"1"'.
// // add(1, '2'); // TS2345: Argument of type '"2"' is not assignable to parameter of type '1'.

// // T가 어떤 타입이든 다 될수 있게하면 범위가 너무 넓어진다.
// add(true, false); // ?
// // TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
// // 이때 extends를 붙이면 T를 제한할 수도 있다.
// // 뒤에 명시된 타입의 부분집합만 가능해진다.
// // 예를 들면 number | string의 경우 number, string, number | string 까지 된다.
// function add<T extends number | string>(x: T, y: T): T { return x + y }
// // 만약 위 코드가 에러가 난다면 T가 먼지 몰라서 T+T가 뭘 의미하는지 모른다.

// 제네릭을 여러개 만들면서 각각 다른 제한을 둘 수도 있다.
// function add<T extends number, K extends string>(x: T, y: K): T { return x + y }

// 제한 방법
// // 첫번째는 바로 타입을 넣어버리는 것
// function func<T extends { a: number }>(x: T): T { return x }
// function func<T extends number[]>(x: T): T { return x }
// func([1, 2, 3]);

// // 함수 모양으로 제한을 둘 수도 있다.
// function func<T extends (num: string) => number>(x: T): T { return x }
// func((num) => +num)

// // 모든 함수
// // 이럴때는 any를 써도 된다? 제한을 거는 것이기 때문에.
// function func<T extends (...args: any) => any>(x: T): T { return x }
// // 위 처럼 제한이 없는 경우가 많지는 않다.

// // 생성자 타입
// // 클래스 자체를 넣고 싶다면 아래와 같이 // 클래스도 생성자이다.
// function func<T extends abstract new (...args: any) => any>(x: T): T { return x }

// // class A8 {} // A8 자체가 타입이다.
// class A8 {
//   constructor() {} // 이때 컨스트럭터 타입은? 그걸 add8 처럼
// }


