export {}
// 타입 스크립트는 오버로딩 가능
// lib.es5.d.ts 파일을 보면 함수가 여러개 선언돼 있다.
// 사실 하나로 하면 좋긴한데 하나로 도저히 못하겠으면 두가지로 선언하자.

// declare를 통해 함수가 다른 곳에 구현돼 있다 속이고 함수를 정의 가능하다.

declare function add(x: number, y: number): number
declare function add(x: number, y: number, z: number): number

add(1, 2)
add(1, 2, 3)

// 번외로 옵셔널을 알았다면 아래와 같이 쉽게 해결 가능.
declare function add(x: number, y: number, z?: number): number

// 추가로 인터페이스와 클래스 안에서도 오버로딩 된다.
// 이너페이스는 1st, 2nd, 3rd 파일 참조

interface Add {
  (x: number, y: number): number;
  (x: string, y: string): string;
}

const add123: Add = (x: any, y: any) => x + y;
// 오버로딩 하면 any 사용해도 된다.
// 실제 검사할때 악영향을 미치는게 아니라 알아서 걸러준다.

class A {
  add(x: number, y: number): number;
  add(x: string, y: string): string;

  add(x: any, y: any) {
    return x + y;
  }
}