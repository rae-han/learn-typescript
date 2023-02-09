function getLengthBad(array: any) {
  return array.length;
}

function getLength(array: any[]) {
  return array.length;
}
const length = getLengthBad(/123/); // undefined
console.log(length);
// getLength(/123/); // Argument of type 'RegExp' is not assignable to parameter of type 'any[]'.

export {};
