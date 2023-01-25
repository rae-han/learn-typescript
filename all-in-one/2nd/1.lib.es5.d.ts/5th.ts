// 오버로딩

declare function add(x: number, y: number): number;
declare function add(x: number, y: number, z: number): number;

// declare하면 함수 구현부를 안믇ㄹ어도 된다.
// 타입 정의만 하고 실제 코드는 다른데 있다고 속일수 있기 때문에 바디 부분 구현 안해도 된다.

add(1, 2);
add(1, 2, 3);

// 사실 옵셔널 연산자(?)를 쓰는 것이 더 좋다.
// 한번에 표현하는 것이 베스트지만 시간이 촉박하거나 실력이 부족하면 그냥 여러개 선언하자.

// interface, class 도 오버로딩 된다.

interface Add {
  (x: number, y: number): number;
  (x: string, y: string): string;
}

const add2: Add = (x: any, y: any) => x+y; // 오버로딩 해놨으면 실제 구현부에서는 any써도 위 타입으로 생각한다.
add2(1, 2)
add2('1', '2')
// add2(1, '2')

class A {
  add(x: number, y: number): number;
  add(x: string, y: string): string;

  add(x: any, y: any) {
    return x + y;
  }
}

const c1 = new A().add('1', '2'); // 오버로딩 해놨으면 실제 구현부에서는 any써도 위 타입으로 생각한다.
const c2 = new A().add(1, 2);

export {}

