const colors = ['white', 'red', 'blue', 'green', 'yellow', 'black'];
const greys = ['white', 'black'];
// const selectedColor = greys.map(color => colors.find(c => c === color));
// type is (string | undefined)[]

// const selectedColor = greys.map(color => colors.find(c => c === color)).filter(color => color !== undefined);
// type is (string | undefined)[]

function isDefined<T>(x: T | undefined): x is T {
  return x !== undefined;
}
const selectedColor = greys.map(color => colors.find(c => c === color)).filter(isDefined); // string[]


export {}