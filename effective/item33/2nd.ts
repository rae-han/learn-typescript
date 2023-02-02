/** 녹음이 이루어지는 환경 */
// type RecordingType = 'studio' | 'live';

interface Album {
  artist: string;
  title: string;
  releaseDate: Date;
  recordingType: RecordingType;
}
const kindOfBlue: Album = {
  artist: 'Miles Davis',
  title: 'Kind of Blue',
  releaseDate: new Date('1959-08-17'),
  // recordingType: 'Studio' // Type '"Studio"' is not assignable to type 'RecordingType'
  recordingType: 'studio',
};

// function getAlbumsOfType(recordingType: string): Album[] {
//   // ...
// }
//
// function getAlbumsOfType(recordingType: RecordingType): Album[] {
//   // ...
// }

/** 녹음이 이루어지는 환경 */
type RecordingType = 'studio' | 'live';

function getAlbumsOfType(recordingType: RecordingType): Album[] {
  recordingType;
  return [];
}

export {};
