// 기본값 타이핑
const func1 = (a = 3, b = 5) => {
    return 3;
};
const func2 = (a = { children: 'abc' }) => { };
const func3 = (x, y) => ({ x, y }); // react jsx에서 문제가 될 수 있다.
// 아래 부터는 위 jsx에서 문제 되는걸 해결 가능한 코드들이다.
const func4 = (x, y) => ({ x, y }); // 참고로 제네릭도 기본 값을 정해줄 수 있다.
const func5 = (x, y) => ({ x, y });
func5(1, 2); // 타입 추론도 제대로 된다.
const func6 = (x, y) => ({ x, y }); // 콤마 하나로도 되긴하는데.. 오타 같은 느낌.
export {};
