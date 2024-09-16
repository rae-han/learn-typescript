function parseYAML(yaml) {
    // ...
}
function safeParseYAML(yaml) {
    return parseYAML(yaml);
}
// type is book
const book = safeParseYAML(`
  name: Villette
  author: Charlotte Brontë
`);
export default {};
