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
const toStrT = x => x.toString();
const toStrI = x => x.toString();
const TFnProp = (number) => number;
// TFnProp.props =  123; // TS2322: Type 'number' is not assignable to type 'string'.
TFnProp.props = 'abc';
const TFnProp = (number) => number;
// TFnProp.props =  123; // TS2322: Type 'number' is not assignable to type 'string'.
TFnProp.props = 'abc';
const korea1 = {
    name: 'korea',
    capital: 'seoul',
    population: 52_000_000,
};
const korea2 = {
    name: 'korea',
    capital: 'seoul',
    population: 52_000_000,
};
// interface IStateWithPop1 extends TUnionStatePop {} // TS2312: An interface can only extend an object type or intersection of object types with statically known members.
class StateT {
    name;
    capital;
    constructor(name, capital) {
        this.name = name;
        this.capital = capital;
    }
}
class StateI {
    name;
    capital;
    constructor(name, capital) {
        this.name = name;
        this.capital = capital;
    }
}
const variableMap = {
    input: {
        request: 'get'
    },
    output: {
        response: '200'
    }
};
const nameVariable = {
    request: 'post',
    response: '200',
    name: 'code'
};
const INameVariable = {
    request: 'post',
    response: '200',
    name: 'code'
};
const pair = [0, 1];
const stringList = ['a', 'b', 'c', 'z'];
const namedNums = ['tennis point', 0, 15, 30, 40];
const tuple = [10, 20];
pair.map(item => item);
export {};
