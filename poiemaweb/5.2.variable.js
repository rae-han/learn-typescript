// # 변수와 인터페이스
// interface Todo {
//   id: number,
//   content: string,
//   done: boolean,
// }
//
// const todo: Todo = { id: 1, content: 'learn typescript', done: false }
// // 인터페이스 Todo를 정의한 뒤 변수 todo의 타입으로 Todo 인터페이스를 선언했다.
// // 변수 todo는 Todo 인터페이스를 준수해야 한다.
var MallardDuck = /** @class */ (function () {
    function MallardDuck() {
    }
    MallardDuck.prototype.quack = function () {
        console.log('Quack!');
    };
    return MallardDuck;
}());
var MandarinDuck = /** @class */ (function () {
    function MandarinDuck() {
    }
    MandarinDuck.prototype.quack = function () {
        console.log('q~uack!');
    };
    return MandarinDuck;
}());
function makeNoise(duck) {
    duck.quack();
}
makeNoise(new MallardDuck()); // Quack!
makeNoise(new MandarinDuck()); // q~uack! // 5
