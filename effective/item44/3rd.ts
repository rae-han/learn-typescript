import { someMethod, someSymbol } from 'my-module'

const pt1 = { // type is {x: number, y: number}
  x: 1,
  y: 2,
}

const pt2 = someMethod(pt1, someSymbol); // type is any


export default {}