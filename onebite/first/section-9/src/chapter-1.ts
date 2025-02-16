type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | number | boolean, string>;
