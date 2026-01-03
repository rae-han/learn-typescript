type Person = {
  name: string;
  age: number;
  married: boolean;
};

type Partial<T> = { [P in keyof T]?: T[P] };

type PersonPartial = Partial<Person>;

// type SetOptional<T, K extends keyof T> = { [P in K]?: T[P] } & { [P in Exclude<keyof T, K>]: T[P] };
type SetOptional<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;

type OptionalAge = SetOptional<Person, 'age'>;

type Remap<T> = {
  [K in keyof T]: T[K];
};

type DeepRemap<T> = T extends object
  ? {
      [K in keyof T]: DeepRemap<T[K]>;
    }
  : T;

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

type RemapOptionalAge = Remap<OptionalAge>;
type DeepRemapOptionalAge = DeepRemap<OptionalAge>;
type ExpandOptionalAge = Expand<OptionalAge>;

type Name = { name: string };
type Test1 = Name extends Required<Name> ? true : false;

type Split<T> = {
  [K in keyof T]: {
    [P in K]: T[P];
  };
}[keyof T];

type SplitExpand<T> = T extends infer O
  ? {
      [K in keyof O]: {
        [P in K]: O[P];
      };
    }[keyof O]
  : never;

type VideoFormatURLs = {
  format360p: URL;
  format480p: URL;
  format720p: URL;
  format1080p: URL;
};

type Test2 = Split<VideoFormatURLs>;
type Test3 = SplitExpand<VideoFormatURLs>;
