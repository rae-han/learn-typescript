const log = console.log;
const sArr = ['a', 'x', 'b', 'y', 'z'];
const nArr = [0, 1, 2, 3, 8, 9];
const bArr = [true, false, true, true];
const rArr = [1, 9, 'a', 'z', true];

// last(arr):
// 이 함수는 배열의 마지막 요소를 반환해야 합니다.
interface Last {
  <T>(arr: T[]): T;
}
const last: Last = (arr) => {
  return arr[arr.length - 1];
};

log(last(sArr));
log(last(nArr));
log(last(bArr));
log(last(rArr));

// prepend(arr, item):
// 이 함수는 배열의 시작 부분에 item을 넣고 return해야 합니다.
interface Prepend {
  <T, S>(arr: T[], item: S): (T | S)[];
}

const prepend: Prepend = (arr, item) => [item, ...arr];

log(prepend(sArr, 'c'));
log(prepend(nArr, 1));
log(prepend(bArr, true));
log(prepend(rArr, 'random'));

// mix(arr,arr) :
// 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
interface Mix {
  <T, S>(a1: T[], a2: S[]): (T | S)[];
}

const mix: Mix = (a1, a2) => [...a1, ...a2];

const stringAndNumber = mix(sArr, nArr);
console.log(stringAndNumber);
const stringAndNumberAndBoolean = mix(stringAndNumber, bArr);
console.log(stringAndNumberAndBoolean);

// count(arr) :
// 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
interface Count {
  // <T>(arr: T[]): number; // Tㄱㅏ 안쓰이는데..
  (arr: any): number;
}

const count: Count = (arr) => arr.length;
log(count(sArr));
log(count(nArr));
log(count(bArr));
log(count(rArr));

// findIndex(arr, item) :
// 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후
// 존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
interface FindIndex {
  <T, S extends T>(arr: T[], item: S): number | null;
}

const findIndex: FindIndex = (arr, item) => {
  const iter = arr[Symbol.iterator]();

  let index = 0;
  let cur = null;

  while (!(cur = iter.next()).done) {
    if (item === cur.value) {
      return index;
    }

    index++;
  }

  return null;
};

log({ findIndex });
log(findIndex(sArr, '1'));
log(findIndex(sArr, 'z'));
log(findIndex(nArr, 1));
log(findIndex(bArr, true));
log(findIndex(rArr, 2));

console.log('#### #### #### ####');

// slice(arr, startIndex, endIndex):
// 첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다.
// 첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다.
// 이때 세번째 매개변수는 필수 매개변수가 아닙니다.

interface Slice {
  <T>(arr: T[], startIndex: number, endIndex?: number): T[];
}

const slice: Slice = (arr, sIndex, eIndex) => {
  if (!eIndex) {
    eIndex = arr.length - 1;
  }

  let result = [];

  for (let i = sIndex; i <= eIndex; i++) {
    result.push(arr[i]);
  }

  return result;
};

log(slice(sArr, 1, 2));
log(slice(nArr, 1));
log(slice(bArr, 1, 2));
log(slice(rArr, 2));

export {};
