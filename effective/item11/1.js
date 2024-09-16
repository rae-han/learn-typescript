const room1 = {
    numDoors: 1,
    ceilingHeightFt: 10,
    // elephant: 'present'
    // TS2322: Type '{ numDoors: number; ceilingHeightFt: number; elephant: string; }' is not assignable to type 'Room'.
    //   Object literal may only specify known properties, and 'elephant' does not exist in type 'Room'.
};
const obj = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: 'present'
};
const room2 = obj;
function createWindow(options) {
    if (options.darkMode) {
        setDarkMode();
    }
}
// createWindow({
//   title: 'Spider Solitaire',
//   darkmode: true,
//   // TS2345: Argument of type '{ title: string; darkmode: boolean; }' is not assignable to parameter of type 'Options'.
//   // Object literal may only specify known properties, but 'darkmode' does not exist in type 'Options'. Did you mean to write 'darkMode'?
// })
// const o1: Options = document;
// const o2: Options = new HTMLAnchorElement;
// interface Options {
//   darkMode?: boolean;
//   [otherOptions: string]: unknown;
// }
// const o: Options = { darkmode: true }; // 정상.
const tempOpt1 = {
    title: 'abc',
    a: 1,
    b: 2,
    c: 3,
};
const opt1 = tempOpt1;
const options = {
    title: 'abc',
    darkmode: true,
};
export {};
