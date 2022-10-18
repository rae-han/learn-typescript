// // # optional
// function func(a: number, b?: number, c?: number) {}
//
// func(1);
// func(1, 2);
// func(1, 2, 3);

// // 전부 다 받고 싶으면? 그냥 스프레드 문법
// function func(...args: number[]) {}
// func(1)
// func(1, 2, 3, 4, 5)

// // 인터페이스나 타입 에일리어스에서도 된다.
// let obj: { a: string, b?: string } = { a: 'hello', b: 'world' };
// obj = { a: 'bye' };
//
