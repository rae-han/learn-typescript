// interface Error {
//   status: number;
// }

declare global {
  interface Error {
    status: number;
  }

  namespace Express {
    export interface User {
      name: string;
    }
  }
}

export {}