function isDogAmongCatOrDog(a) {
    if (a.meow) {
        return false;
    }
    return true; // 강아지임을 찾아내는 것은 직접 구현해야 한다.
}
function pet(a) {
    if (isDogAmongCatOrDog(a)) {
        // 커스텀 타입 가드는 if문 안에 쓴다.
        console.log(a.bow);
    }
    if ('meow' in a) {
        console.log(a.meow);
    }
}
// 실전 예제
// is가 있다?? 타입 가드.
const isRejected = (input) => {
    return input.status === 'rejected';
};
const isFulfilled = (input) => {
    return input.status === 'fulfilled';
};
const promises = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);
const errors = promises.filter(isRejected); // 실패한 것만 구별.
const result = promises.filter(isFulfilled);
const settled = promises.filter((a) => true);
// 이 경우에는 타입이  PromiseSettledResult<string>[] 가 된다. 정확하게 타입 구별이 안된다.
// Promise는 실행 후 Pending 상태에서 Settled가 된다 Settled에는 Resolved, Rejected가 있다.
// 즉 성공했든 실패했던 Settled는 맞다. 그 중 then을 resolved라 부른다.
// Settled는 PromiseSettledResult가 있고 성공은 PromiseFulfilledResult 실패는 PromiseRejectedResult가 있다.
const errors2 = promises.filter((promise) => promise.status === 'rejected');
export {};
