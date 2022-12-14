"use strict";
// redux는 자체적으로 타입스크립트가 적용돼 있어서 types 패키지를 설치할 필요 없다.
// 참고로 만약 types 패키지가 필요한 프로젝트면 메이저 버전을 맞춰야 한다.
Object.defineProperty(exports, "__esModule", { value: true });
// import { createStore, compose, legacy_createStore } from 'redux';
const redux_1 = require("redux");
// redux 는 export default 나 export = 키워드가 없다. 즉 export 가 없다.
// 즉 named export된 애들을 쓴다. 선언한 것과 실제로 사용하는 것이랑 이름이 같아야한다.
// createStore에 줄이 그어져 있는 이유는 deprecated라서
const initialState = {
    user: {
        isLoggedIn: false,
        data: null,
    },
    posts: [],
};
const login = { type: 'LOGIN' };
const anyAction = { type: 'example', data: 123 };
// reducer는 상태를 바꾸는 규칙
const reducer = (0, redux_1.combineReducers)({
    // user 상태 변화에 대한 규칙은 아래에
    user: (state, action) => {
        switch (action.type) {
            case 'LOGIN':
                return ({
                    isLoggedIn: true,
                    data: {
                        nickname: 'name',
                        password: 'password'
                    }
                });
            default:
                return state;
        }
    },
    posts: (state, action) => {
        switch (action.type) {
            case 'ADD_POST':
                return ([...state, action.data]
                // .. state에 에러가 나는 이유는 state가 unknown이라서
                // 1. stete를 as 로 고정
                // 2. 타입 가드를 사용
                // 3. 세번째 방밥은? 라이브러리를 제대로 타이핑 하는 것.
                );
            default:
                return state;
        }
    },
});
// redux 기준으로 타입스크립트에서는 가장 필요한 상위 코드를 작성하고 에러를 확인하면서 차례대로 코드를 작성해나가면 된다.
// 자바스크립트에서는 실행 도중 확인할 수 있지만 타입스크립트에서는 작성하면서 확인 가능한게 장점이다.
// 다만 타입스크립트는 문서를 보조하는 역할을 하는 것이지, 결국 해당 라이브러리의 함수나 메서드를 사용하기 위해서는 문서를 확인해야한다.
const store = (0, redux_1.legacy_createStore)(reducer, initialState);
store.dispatch({ type: 'LOGIN', data: { nickname: 'id', password: 'password' } });
store.dispatch(login);
store.getState();
store.dispatch({ type: 'ADD_POST', data: { title: 'redux', context: 'lib of react' } });
// 리덕스의 미들웨어는 액션이 스토어로 전달되기 전에 무언가 하기 때문에 미들웨어이다.
// 리덕스에 미들웨어라는 타입이 있다.
// 3단으로 이뤄진 고차함수이다.
// 액션은 객체꼴인게 기본 원칙인데 thunk를 이용하여 함수로 바꿀 수 있다.
// 복합한 함수 액션은 타입또한 복잡한데(받는 값이 달라지면 더더욱) 이 타입을 일일히 적지 말고 어딘가 선언해주고 변수로 넣어주면 가독성이 더 올라간다.
// 그건 개발자 스스로 하는 것.
// 액션은 원래 객체꼴인데 thunk를 이용하여 함수로 바꾸면 타입 에러가난다.
// 이런건 보통 라이브러리에 해결할 방법이 있는데 thunk 기준으로도 thunkMiddleware를 사용하면 된다.
// thunkMiddleware as ThunkMiddleware를 이용하여 오버라이딩 해준다.
