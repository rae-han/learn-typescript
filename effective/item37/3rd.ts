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

type SortedList<T> = T[] & { _brand: 'sorted' };

function isSorted<T>(xs: T[]): xs is SortedList<T> {
  for (let i = 1; i < xs.length; i++) {
    if (xs[i] > xs[i - 1]) {
      return false;
    }
  }
  return true;
}

function binarySearch<T>(xs: SortedList<T>, x: T): boolean {
  // COMPRESS
  return true;
  // END
}

type Meters = number & { _brand: 'meters' };
type Seconds = number & { _brand: 'seconds' };

const meters = (m: number) => m as Meters;
const seconds = (s: number) => s as Seconds;

const oneKm = meters(1000); // Type is Meters
const oneMin = seconds(60); // Type is Seconds

export {};
