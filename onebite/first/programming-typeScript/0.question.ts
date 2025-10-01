// 1️⃣ 첫번째 문제
type NetworkState =
  | { state: 'loading' }
  | { state: 'failed'; code: number }
  | { state: 'success'; response: { title: string; summary: string } };

function getNetworkStatus(state: NetworkState): string {
  switch (state.state) {
    case 'loading':
      return 'Downloading...';
    case 'failed':
      return `Error ${state.code} downloading`;
    case 'success':
      return `Downloaded ${state.response.title} - ${state.response.summary}`;
  }
}

// 2️⃣ 두번째 문제
class Fox {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Dog {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

function createInstanceArray<T, A extends unknown[]>(n: number, Ctor: new (...args: A) => T): T[] {
  return Array.from({ length: n }, () => Object.create(Ctor.prototype) as T);
}

console.log(createInstanceArray(3, Fox));
console.log(createInstanceArray(3, Dog));
// console.log(createInstanceArray(3, 1)); // 타입 오류
// console.log(createInstanceArray(3, []])); // 타입 오류
// console.log(createInstanceArray(3, {})); // 타입 오류
// console.log(createInstanceArray(3, { name: 'test' })); // 타입 오류

// 3️⃣ 세번째 문제

// 문제 1
interface User1 {
  id: number;
  name: string;
  email: string;
  age: number;
}

type UpdateUser = Partial<User1>;

// 문제 2
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  createdAt: Date;
}

type CreateProduct = Omit<Product, 'id' | 'createdAt'>;

// 문제 3
class DatabaseConfig {
  constructor(
    public host: string,
    public port: number,
    public username: string,
    public password: string,
    public ssl?: boolean,
  ) {}
}

type DbConfigParams = ConstructorParameters<typeof DatabaseConfig>;

// 문제 4
interface User2 {
  id: number;
  name: string;
  email: string;
  age?: number;
  isActive: boolean;
  metadata?: Record<string, any>;
}

interface Admin extends User2 {
  permissions: string[];
  lastLogin: Date;
}

type ProcessedUser = Required<Pick<Admin, keyof User2>>;

// 4️⃣ 네번째 문제

type FavoriteSport = 'swimming' | 'football';
type BallSport = 'football' | 'baseball';

// 문제 1
type Sport1 = FavoriteSport & BallSport; // football
type Sport2 = FavoriteSport | BallSport; // swimming | football | baseball

// 문제 2
interface Designer {
  name: string;
  sense: number;
}
interface Developer {
  name: string;
  skill: number;
}

type Worker1 = Designer & Developer; // { name: string; sense: number; skill: number; }
type Worker2 = Designer | Developer; // 둘 중 하나만 만족하면 됨. name은 반드시 필요하고 sense 또는 skill 중 하나는 필요.

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type Worker1Expand = Expand<Worker1>;
type Worker2Expand = Expand<Worker2>;
// const worker: Worker2 = {
//   name: 'John',
// };
// console.log(worker);
