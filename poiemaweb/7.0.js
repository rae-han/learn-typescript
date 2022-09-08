// #
// class Queue {
//   protected data: any[] = [];
//
//   push(item: any) {
//     this.data.push(item);
//   }
//
//   pop() {
//     return this.data.shift();
//
//   }
// }
//
// const queue = new Queue();
//
// queue.push(0);
// queue.push('1');
//
// console.log(queue.pop().toFixed());
// console.log(queue.pop().toFixed()); // TypeError: queue.pop(...).toFixed is not a function
// class Queue {
// protected data: any[] = [];
//
//   push(item: any) {
//     this.data.push(item);
//   }
//
//   pop() {
//     return this.data.shift();
//
//   }
// }
//
// class NumberQueue extends Queue {
//   push(item: number) {
//     super.push(item);
//   }
//
//   pop(): number {
//     return super.pop();
//   }
// }
//
// const queue = new NumberQueue();
//
// queue.push(0);
// // queue.push('1'); // TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
//
// console.log(queue.pop().toFixed());
// console.log(queue.pop().toFixed());
// class Queue<T> {
//   protected data: Array<T> = [];
//
//   push(item: T) {
//     this.data.push(item);
//   }
//
//   pop(): T | undefined {
//     return this.data.shift();
//
//   }
// }
//
// const numberQueue = new Queue<number>();
//
// numberQueue.push(0);
// // numberQueue.push('1'); // 의도하지 않은 실수를 사전 검출 가능하며, 사전 인지 후 수정 가능하다.
// numberQueue.push(parseInt('1', 10));
//
// console.log(numberQueue.pop()?.toFixed()); // 0
// console.log(numberQueue.pop()?.toFixed()); // 1
// console.log(numberQueue.pop()?.toFixed()); // undefined
//
// const stringQueue = new Queue<string>();
//
// stringQueue.push('abc');
// stringQueue.push('xyz');
//
// console.log(stringQueue.pop()?.toUpperCase()); // ABC
// console.log(stringQueue.pop()?.toUpperCase()); // XYZ
// console.log(stringQueue.pop()?.toUpperCase()); // undefined
//
// const myQueue = new Queue<{ name: string, age?: number}>();
// myQueue.push({ name: 'Foo', age: 30 });
// myQueue.push({ name: 'Bar' });
//
// console.log(myQueue.pop()); // { name: 'Foo', age: 30 }
// console.log(myQueue.pop()); // { name: 'Bar' }
function reverse(items) {
    return items.reverse();
}
console.log(reverse([0, 1, 2, 3, 4]));
