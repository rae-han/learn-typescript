"use strict";
// unknown 의 정체는?
// any는 타입을 포기. unknown은 타입 정하는 것을 미룬다.
// 둘 다 사용 안하는 것이 좋지만 써야한다면 unknown이 낫다.
// unknown이 가장 흔한 경우에는 error
try {
}
catch (error) {
    error.message;
    // (error as AxiosError)
    // 더 발전된 방법은 나중에.. es5에서.
}
