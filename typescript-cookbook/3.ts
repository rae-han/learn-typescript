function fetchResults(callback: (statusCode: number, results: number[]) => void) {
  const results = [100, 200, 300];

  callback(200, results);
}

function normalHandler(statusCode: number, results: number[]): void {
  // 두 매 개 변 수 로 필요한 작업 수행
  fetchResults(normalHandler);
}

function handler(statusCode: number): boolean {
  // 상태 코드 Wt...
  return true;
}
fetchResults(handler);

enum Traits {
  None, // 0000
  Friendly = 1, // 0001 또는 1 << 0
  Mean = 1 << 1, // 0010
  Funny = 1 << 2, // 0100
  Boring = 1 << 3, // 1000
}

// (0010 | 0100) === 0110
let aPersonsTraits = Traits.Mean | Traits.Funny;
if ((aPersonsTraits & Traits.Mean) === Traits.Mean) {
  console.log('Mean');
  Traits.Mean;
}
