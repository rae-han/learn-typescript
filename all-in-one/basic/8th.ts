// is가 있으므로 type guard
const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult => input.status === 'rejected';
const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> => input.status === 'fulfilled';

// Promise 실행하면?
// pending 상태에서 settled 가 된다. settled에는 resolve, reject가 있는데 settled 자체는 완료 했다는 의미이지 성공인지 실패인지 모른다.

const promises = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);
// typescript에서는 모든 경우의 수를 다 고려하기 때문에 성공, 실패인지 몰라서 settled가 된다.

const errors1 = promises.filter((promise) => promise.status === 'rejected');
// error만 모아줬는데 reject가 아닌 settle이 뜬다.
// 그때 사용하는 것이 커스텀 타입가드 함수를 만들어준다.
// 사실 위아래 같은 코드인데 리턴 값에 is만 추가돼 있는 것이 다르다.
const errors2 = promises.filter(isRejected);
// 타입 스크립트가 타입을 잘못 추론할 때 커스텀 가드로 해준다.


