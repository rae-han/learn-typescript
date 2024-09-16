// function binarySearch<T>(xs: T[], x: T): boolean {
//   let low = 0,
//     high = xs.length - 1;
//   while (high >= low) {
//     const mid = low + Math.floor((high - low) / 2);
//     const v = xs[mid];
//     if (v === x) return true;
//     [low, high] = x > v ? [mid + 1, high] : [low, mid - 1];
//   }
//   return false;
// }
function isSorted(xs) {
    for (let i = 1; i < xs.length; i++) {
        if (xs[i] > xs[i - 1]) {
            return false;
        }
    }
    return true;
}
function binarySearch(xs, x) {
    // COMPRESS
    return true;
    // END
}
const meters = (m) => m;
const seconds = (s) => s;
const oneKm = meters(1000); // Type is Meters
const oneMin = seconds(60); // Type is Seconds
export {};
