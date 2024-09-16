const array = [1, 2, 3];
array.forEach((value) => { });
// command + 마우스 좌클릭
array.map((value) => value);
array.filter((value) => value);
class C {
}
function func(x) { return x; }
func(123);
func(123); // 타입 파라미터를 넣어주면 T의 값을 지정해줄 수 있다. 참고로 앞에 붙으면 as이다 위치 조심하자.
const filtered1 = ['1', 2, '3', 4, '5'].filter((value) => typeof value === 'string');
// filtered는 자바스크립트에서 string 값만 남을 것인데 왜 (string | number)가 되지?
// 위 첫번째 filter 기준으로 T가 stirng | number S는 (string | number)가 되므로 마지막 리턴 값이 (stirng | number)[] 가 되버린다.
// 두번째 기준으로도..
// 두번째 기준은 리턴 값이 T로 고정이 돼 있지만 첫번째 타입은 S로 바뀔 가능성이 있기 때문에 저걸 이용해야한다.
// S extends T(=string | number)면 S가 string | number, string, number 3가지가 되기 때문이다.
// predicate를 빼서 똑같이 만들어 준 후 S를 지정해보자.
const predicate = (value) => typeof value === 'string';
const filtered2 = ['1', 2, '3', 4, '5'].filter(predicate);
// const filtered3 = ['1', 2].filter<string extends string | number>((value) => typeof value === 'string');
// 이게 안되는 이유는 아마도 커스텀 타입가드라 아니여서.
// predicate 함수가 형식 조건자여야한다.
const filtered4 = ['1', 2].filter(predicate);
export {};
