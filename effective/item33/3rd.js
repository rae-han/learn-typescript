// function pluck<T>(record: T[], key: string): any[] {
//   return record.map((r) => r[key]);
//   // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'unknown'.
//   // No index signature with a parameter of type 'string' was found on type 'unknown'.
//   // 책 에러 - lement implicitly has an 'any' type because type '{}' has no index signature
// }
function pluck(record, key) {
    return record.map((r) => r[key]);
}
const array = [];
const result = pluck(array, 'artist');
const releaseDates = pluck(albums, 'releaseDate'); // Type is (string | Date)[]
export {};
