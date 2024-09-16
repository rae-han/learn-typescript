// function hasTwelveLetterKey(o: { [key: string]: any }) {
//   for (const key in o) {
//     if (key.length === 12) {
//       return true;
//     }
//   }
//   return false;
// }
function getLengthBad(array) {
    // Don't do this!
    return array.length;
}
function getLength(array) {
    return array.length;
}
function hasTwelveLetterKey(o) {
    for (const key in o) {
        if (key.length === 12) {
            console.log(key, o);
            // console.log(key, o[key]);
            // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'
            // No index signature with a parameter of type 'string' was found on type '{}'.
            return true;
        }
    }
    return false;
}
hasTwelveLetterKey({
    length12char: 12,
});
const sample = () => {
    return null;
};
const numArgsBad = (...args) => args.length; // Returns any
const numArgsGood = (...args) => args.length; // Returns number
export {};
