// enum
// enum은 하나의 변수를 그룹으로 묶고 싶을 때 많이 사용한다.

const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;
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
function walk(dir: EDirection) {
  console.log(dir);
}
// 참고로 숫자로 구성된 enum의 경우 값의 제한이 없으므로 0~3 외의 값 8, 9 같은 것도 들어간다.

type typeofODirection = typeof ODirection;
type keyofTypeofODirection = keyof typeof ODirection;

// 객체로 한걸 타입으로 쓰려면?
type TDirection = (typeof ODirection)[keyof typeof ODirection];
function run(dir: TDirection) {
  console.log(dir);
}

const obj = { a: 1, b: 2, c: 3 };
// keyof 는 위 객체에서 a, b, c만 꺼내올 수 있다.
// type Key = keyof obj;
// 이렇게 하면 아래와 같은 에러가 뜬다.
// TS2749: 'obj' refers to a value, but is being used as a type here. Did you mean 'typeof obj'?
// obj는 값을 참조하지만, 여기서는 형식(type)으로 사용되고 있습니다.

// 이럴 때는 obj를 typeof 키워드를 사용하여 타입으로 바꿔준다.
type TypeofObj = typeof obj; // {a: number, b: number, c: number}
type Key = keyof TypeofObj; // a | b | c

type TypeofObjKey = (typeof obj)[Key];
// 위 값은 number인데 obj 안에 있는 값들의 타입이 1, 2, 3 이 아니라 number이기 때문이다.

const obj2 = { a: 1, b: 2, c: 3 } as const;

type TypeofObj2 = typeof obj2; // {readonly a: 1, readonly b: 2, readonly c: 3}
type Key2 = keyof TypeofObj2; // a | b | c
type Value = (typeof obj2)[Key2]; // 1 | 2 | 3
// Value들의 타입만 가져오고 싶다! 라서 1, 2, 3이 된다. 만약 아까 as const가 아니였으면 값들의 타입인 number가 됐을 것이다.

const obj3 = { a: 123, b: true, c: 'hello' } as const;

type Value = (typeof obj3)[keyof typeof obj3];
