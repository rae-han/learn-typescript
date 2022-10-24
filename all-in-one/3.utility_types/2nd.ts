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
type MyReturns<T extends (...args: any) => any> = T extends (...args: any) => infer A ? A : never
// infer를 리턴 자리로?

// type Returns = ReturnType<typeof zip>
type Returns = MyReturns<typeof zip>




