// type TState = {
//   name: string,
//   capital: string,
// }
//
// interface IState {
//   name: string,
//   capital: string,
// }
//
// class CState {
//   constructor(public name:string, public capital:string) {
//   }
// }
//
// const korea1: TState = {
//   name: 'korea',
//   capital: 'seoul',
//   population: 52_000_000,
// }
// const korea2: IState = {
//   name: 'korea',
//   capital: 'seoul',
//   population: 52_000_000,
// }
// const korea3: CState = {
//   name: 'korea',
//   capital: 'seoul',
//   population: 52_000_000,
// }


type TDict = {
  [key: string]: string
}
interface IDict {
  [key: string]: string
}

type TFn = (x: number) => string;
interface IFn {
  (x: number): string
}

const toStrT: TFn = x => x.toString();
const toStrI: IFn = x => x.toString();

type TFnWithProperties = {
  (x: number): number;
  props: string;
}
interface IFnWithProperties {
  (x: number): number;
  props: string;
}

const TFnProp: TFnWithProperties = (number) => number;
// TFnProp.props =  123; // TS2322: Type 'number' is not assignable to type 'string'.
TFnProp.props =  'abc';

const TFnProp: IFnWithProperties = (number) => number;
// TFnProp.props =  123; // TS2322: Type 'number' is not assignable to type 'string'.
TFnProp.props =  'abc';

type TPair<T> = {
  first: T;
  second: T;
}
interface IPair<T> {
  first: T;
  second: T;
}

type TState = {
  name: string,
  capital: string,
}
interface IState {
  name: string,
  capital: string,
}

type TPop = {
  population: number
}
interface IPop {
  population: number
}

type TStateWithPop = TState & IPop
interface IStateWithPop extends IState, TPop {}

const korea1: TStateWithPop = {
  name: 'korea',
  capital: 'seoul',
  population: 52_000_000,
}
const korea2: IStateWithPop = {
  name: 'korea',
  capital: 'seoul',
  population: 52_000_000,
}

type TIntersectionStatePop = TState & TPop
type TUnionStatePop = TState | TPop
interface IStateWithPop2 extends TIntersectionStatePop {}
// interface IStateWithPop1 extends TUnionStatePop {} // TS2312: An interface can only extend an object type or intersection of object types with statically known members.

class StateT implements TState {
  constructor(public name: string, public capital: string) { }
}
class StateI implements IState {
  constructor(public name: string, public capital: string) { }
}

type Input = {
  request: string
}
type Output = {
  response: string
}

interface VariableMap {
  [name: string]: Input | Output
}

const variableMap: VariableMap = {
  input: {
    request: 'get'
  },
  output: {
    response: '200'
  }
}

type NameVariable = (Input | Output) & { name: string }

const nameVariable: NameVariable = {
  request: 'post',
  response: '200',
  name: 'code'
}

interface INameVariable extends Input, Output {
  name: string
}
const INameVariable: INameVariable = {
  request: 'post',
  response: '200',
  name: 'code'
}

type Pair = [number, number];
type StringList = string[];
type NamedNums = [string, ...number[]]

const pair: Pair = [0, 1];
const stringList: StringList = ['a', 'b', 'c', 'z'];
const namedNums: NamedNums = ['tennis point', 0, 15, 30, 40]

interface Tuple {
  [key: number]: number,
  length: number;
}

const tuple: Tuple = [10, 20];

pair.map(item => item)
// tuple.map(item => item)

export {}




































