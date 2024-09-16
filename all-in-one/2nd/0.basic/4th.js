"use strict";
// enum
// enum은 하나의 변수를 그룹으로 묶고 싶을 때 많이 사용한다.
var EDirection;
(function (EDirection) {
    EDirection[EDirection["Up"] = 0] = "Up";
    EDirection[EDirection["Down"] = 1] = "Down";
    EDirection[EDirection["Left"] = 2] = "Left";
    EDirection[EDirection["Right"] = 3] = "Right";
})(EDirection || (EDirection = {}));
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
};
// 이건 enum과 다르게 코드가 남는다.
const ODirection1 = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
};
// as const가 없으면 각각 아이템의 타입이 number가 된다.
// 변수명 뒤에 타입을 기입하는 방법도 있지만 값으로 지정한 걸 그대로 타입으로 쓰려면, 상수를 쓰겠다는 뜻으로 as const를 붙여주면 된다.
// 참고로 enum은 타입으로 사용 가능하므로 아래와 같이 사용 가능하다.
function walk(dir) {
    console.log(dir);
}
function run(dir) {
    console.log(dir);
}
const obj = { a: 1, b: 2, c: 3 };
// 위 값은 number인데 obj 안에 있는 값들의 타입이 1, 2, 3 이 아니라 number이기 때문이다.
const obj2 = { a: 1, b: 2, c: 3 };
// Value들의 타입만 가져오고 싶다! 라서 1, 2, 3이 된다. 만약 아까 as const가 아니였으면 값들의 타입인 number가 됐을 것이다.
const obj3 = { a: 123, b: true, c: 'hello' };
