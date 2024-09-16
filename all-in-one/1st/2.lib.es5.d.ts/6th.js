"use strict";
/*
interface CustomError extends Error {
  response?: {
    data: any;
  }
}
// 자바스크립트의 기본 에러는 name, message, stack 밖에 없다.
// 하지만 Axios 에러에는 response 값도 있다.
// 이걸 못하겠다 싶으면 상속하지말고 그냥 기본 3개 값에 추가할 값 다 때려넣어주면 된다.

// interface CustomError {
//   name: string,
//   message: string,
//   stack: string,
//   response?: {
//     data: any;
//   }
// }

(async () => {
  try {
    await axios.get();
  } catch (err: unknown) {
    // console.error((err as CustomError).response?.data)
    // // 참고로 위에 ? 키워드를 빼도 타입스크립트에서 잡아준다.
    // err.response?.data
    // // 잉 위에서 분명 에러 지정해줬는데 err가 unknown이 됐네?

    // // 이럴땐 아래와 같이 한번 변수에 저장해주면 된다.
    // const customError = err as CustomError;
    // console.error(customError.response?.data)
    // customError.response?.data

    // 사실 as도 되도록이면 안적어주는것이 좋은데 unknown일때는 써도 된다.
    // any도 오버로드에서는 괜낳다.
    // 라이브러리에서 타입이 unknown인 것이 있다면 그걸 as로 바꿔서 해야한다.
    // 에러가 특히 그렇다.
    // as가 안좋은 이유는 개발자가 고쳐야 하기 때문에 사람이 고쳐야하고 사람이 하는 일에는 실수가 있기 마련이다.
  }
})();
*/
// 아래와 같은 방법이 더 좋다.
// 왜냐면 위에 만약 커스텀 에러가 아니라면?
// 클래스로 바꾸는 이유는 인터페이스와 클래스의 차이 때문인데 인터페이스는 자바스크립트에서 사라지기 때문에
// instanceof 키워드를 사용하지 못한다.
class CustomError extends Error {
    response;
}
(async () => {
    try {
        await axios.get();
    }
    catch (err) {
        if (err instanceof CustomError) { // as 키워드 대신 타입 가드로 좁혀줄 수 있다.
            console.error(err.response?.data);
            err.response?.data;
        }
    }
})();
// 제네릭 실무에서 타이핑할 때 만드는 경우 생긴다.
// 라이브러리에서 많고 왜냐면 라이브러리는 범용성이 좋아야하기 때문에
// 실무에서도 사용해야 할 경우가 생긴다.
// 라이브러리에서도 타이핑 안돼어 있는 경우가 있다.
// 그때 d.ts 파일을 만들어서 해줘야한다.
// unknown 은 니가 타입가드하던 캐스팅하던 안전하게 써, any는 포기한다.
const a = (v) => { return v; };
const c = a(3);
