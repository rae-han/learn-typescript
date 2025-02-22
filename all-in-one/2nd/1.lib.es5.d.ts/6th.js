// 타입스크립트 할때 조심해야 할 점
class CustomError2 extends Error {
    response;
}
(async () => {
    try {
        await axios.get();
    }
    catch (error) {
        // console.error((error as Error).response?.data)
        console.error(error.response?.data);
        // error.response?.data; // 위에서 CUstomError로 지정했지만 바로 까먹는다.
        // 근데 이렇게 되면 as로 도배되지 않나?
        // 한번 변수에 저장하는 방법이 있다.
        const customError = error;
        // customError.response?.data;
        // as도 많이 안써주는 것이 좋다.
        // 그래도 unknown때는 써줘야 한다.
        // 라이브러리에서 에러를 unknown으로 처리한 경우에도 as를 써도 된다.
        // as 를 쓰면 안되는 이유는 어쨌든 개발자가 지정해주는 것이기 때문에 실수가 있을수 있다.
        // 만약 CustomError라 강제 지정했는데 아니라면? 줄줄이 에러난다.
        // 에러터지기 좋다.
        // if (err instanceof CustomError) 를 반드시 써주자.
        // 근데 이건 interface에서 못쓰고 class에서 써야한다.
        // 인터페이스는 자바스크립트에서 사라지기 때문에 incetance를 못쓴다.
        // 인터페이스와 비슷한 클래스를 써야한다.
        if (error instanceof CustomError2) {
            console.error(error.response?.data);
            error.response?.data;
            // 여기서는 as 안써도 된다.
        }
        // 아까 다른 라이브러리에서 unknown이면 as를 써야한댔는데
        // 이런식으로 타입 좁히기를 하면 더 좋다.
    }
})();
export {};
