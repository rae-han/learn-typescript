// const a: string = 'hello';
// const b: String = 'hell';
// // string과 String의 타입은 다르다.
//
// type World = "world";
var Direction = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3
}; // 위 값, 속성을 상수로 쓰겠다 readonly도 붙는다.
console.log(Direction);
console.log(typeof Direction);
// console.log(keyof typeof Direction);
function run(dir) { }
//
// walk(EDirection.Left);
run(Direction.Right);
//
// // 잠깐 keyof는?
// const obj3 = { a: 1, b: 2, c: 3 };
// // 위 객체에서 key만 가져오고 싶으면? keyof
// // type Key = keyof obj3; // obj3은 값인데 타입으로 사용하려니 안된다?
// type Key = keyof typeof obj3; // 값을 타입으로 사용하고 싶다면 typeof
// // 뽑아낸 타입을 Key라는 타입으로 만든다.
// // 즉 자바스크립트 값인 obj3은 타입으로 쓸수 없어서
// // 타입으로 쓰기 위해 typeof을 붙여주고
// // keyof로 abc를 뽑아내고
// // Key라는 타입으로 만들었다.
//
// const obj4 = { a: 1, b: 2, c: 3 } as const;
//
// // type Key2 = typeof obj3[keyof typeof obj4];
// type Key2 = typeof obj4[keyof typeof obj4];
// // as const를 사용하는 이유는 널널하게 타입을 뽑아내기 때문(number)
// // 타입이 123이 안되고 number number number가 된다.
// // 위 코드는 벨류들의 값을 타입으로 가져오고 싶다는 뜻.
