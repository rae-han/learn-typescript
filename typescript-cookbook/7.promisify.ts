// ============================================
// 1. promisify 함수 정의
// ============================================
function promisify<Args extends unknown[], Res>(
  fn: (...args: [...Args, (result: Res) => void]) => void,
): (...args: Args) => Promise<Res> {
  return function (...args: Args) {
    return new Promise((resolve) => {
      function callback(res: Res) {
        resolve(res);
      }
      fn.call(null, ...[...args, callback]);
    });
  };
}

// ============================================
// 2. 콜백 스타일 함수들 정의 (예시)
// ============================================

// 파일 읽기 (가상)
function readFile(path: string, encoding: string, callback: (content: string) => void): void {
  // 실제로는 파일을 읽지만, 여기서는 시뮬레이션
  setTimeout(() => {
    const mockContent = 'https://api.example.com/users';
    console.log(`📖 파일 읽기: ${path}`);
    callback(mockContent);
  }, 100);
}

// URL에서 데이터 가져오기 (가상)
interface UserData {
  id: number;
  name: string;
  email: string;
}

function fetchData(url: string, callback: (data: UserData[]) => void): void {
  setTimeout(() => {
    const mockData: UserData[] = [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
    ];
    console.log(`🌐 데이터 가져오기: ${url}`);
    callback(mockData);
  }, 100);
}

// 데이터 저장 (가상)
function saveData(filename: string, data: string, callback: (success: boolean) => void): void {
  setTimeout(() => {
    console.log(`💾 데이터 저장: ${filename}`);
    callback(true);
  }, 100);
}

// ============================================
// 3. promisify로 변환
// ============================================

const readFilePromise = promisify(readFile);
// 타입: (path: string, encoding: string) => Promise<string>

const fetchDataPromise = promisify(fetchData);
// 타입: (url: string) => Promise<UserData[]>

const saveDataPromise = promisify(saveData);
// 타입: (filename: string, data: string) => Promise<boolean>

// ============================================
// 4. 사용 예시
// ============================================

// ❌ 콜백 지옥 (Before)
console.log('=== 콜백 방식 ===');
readFile('./config.txt', 'utf-8', (url) => {
  fetchData(url, (users) => {
    const json = JSON.stringify(users);
    saveData('./output.json', json, (success) => {
      console.log(`완료: ${success}`);
    });
  });
});

setTimeout(() => {
  console.log('\n=== Promise 체이닝 ===');

  // ✅ Promise 체이닝 (After)
  readFilePromise('./config.txt', 'utf-8')
    .then((url) => {
      console.log(`읽은 URL: ${url}`);
      return fetchDataPromise(url);
    })
    .then((users) => {
      console.log(`받은 사용자 수: ${users.length}`);
      const json = JSON.stringify(users, null, 2);
      return saveDataPromise('./output.json', json);
    })
    .then((success) => {
      console.log(`✅ 모든 작업 완료: ${success}`);
    })
    .catch((error) => {
      console.error('에러 발생:', error);
    });
}, 500);

setTimeout(() => {
  console.log('\n=== async/await 방식 ===');

  // ✅✅ async/await (가장 깔끔)
  async function processData() {
    try {
      // 1. 파일에서 URL 읽기
      const url = await readFilePromise('./config.txt', 'utf-8');
      console.log(`읽은 URL: ${url}`);

      // 2. URL에서 데이터 가져오기
      const users = await fetchDataPromise(url);
      console.log(`받은 사용자: ${users.map((u) => u.name).join(', ')}`);

      // 3. 첫 번째 사용자 이메일로 다시 fetch
      const firstUserEmail = users[0].email;
      console.log(`첫 번째 사용자: ${firstUserEmail}`);

      // 4. 데이터 저장
      const json = JSON.stringify(users, null, 2);
      const success = await saveDataPromise('./output.json', json);

      console.log(`✅ 모든 작업 완료: ${success}`);

      return users;
    } catch (error) {
      console.error('에러 발생:', error);
    }
  }

  processData();
}, 1200);

// ============================================
// 5. 실용적인 예시: 여러 파일 순차 처리
// ============================================

setTimeout(() => {
  console.log('\n=== 여러 파일 순차 처리 ===');

  async function processMultipleFiles() {
    const files = ['file1.txt', 'file2.txt', 'file3.txt'];

    for (const file of files) {
      const content = await readFilePromise(file, 'utf-8');
      console.log(`처리 완료: ${file}`);
    }

    console.log('✅ 모든 파일 처리 완료');
  }

  processMultipleFiles();
}, 2000);

// ============================================
// 6. Promise.all로 병렬 처리
// ============================================

setTimeout(() => {
  console.log('\n=== 병렬 처리 ===');

  async function processInParallel() {
    const urls = ['https://api.example.com/users', 'https://api.example.com/posts', 'https://api.example.com/comments'];

    // 모든 요청을 동시에 실행
    const results = await Promise.all(urls.map((url) => fetchDataPromise(url)));

    console.log(`✅ ${results.length}개의 요청 완료`);
  }

  processInParallel();
}, 2800);
