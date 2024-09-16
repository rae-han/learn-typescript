const tuple = ['1', 1];
// tuple[10] = 'hello';
// TS2322: Type '"hello"' is not assignable to type 'undefined'.
// TS2493: Tuple type '[string, number]' of length '2' has no element at index '10'.
tuple.push('hello');
export {};
