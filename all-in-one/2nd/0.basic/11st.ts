// ts 4.8에서 추가된 {}
const x: {} = 'hello';
const y: Object = 'hi';

// {}, Object는 모든 타입을 가리킨다.

// const xx: object = 'hi';
const yy: object = { hello: 'world' };
const z: unknown = { hello: 'world' };

// unknown도 {}, Object 처럼 모든 값을 다 받을수 있는데 뭐가 다를까

// unknown === {} | null | undefined 이다.

if (z) {
  z; // {}
} else {
  z; // unknown?? null | undefined가 돼야하는데..
}
