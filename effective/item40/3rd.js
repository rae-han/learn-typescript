// function shallowObjectEqual<T extends object>(a: T, b: T): boolean {
//   for (const [k, aVal] of Object.entries(a)) {
//     if (!(k in b) || aVal !== b[k]) {
//       // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
//       // No index signature with a parameter of type 'string' was found on type '{}'.
//       return false;
//     }
//   }
//   return Object.keys(a).length === Object.keys(b).length;
// }
function shallowObjectEqual(a, b) {
    for (const [k, aVal] of Object.entries(a)) {
        if (!(k in b) || aVal !== b[k]) {
            return false;
        }
    }
    return Object.keys(a).length === Object.keys(b).length;
}
export {};
