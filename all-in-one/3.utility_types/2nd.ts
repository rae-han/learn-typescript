export { }

function zip(x: number, y: string, z: boolean): { x: number, y: string, z: boolean } {
  return { x, y, z }
}

// type Params = Parameters<zip>
// 변수는 바로 쓰지 못한다.
// 변수의 타입을 꺼내려면?
// type Params = Parameters<typeof zip>
type Params = MyParameters<typeof zip>

type Param1 = Params[0]
type Param2 = Params[1]
type Param3 = Params[2]
// 각각 파라미터에 해당하는 타입이 나온다.

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer A) => any ? A : never
// 1. T extends (...args: any) => any 는 함수를 제한자로 두는 방법
// 2. 앞과 뒤의 구조는 비슷해보이지만 의미는 다르다
// 2. 앞은 T는 함수여야한단 뜻이고 뒤는
// 3. infer는 extends 안에서만 사용 가능한 예약어로 타입스크립트ㅏㄱ 알아서 추론하게 하는 것으로 타입스크립트가 매개변수 자리를 알아서 추란하란 뜻이다.
// 3. 추론 조건 ? 추론 성공 시의 값 : 추론 실패 시의 값

// 위를 응용하면 리턴 타입도 가져올수 있지 않을까?
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer A ? A : never
// infer를 리턴 자리로?

// type Returns = ReturnType<typeof zip>
type Returns = MyReturnType<typeof zip>

type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;
// 생성자 대상으로 쓰인다
// 원리는 같다. T의 제한이 있고, 뒤에 infer를 사용할 때도 똑같이 제한이 있다.

type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;
// 위 아래 모두 <T extends abstract new (...args: any) => any> 로 앞의 모양이 같고
// 매개변수나 인스턴스 자리에 infer를 넣는 순간 그 자리가 추론이 되는 것이다.
// 타입 스크립트의 추론 능력을 믿고

class ConstructorClass {
  x: string;
  y: number;
  z: boolean;

  constructor(x: string, y: number, z: boolean) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const inst = new ConstructorClass('abc', 123, true);

type C = ConstructorParameters<typeof ConstructorClass>
// 왜 typeof 를 붙여야 하는지 생각해보자.
// C's type [string, number, boolean]

type I = InstanceType<typeof ConstructorClass>
// I's type ConstructorClass

// 여기서 추가로 알아가면 좋은게 클래스는 타입으로 바로 사용할 수 있다.
// 실제로 위 기준으로 ConstructorClass란 타입이 있는 것이다.

const i: ConstructorClass = new ConstructorClass('abc', 123, false)
// 하지만 위에서 : ConstructorClass 부분은 실제로 클래스가 아니라 인스턴스이다.
// 즉 new 붙여서 실제 객체로 만들어진 것의 타입으로 사용 가능하다는 것이다.
// 생성자 타입 가져올 땐 typeof [ClassName]을 해야한다.
// 그래서 위에 ConstructorParameters, InstanceType 의 제네릭 매개변수에 typeof 를 붙인것이다.
// 즉 T가 생성자(constructor)인걸 알려주는 것이 abstract new (...args: any) => any 이다.

// Uppercase, Lowercase, Capitalize 이런 것들은 구현 방법이 안나와 있다.
// 타입스크립트로 구현할 수 없어서 내부적으로 처리만 해둔 듯?

const introduction = 'Hello world';
// @ts-ignore
const upperIntroduction: Uppercase<typeof introduction> // 타입 이름을 대문자로 만들어버린다.
// const upperIntroduction: Uppercase<typeof introduction> = introduction.toUpperCase() // 실제 구현은 이거일듯?
// 하지만 들어가 보면 구현 대신 intrinsic 으로 돼 있는데 타입스크립트로 구현이 안돼서 따로 처리를 했다는 뜻이다.

/**
 * Convert string literal type to uppercase
 */
type Uppercase<S extends string> = intrinsic;

/**
 * Convert string literal type to lowercase
 */
type Lowercase<S extends string> = intrinsic;

/**
 * Convert first character of string literal type to uppercase
 */
type Capitalize<S extends string> = intrinsic;

/**
 * Convert first character of string literal type to lowercase
 */
type Uncapitalize<S extends string> = intrinsic;

// 위 네개는 코드로 구현이 돼 있지 타입으로 안돼있다.
// function applyStringMapping(symbol: Symbol, str: string) {
//   switch (intrinsicTypeKinds.get(symbol.escapedName as string)) {
//     case IntrinsicTypeKind.Uppercase: return str.toUpperCase();
//     case IntrinsicTypeKind.Lowercase: return str.toLowerCase();
//     case IntrinsicTypeKind.Capitalize: return str.charAt(0).toUpperCase() + str.slice(1);
//     case IntrinsicTypeKind.Uncapitalize: return str.charAt(0).toLowerCase() + str.slice(1);
//   }
//   return str;
// }

/**
 * Marker for contextual 'this' type
 */
interface ThisType<T> { }
// this의 타입을 내부적으로 어떻게해서 가져온다.

