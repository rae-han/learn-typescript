function func(x: string, y: number, z: boolean): {x: string, y: number, z: boolean} {
  return {x, y, z}
}

// type Params = Parameters<func> // 변수는 바로 못쓴다.
type Params = Parameters<typeof func>
// Params는 튜플처럼 나온다.

type check = Params[0];
// 타입도 배열처럼 접근 가능하다.

type _Parameters<T extends (...args: any) => any> = T extends (...args: infer A) => any ? A : never;
// 앞 뒤 같은 모양임에 유의
// infer 는 extends 키워드에서만 사용 가능.
// 추론을 뜻하는 인퍼런스에서 나왔다
// 추론 조건 ? 추론 성공 시의 값 : 추론 실패 시의 값
type _Params = _Parameters<typeof func>

// 위 Parameter를 응용해서 리턴 타입을 반환하는 함수를 만드려면?
// infer 위치만 잘 바꿔주면 되지 않을까??
type _ReturnTypes<T extends (...args: any) => any> = T extends (...args: any) => infer A ? A : never;
type RTS = _ReturnTypes<typeof func>

export {}
