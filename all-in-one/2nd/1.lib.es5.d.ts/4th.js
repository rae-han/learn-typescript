// 공변성, 반공변성, (이변성, 불변성)
// var바이베리언스
// 함수간 대입에 대한
function a1(x) {
    return +x;
}
function a2(x) {
    return +x;
}
const b1 = a1; // 대입이 된다????????????
// const b2: B2 = a2; // 이건 안됨.
// 리턴 값은 더 넓은 타입으로 대입 가능하다.
// 근데
// 매개변수는 너 좁은 타입으로 대입 가능하다.
function c1(x) {
    return 0;
}
const d1 = c1; // 된다?
// (x: number)=>number는 왜 대입 되지?
// 매개변수는 string | number 를 하나로 보고
function e(x) {
    return 0;
}
let f = e; // 궁극적으로 이게 된다!
// 리턴 값은 더 넓은 타입이면 대입 가능하고, 매개변수는 더 좁은 타입이면 대입 가능하기 때문이다.
// 타입 넓히기, 타입 좁히기와는 다른 개념이다.
// 타입 넓히기는 모든 상황을 고려해서 타입을 정해주는 것.
const g = 1;
let h = 1;
export {};
