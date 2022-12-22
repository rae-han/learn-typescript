const distance = (a: {x: number, y: number}, b: {x: number, y: number}) => (
  Math.sqrt(Math.pow(a.x - b.x, 2) + Math.sqrt(Math.pow(a.y - b.y, 2)))
)

// interface Point2D {
//   x: number;
//   y: number;
// }
// const distance = (a: Point2D, b: Point2D) => { ... }

// const get: Promise<Response> = (url: string, opts: Options) => { ... }
// const post: Promise<Response> = (url: string, opts: Options) => { ... }
//
// type HTTPFunction = (url: string, opts: Options) => Promise<Response>
// const get: HTTPFunction = (url, opts) => { ... }
// const post: HTTPFunction = (url, opts) => { ... }

interface Person {
  firstName: String;
  lastName: string
}

interface PersonWithBirthDate extends Person {
  birth: Date;
}

const me: PersonWithBirthDate = {
  firstName: 'raehan',
  lastName: 'jeong',
  birth: new Date()
}

interface State {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}

// interface
