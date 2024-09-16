function parseYAML(yaml) {
    // ...
}
function safeParseYAML(yaml) {
    return parseYAML(yaml);
}
const book = safeParseYAML(`
  name: Villette
  author: Charlotte Brontë
`);
// console.log(book.title); // Property 'title' does not exist on type 'Book'
// book('read'); // this expression is not callable
// function processValue(val: unknown) {
//   if (val instanceof Date) {
//     val; // Type is Date
//   }
// }
// function isBook(val: unknown): val is Book {
//   return typeof val === 'object' && val !== null && 'name' in val && 'author' in val;
// }
// function processValue(val: unknown) {
//   if (isBook(val)) {
//     val; // Type is Book
//   }
// }
export default {};
