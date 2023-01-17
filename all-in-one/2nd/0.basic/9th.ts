// 타입 가드
function numOrStr(value: number | string) {
  // 타입스크립트는 모든 경우의 수를 다 생각하기 때문에 바로 toFixed, toString 같은 함수를 못쓴다.
  // value.toFixed(1)

  (value as number).toFixed(1);
  // 동작은 하지만 위험한 코드이다. 개발자가 실수를 할수 있기 때문에..
  // unknown이나 남이 만든 타입이 틀렸을 때 제외하면 as는 안쓰는게 좋다.

  // 타입 가드를 사용하자.
  if (typeof value === 'number') {
    value.toFixed(1)
  } else {
    value.charAt(3)
  }

  if (typeof value === 'string') {
    value.charAt(3)
  }

  if (typeof value === 'boolean') {
    value;
    // 함수의 매개변수 타입상 boolean이 올수 없기 때문에 never가 뜬다.
  }
}

function numberOrNumArray (value: number | number[]) {
  if (Array.isArray(value)) {
    value.concat(4); // 배열은 isArray 배열 메서드로 구분하면 된다.
  } else {
    value.toFixed(3);
  }
}
numberOrNumArray(123);
numberOrNumArray([1, 2, 3])

// 타입스크립트에서는 &의 등장 빈도수가 적고 |가 많이 나오는데 이때 타입을 구분해주는 것이 중요하다.

class A {
  aaa() {}
}
class B {
  bbb() {}
}

function aOrB(param: A | B) {
  if (param instanceof A) {
    param.aaa(); // 클래스를 구분할 때는 instanceof
    // 모드 유효한 자바스크립트 코드이다.
  } else {
    param.bbb();
  }
}

// 클래스는 자체로 타입이 될수 있는데 클래스 자체를 뜻하는 것이 아니라 인스턴스를 나타낸다.
// aOrB(A)
aOrB(new A())
aOrB(new B())

// 또는 안에 속성을 둬서 구별을 하는 방법도 많이 쓰인다.
type C = { type: 'c', ccc: string }
type D = { type: 'd', ddd: string }
type E = { type: 'e', eee: string } // type 값을 똑같이 d로 하면 에러가 뜬다. D | E 로 추론을 할것이기 때문. 그리고 else는 해당되는 거싱 없을 것이기 때문에 never가 될 것이다.
function typeCheck(item: C | D | E) {
  if (item.type === 'c') {
    item.ccc;
  } else if (item.type === 'd') {
    item.ddd
  } else {
    item.eee;
  }
}
// type을 안쓰고 속성 이름이 다르다면 속성 이름으로도 구분 가능하다.
function typeCheckIn(item: C | D | E) {
  if ('ccc' in item) {
    item.ccc;
  } else if ('ddd' in item) {
    item.ddd
  } else {
    item.eee;
  }
}
// 하지만 type 속성의 값으로 구분하는 방법을 더 많이 쓴다.
// 그렇기 때문에 type 속성을 넣는 습관을 들이면 좋다.
// 객체에 태그를 단다. 라벨을 단다 라는 표현을 많이 쓴다.


export {}