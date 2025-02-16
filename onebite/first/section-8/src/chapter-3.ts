interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [K in keyof User]?: User[K];
};
