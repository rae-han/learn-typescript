declare global {
  function it(name: string, fn: () => void | Promise<void>): void;

  function expect<T>(actual: T): JestMatchers<T>;
}

export {};
