// function pluck<T>(record: T[], key: string): any[] {
//   return record.map((r) => r[key]);
//   // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'unknown'.
//   // No index signature with a parameter of type 'string' was found on type 'unknown'.
//   // 책 에러 - lement implicitly has an 'any' type because type '{}' has no index signature
// }

type RecordingType = 'studio' | 'live';

interface Album {
  artist: string;
  title: string;
  releaseDate: Date;
  recordingType: RecordingType;
}
function pluck<T>(record: T[], key: keyof T) {
  return record.map((r) => r[key]);
}

const array: Album[] = [];
const result = pluck(array, 'artist');

declare let albums: Album[];
const releaseDates = pluck(albums, 'releaseDate'); // Type is (string | Date)[]

export {};
