function setLang(lang: string) {}

setLang('JS');

// let lang = 'JS';
// let lang: Languages = 'JS';
// sol 1. 타입을 사용하여 가능한 값을 제한하는 것.
// 오타도 표시해주는 장점이 있다.
const lang = 'JS';
// sol 2. 값을 상수로 만들어 주는 것.
// const 를 사용해 타입 체커에게 language 는 변경할 수 없다고 알려준다.
// 타입스크립트에서는 string이 아닌 더 정확하게 문자열 리터럴 타입인 JS로 타입추론 해준다.
// JS는 Languages보다 너 좁은 타입이므로 더 넓은 타입인 Languages에 대입 가능하다.

setLang(lang);

type Languages = 'JS' | 'TS' | 'ELX';
function setLanguage(lang: Languages) {}

setLanguage('JS');
setLanguage(lang); // TS2345: Argument of type 'string' is not assignable to parameter of type 'Languages'.

// 위는 문맥과 값을 분리했을 때 일어날수 있는 문제에 다뤘다.
// 하지만 문맥과 값을 분리하면 아래와 같은 근본적인 문제가 발생할수 있다.
// 그 해결법을 알아보자.

// # 튜플 사용시 주의점.
// function panTo(where: [number, number]) { }
//
// panTo([10, 20]);

// const loc = [10, 20];
// panTo(loc);
// TS2345: Argument of type 'number[]' is not assignable to parameter of type '[number, number]'. Target requires 2 element(s) but source may have fewer.
// 직접 인자 값으로 넣으면 할당 가능하지만
// 분리했을 경우 loc의 타입을 number[]로 추론하며, [number, number]에 할당할 수 없다.

// const는 변수 영역의 메모리 재할당을 막을수 있지만, 데이터 영역을 메모리 재할당을 막지 못하기 때문에
// 기본형 데이터는 불변 값일 경우 상수가 되지만, 참조형 데이터형일 경우 가장 넓은 타입인 number[]로 추론이 되게 돼 있다.

// 타입 선얼을 바로 제공하는 방법이 있다.
// const loc: [number, number] = [10, 20];
// panTo(loc);

// 상수 문맥(as const)를 제공하는 것이 있다.
// const 는 단지 값이 가리키는 참조가 불변 값이라면
// as const 는 그 값의 내부까지 불변값이 된다.

const loc = [10, 20] as const;
panTo(loc);
// TS2345: Argument of type 'readonly [10, 20]' is not assignable to parameter of type '[number, number]'. The type 'readonly [10, 20]' is 'readonly' and cannot be assigned to the mutable type '[number, number]'.
// 이 경우 값은 number[]가 아니라 readonly [10, 20]으로 추론된다.
// readonly [10, 20]은 [number, number]보다 더 좁은 타입이므로 매개변수 일 경우 대입할 수 없다.
// 이때 any를 사용하지 않는 최선의 해결책은 매개변수에 readonly를 붙이는 것이다.
function panTo(where: readonly [number, number]) {}

// 함수 시그니처(타입 시그니처, 메소드 시그니처)를 수정할 수 없는 경우라면 타입 구문을 사용해야 한다.
// as const는 문맥 손실과 관련한 문제를 해결할 수 있지만,
// 타입 정의에 실수가 있다면(위를 예로 튜플에 요소를 추가한다면) 오류는 타입 정의가 아닌 호출하는 곳에서 발생한다는 단점이 있다.
// 여러 겹 중첩된 객체에서 오류가 발생한다면 근본적인 원인을 파악하기 어렵다는 단점으로 이어진다.

// const loc2 = [10, 20, 30] as const;
// panTo(loc2)
// TS2345: Argument of type 'readonly [10, 20, 30]' is not assignable to parameter of type 'readonly [number, number]'.   Source has 3 element(s) but target allows only 2.

export {};
