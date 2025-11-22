function h1(a: string, b: string, c: string) {}

function h2(a: string, b: string, ...r: [string]) {}

function h3(a: string, ...r: [string, string]) {}

function h4(...r: [string, string, string]) {}

h1('a', 'b', 'c');
h2('a', 'b', 'c');
h3('a', 'b', 'c');
h4('a', 'b', 'c');
