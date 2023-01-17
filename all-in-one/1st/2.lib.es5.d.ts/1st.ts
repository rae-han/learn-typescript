export {}

// interface Array<T> {
//
// } // 인터페이스도 제네릭을 사용 가능하다.

// type A<T> = string// 타입 에일리어스도 가능
// class A<T> { // 클래스도 가능
//
// }
// // 이름 뒤에 제네릭이 같이 온다. 자바스크립트로 넘어가면 사라진다.

// [1,2,3].forEach(() => {})
// web strom 기준 forEach 위에 커서를 두고 command + 아래 방향키를 누르면 상세한 구현 코드를 볼 수 있다.
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
// 타입스크립트가 기본적으로 자바스크립트에 대한 타입들을 추가해 놨기 때문에 보면서 공부하면 좋다.
// 생서앚 타이핑 하는 법도 위 코드 조각들을 통해서 힌트를 얻을수 있닫.

interface Array<T> {
  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;

  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];

  filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
  filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[]; // 일로 가긴 한다.
}

[1, 2, 3].forEach((value) => console.log(value)); //  value 가 자동으로 number타입이 된다.
['1', '2', '3'].forEach((value) => console.log(value)); // value 가 string으로 타입 추론 된다.
[1, '2', true].forEach((value) => console.log(value)); // value 가 string | number | boolean 으로 타입 추론 된다.
// 어떻게 이것까지 다 타입 추론 될까? 위 인터페이스 Array에 붙은 T 덕분이다.

const a: Array<number> = [1, 2, 3];
const b: number[] = [1, 2, 3]; // 위와 같다.
a.forEach((value) => console.log(value)); // Array<number>에서 T를 number로 지정해 줬기 때문에 value 타입이 number가 되는 것이다.

function add<T>(x: T, y: T): T {
  return x;
}

add(1, 2); // x의 T가 number가 되면 나머지도 다 number가 된다.
// 즉 하나가 정해지면 나머지도 다 같읕 압이 된다.
// 아래와 같이 직접 지정해 줄수 있다. 타입스크립트가 추론을 못할 때 좋다. 타입 파라미터라 부른다.
add<number>(1, 2); // 위는 1 | 2 로 타입이 추론된다면 이 코드는 정확하게 number로 추론 된다.
// 참고로 아래와 같이 <number>가 앞에 붙으면 as 키워드와 마찬가지로 타입 강제 지정임에 유의하자.
// <number>add(1, 2)

const strings = [1, 2, 3].map((value) => value.toString());
// 타입스크립트가 어떻게 잘 추론할수 있었을까?
// [1, 2, 3] 이 하나씩 드렁오면 value의 타입인 T는 다 number로 추론된다.
// callback function 의 리턴값이 U이다. toString 메서드를 사용하면 string이 되기 때문에 map<U>와 U[]의 U가 string이 된다.

const filtered= [1, 2, 3, 4, 5].filter((value) => value % 2)
// 필터는 두개가 선언돼 있다?
// 같은 함수가 여러가지 방법으로 사용되는 경우 타입이 여러번 선언돼 있을수 있다.
// IDE에서는 아래 코드로 보내주긴 하는데 unknown보단 타입을 추론해 주는게 좋지 않을까?

const stringFiltered1 = ['1', 2, '3', 4, '5'].filter((value) => typeof value === 'string');
// string 값만 들어올 것이 분명한데도 string | number 타입으로 추론한다.
// 위 아래 둘 다 타입 확인을 할 때
// 첫 번째 기준으로 <S extends T> 에서 T가 string | number가 된다. 그럼 S도 string | number가 되고 리턴 값이 (string | number)[] 가 된다.
// 두 번째도
// 이걸 string으로 바꾸려면 작성된 코드의 predicate 함수
// 부분을 바꿔주면 된다.
// 선언된 filter 함수 둘 중 위에 함수를 이요해줘야 한다.
// 왜냐하면 위에는 S를 사용하기 때문에 T가 무엇이 들어오든 바꿀수 있는 일말의 가능성이 있지만 아래는 무조건 들어오는 대로 타입이 결정 되므로 가능서잉 없다.
const predicate  = (value: string | number): value is string => typeof value === 'string';
const stringFiltered2 = ['1', 2, '3', 4, '5'].filter(predicate);
// 정확하게 string[] 으로 타입추론 한다.

// const result = ['1', 2, '3', 4, '5'].filter<string extends string | number>((value) => typeof value === 'string');
// 위 코드에서 T는 어차피 정해지기 때문에 S만 적어줘도 된다 아래와 같이
// const result = ['1', 2, '3', 4, '5'].filter<string>((value) => typeof value === 'string');
// 그럼에도 안되는 이유는 커스텀 타입 가드가 안되기 때문이다.
// 함수 형식에 형식 조건자 즉 value is string 이 있어야 한다. 그러므로 아래 코드는 동작한다.
const result = ['1', 2, '3', 4, '5'].filter<string>(predicate);






