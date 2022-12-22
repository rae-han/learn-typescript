// type TState = { name: string }
// type TState = { capital: string }

interface IState {
  name: string
}
interface IState {
  capital: string
}

const korea: IState = {
  name: 'korea',
  capital: 'seoul'
}

// const koreaWithoutSeoul: IState = { // TS2741: Property 'capital' is missing in type '{ name: string; }' but required in type 'IState'.  3rd.ts(8, 3): 'capital' is declared here.
//   name: 'korea'
// }
//
