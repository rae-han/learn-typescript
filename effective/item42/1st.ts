function parseYAML(yaml: string): any {
  // ...
}
interface Book {
  name: string;
  author: string;
}
// const book: Book = parseYAML(`
//   name: Wuthering Heights
//   author: Emily Brontë
// `);

const book = parseYAML(`
  name: Jane Eyre
  author: Charlotte Brontë
`);
console.log(book.title); // No error, 런타임에서는 undefined
// TypeError: Cannot read properties of undefined (reading 'title')
book('read'); // No error, 런타입 단계에서 book은 함수가 아니라는 예외 발생
// TypeError: book is not a function

export {};
