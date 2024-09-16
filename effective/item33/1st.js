const kindOfBlue = {
    artist: 'Miles Davis',
    title: 'Kind of Blue',
    releaseDate: 'August 17th, 1959',
    recordingType: 'Studio', // Oops!
}; // OK
function recordRelease(title, date) {
    /* ... */
}
recordRelease(kindOfBlue.releaseDate, kindOfBlue.title);
export {};
