const people = ['alice', 'bob', 'jan'];
const assertPeople = ['alice', 'bob', 'jan'].map(name => ({}));
// [ {}, {}, {} ] 이지만 타입 체커가 통과해 나중에 런타임에서 문제를 야기할 수 있다.
const declarePeople1 = ['alice', 'bob', 'jan'].map(name => {
    const person = { name };
    return person;
});
// 화살표 함수 안에서 타입과 변수를 선언하는 것이 직관적이다. 다만 번잡하다.
// 반환 타입을 명시하는 방법
const declarePeople2 = ['alice', 'bob', 'jan'].map((name) => ({ name }));
// 체이닝이 연속되는 경우 체이닝 시작부터 명명된 타입을 가져야한다.
const declarePeople3 = ['alice', 'bob', 'jan'].map((name) => ({ name })).map(item => item);
const declarePeople4 = ['alice', 'bob', 'jan'].map((name, index) => ({ name })).map(item => item);
const elNull = document.querySelector('#app'); // Element | null 타입
const el = document.querySelector('#app'); // Element 타입
const body = document.body;
export {};
