// function hasTwelveLetterKey(o: { [key: string]: any }) {
//   for (const key in o) {
//     if (key.length === 12) {
//       return true;
//     }
//   }
//   return false;
// }

function getLengthBad(array: any) {
  // Don't do this!
  return array.length;
}

function getLength(array: any[]) {
  return array.length;
}
function hasTwelveLetterKey(o: object) {
  for (const key in o) {
    if (key.length === 12) {
      console.log(key, o);
      console.log(key, o[key]);
      // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'
      return true;
    }
  }
  return false;
}

hasTwelveLetterKey({
  length12char: 12,
});

type FnN = (...args: any[]) => any;
const sample: FnN = () => {
  return null;
};

const numArgsBad = (...args: any) => args.length; // Returns any
const numArgsGood = (...args: any[]) => args.length; // Returns number

export {};
