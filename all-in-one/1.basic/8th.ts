// // // is가 있으므로 type guard
// const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult => input.status === 'rejected';
// const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> => input.status === 'fulfilled';
// //
//
// const promises = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);
//
// // Promise 실행하면?
// // pending 상태에서 settled 가 된다. settled에는 resolve, reject가 있는데 settled 자체는 완료 했다는 의미이지 성공인지 실패인지 모른다.
// // Promise -> Pending -> Settled(Resolved, Rejected)
// // settled는 완료이지 성공인지 실패인지를 나타내진 않는다. then, catch 둘다 settled
// // PromiseSettledResult는 PromiseRejectedResult와 PromiseFulfilledResult가 있다.
// // 하지만 위 코드에서 promises 의 타입은 [PromiseSettledResult<string>, PromiseSettledResult<string>] 로 타입스크립트가 구별하지 못한다.
//
// // const errors = promises.filter((_) => true);
// // 타입스크립트는 성공했는지 실패했는지 모르므로 모든 가능성을 고려해서 가장 넓은 타입인 PromiseSettledResult<string>[]로 추론한다.
//
// // const errors = promises.filter((promise) => promise.status === 'rejected');
// // 코드로 실패한 케이스만 모아줬는데도 여전히 타입은 PromiseSettledResult<string>[]로 추론된다.
// // 그럴때 쓰는 것이 커스텀 타입 가드. 사실 위 코드와 같은 코드지만 리턴 값을 is 키워드로 커스텀 타입가드 해준 것이다.
//
// const errors = promises.filter(isRejected);
// const results = promises.filter(isFulfilled);
// // 타입 가드를 통해서 성공, 실패한 것들을 몰아 넣을수 있다.
//
// // // typescript에서는 모든 경우의 수를 다 고려하기 때문에 성공, 실패인지 몰라서 settled가 된다.
// //
// // const errors1 = promises.filter((promise) => promise.status === 'rejected');
// // // error만 모아줬는데 reject가 아닌 settle이 뜬다.
// // // 그때 사용하는 것이 커스텀 타입가드 함수를 만들어준다.
// // // 사실 위아래 같은 코드인데 리턴 값에 is만 추가돼 있는 것이 다르다.
// // const errors2 = promises.filter(isRejected);
// // // 타입 스크립트가 타입을 잘못 추론할 때 커스텀 가드로 해준다.
// //
// //
