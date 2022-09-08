// # Type vs Interface
// interface IPerson {
//   name: string,
//   age?: number,
// }
//
// type TPerson = {
//   name: string,
//   age?: number,
// }
//
// const man = {} as IPerson; // 빈 객체를 IPerson 타입으로 지정
// const woman = {} as TPerson; // 빈 객체를 TPerson 타입으로 지정
//
// man.name = 'King';
// man.age = 20;
// // man.gender = 'male'; // TS2339: Property 'gender' does not exist on type 'IPerson'.
//
// woman.name = 'Queen';
// woman.age = 21;
// // woman.gender = 'female'; // TS2339: Property 'gender' does not exist on type 'TPerson'.


// // 문자열 리터럴
// type White = '#fff';
//
// // const snow: White = '#000'; // TS2322: Type '"#000"' is not assignable to type '"#fff"'.
// const snow: White = '#fff'; // White 타입은 #fff 그 자체로 오직 #fff만 가능하다.
//
// // 숫자 원시 값
// type PI = 3.1415;
//
// // const pi: PI = 3.14; // TS2322: Type '3.14' is not assignable to type '3.1415'
// const pi: PI = 3.1415; // pi의 타입은 number가 아니라 3.1415 그 자체이다.
//
// // 유니온 타입으로 타입 지정
// type Union = string | null;
//
// const myDesktop: Union = 'Mac Studio';
// const myWatch: Union = null;
//
// // 문자열 유니온 타입으로 타입 지정
// type City = 'Seoul' | 'Ulsan';
//
// const birthHometown: City = 'Seoul';
// const growUpHometown: City = 'Ulsan';
// // const workPlace: City = 'Seong-Nam'; // TS2322: Type '"Seong-Nam"' is not assignable to type 'City'.
//
// // 숫자 리터럴 유니온 타입으로 타입 지정
// type perfectNumber = 6 | 28 | 496;
//
// // 객체 리터럴 유니온 타입으로 타입 지정
// type Result = { status: number, data: string[] } | { status: number, error: string };
//
// const success = { status: 200, data: [] };
// const failure = { status: 404, error: 'Not Found' };
//
// // 함수 유니온 타입으로 타입 지정
// type Func = (() => string) | (() => void);
//
// // 인터페이스 유니온 타입으로 타입 지정
// interface Square { side: number }
// interface Circle { radius: number }
// type Shape = Square | Circle;
//
// // 튜플로 타입 지정
// type Tuple = [number, boolean];
// const tuple1: Tuple = [1, true];
// // const tuple2: Tuple = ['0', false]; // TS2322: Type 'string' is not assignable to type 'number'.



