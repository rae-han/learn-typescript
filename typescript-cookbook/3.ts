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
