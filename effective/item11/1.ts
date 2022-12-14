interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}

const room1: Room = {
  numDoors: 1,
  ceilingHeightFt: 10,
  // elephant: 'present'
  // TS2322: Type '{ numDoors: number; ceilingHeightFt: number; elephant: string; }' is not assignable to type 'Room'.
  //   Object literal may only specify known properties, and 'elephant' does not exist in type 'Room'.
}

const obj = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present'
}

const room2: Room = obj;

interface Options {
  title: string;
  darkMode?: boolean;
}
//
// const windowTab: Options = {
//   title: 'title',
//   // darkmode: true, // TS2322: Type '{ title: string; darkmode: boolean; }' is not assignable to type 'Options'.
//   // Object literal may only specify known properties, but 'darkmode' does not exist in type 'Options'. Did you mean to write 'darkMode'?
// }

declare function setDarkMode();
function createWindow (options: Options) {
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
}
const opt1: Options = tempOpt1;

const options = {
  title: 'abc',
  darkmode: true,
} as Options;

interface laptopOptions {
  size?: number;
  color?: string;
  hasThunderbolt?: boolean;
}

// const opts = { hasthunderbolt: true };
// const o: laptopOptions = opts; // TS2559: Type '{ hasthunderbolt: boolean; }' has no properties in common with type 'laptopOptions'.

export {}
