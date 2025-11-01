type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

// 사용 예시
type GreetingFn = (name: string) => { message: string };

type GreetingResult = MyReturnType<GreetingFn>; // { message: string }

const greet: GreetingFn = (name) => ({ message: `Hello, ${name}` });

const result: GreetingResult = greet('TypeScript');

console.log(result);
