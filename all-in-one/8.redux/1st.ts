// redux는 자체적으로 타입스크립트가 적용돼 있어서 types 패키지를 설치할 필요 없다.
// 참고로 만약 types 패키지가 필요한 프로젝트면 메이저 버전을 맞춰야 한다.

// import { createStore, compose, legacy_createStore } from 'redux';
import { combineReducers, compose, legacy_createStore as createStore } from 'redux';
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
const reducer = combineReducers({
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
       })
     default:
       return state
   }
  },
  posts: (state, action) => {
    switch (action.type) {
      case 'ADD_POST':
        return (
          // [...state, action.data]
          state
        )
      default:
        return state
    }
  },
})

// redux 기준으로 타입스크립트에서는 가장 필요한 상위 코드를 작성하고 에러를 확인하면서 차례대로 코드를 작성해나가면 된다.
// 자바스크립트에서는 실행 도중 확인할 수 있지만 타입스크립트에서는 작성하면서 확인 가능한게 장점이다.

// 다만 타입스크립트는 문서를 보조하는 역할을 하는 것이지, 결국 해당 라이브러리의 함수나 메서드를 사용하기 위해서는 문서를 확인해야한다.

const store = createStore(reducer, initialState)

store.dispatch({ type: 'LOGIN', data: { nickname: 'id', password: 'password' } })
store.dispatch(login)
store.getState();

store.dispatch({ type: 'ADD_POST', data: { title: 'redux', context: 'lib of react' }})