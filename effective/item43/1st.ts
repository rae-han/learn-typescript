export {}

declare global {
  interface Document {
    monkey: string
  }
}
document.monkey = 'Tamarin';

export default {}