// // # 객체 타이핑 type과 interface 구분하기
// type A = { a: string }; // type alias(타입 에일리어스), 타입 정의
// const a: A = { a: 'hello' };
//
// interface B { a: string } //
// const b: B = { a: 'hello' };
//
// // 간단하게 하고 싶으면 type
// // 상속, 구현(impolement) 같은 걸 하기 위해서는 interface, 객체 지향의 개념이 포함돼 있다.
// // type으론 안되는건 아닌데.. 기본 기능이..
// ### union(|), intersection(&)
function add(x, y) { return x + y; }
add(1, 2);
var result = add(1, 2); // result는 number인데 string | number가 된다. 좋지 않다.
add('1', '2');
add(1, '2');
// const aa: A | B = { a: 'hello', b: 'world' };
var bb = { a: 'hello', b: 'world' };
var cc = { a: 'hello', b: 'bye' };
var dd = { a: 'hello', b: 123 };
var ee = { a: 'hello', b: 123 };
var ff = { a: 'hello' };
var gg = { b: 123 };
// type과 interface간의 차이는 있지만 몰라도 된다.
var b2 = { a: true, b: true };
// 여러개 서언한 인터페이스는 합쳐진다.
// 그래서 라이브러리들은 인터페이스로 돼 있다. 사용자가 확장할 수 있기 때문이다.
// 예전에는 명명 할때 interface는 I, type은 T, enum은 E를 붙이는데 요즘은 안하는 추세이다. 제너레이터는 아직도 붙일때가 많다.
