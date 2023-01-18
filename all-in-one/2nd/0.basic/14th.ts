// function add1(x: string | number, y: string | number): string | number { return x + y };
// // 타입스크립트는 모든 경우의 수를 다 생각하기ㅏ 때문에 위는 오류가 있는 코드이다.
//
// add1(1, 2); // 3
// add1('1', '2'); // 12
//
// add1('1', 2); // 12
// add1(1, '2'); // 12

// 위 문제를 해결하려면?
// 1 함수를 두번 선언해본다.

// function add2(x: string, y: string): string { return x + y };
// function add2(x: number, y: number): number { return x + y };
// 같은 함수 두개 있는건 말이 안된다...

// 2 바디를 없애면??
// function add3(x: string, y: string): string;
// function add3(x: number, y: number): number;
// 하지만 결국 구현을 해줘야 하기 때문에 다시 원래 문제로 돌아간다.
// function add3(x: string | number, y: string | number): string | number { return x + y };

// 3 그래서 나온게 generic
// 타입을 변수처럼 만드는 것.
// function add4<T>(x: T, y: T): T {
//   return x + y;
// }
// 만들때의 타입은 모르지만 사용 시 타입이 정해진다.
// 하지만 T를 string과 number로 제한하고 싶다면??

// extends를 사용
// function add5<T extends string | number>(x: T, y: T): T {
//   return x + y;
// }

// 참고로 extends를 이런식으로도 사용 가능하다.
// function add6<T extends string, K extends number>(x: T, y: K): T {
//   return x + y;
// }

function add7<T extends string | number>(x: T): T { return x }
// 이런 식이면 T는 string, number, string | number가 된다.

// # 각종 제한 방법
function func1<T extends { a: string }>(x: T): T { return x }
func1({ a: 'hello' });

function func2<T extends number[]>(x: T): T { return x }
func2([1, 2, 3]);

function func3<T extends (a: string) => number>(x: T): T { return x } // 콜백 함수를 제한
func3((a) => +a);

// 모든 함수를 다 넣게 하고 싶다면??
function func4<T extends (...args: any) => any>(x: T): T { return x } // 콜백 함수를 제한
func4((a) => +a);
// 이럴 때는 any를 써도 된다. 정말 제한이 없다!

// 생성자, 클래스 자체를 넣고 싶다면??
function func5<T extends abstract new (...args: any) => any>(x: T): T { return x }
// 생성자 즉 constructor 의 타이핑이다.

class A {}
func5(A)
// func5(new A())




export {}