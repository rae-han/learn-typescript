"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [1, 2, 3];
// const strings: Arr<string> = ['a', 'b', 'c'];
//
// const mappedNumbers = numbers.map((number) => number + number);
// const mappedStrings = strings.map((string) => +string);
// const test = numbers.map((number) => number.toString()); // 1.
// const even = numbers.filter((v) => v % 2 === 0)
// ?
// 2.
const mixedTypeData = [1, '2', 3, '4', 5];
// const filteredString = mixedTypeData.filter((v) => typeof v === 'string') // string | number
// const filteredString = mixedTypeData.filter((value): value is string  => typeof value === 'string') // string | number
// 3. 오류는 업시만 여전히 타입은 string | number이다.
// 4.
const filteredString = mixedTypeData.filter((value) => typeof value === 'string'); // string | number
// string 으로 타입은 정상적이지만 위에 value is S 의  S 부분에 에러가 난다.
// 왜냐면 제네릭인 T, S의 연관성을 찾을 수 없는데 T 타입이 값자기 S 타입으로 반환된다.
// 이때 허용되는 케이스가 하나 있긴한데 S가 T의 부분집할 일때다.
// 그리고 predicate 콜백 함수가 하는 역할이 타입의 범위를 좁혀주는 역할을 할 때이다.
// 5. <S extends T> 를 사용해주면 에러가 사라진다.
// 가독성을 조금 더 높이려면 predicate 내부 함수를 따로 적어준다.
const predicate = (value) => typeof value === 'number'; // 다만 여기서도 형식을 맞추기 위해 형식 조건자인 value is number를 반드시 적어줘야 한다.
const filteredNumbers = mixedTypeData.filter(predicate);
