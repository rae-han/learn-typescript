function parseYAML(yaml: string): any {
  // ...
}
interface Book {
  name: string;
  author: string;
}

function safeParseYAML<T>(yaml: string): T {
  return parseYAML(yaml);
}

// type is book
const book = safeParseYAML<Book>(`
  name: Villette
  author: Charlotte Brontë
`);

export default {};
