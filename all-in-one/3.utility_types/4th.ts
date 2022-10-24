export {}

const obj = { name: 'reahan' };

function print(this: Window | typeof obj) {
  console.log(this.name);
}

const printName = print.bind(obj);
printName();

// ...args 는 this를 제외한 나머지 매개변수를 가져온다.
type NoThis = OmitThisParameter<typeof print>

// bind 메서드가 오버로딩이 많이 돼 있는 이유
// bind 는 this가 있는 경우와 없는 경우 두가지가 있다.(인수로 넣어줄 때)
// this를 덮어 씌우던가 null과 함께 인수를 추가하면 매개변수에 인수를 미리 추가해서 넣어준다.
// 이 때 인수를 추가하는 경우가 있어서 오버로딩이 많아진다.

// 타입스크립트가 문법적 한계로 5개 정도만 만들어놨다.. 대부분의 use case만 만들어놨다.
// 나머지는 AX가 있는 것으로 퉁치게 해놨다.
// bind 는 함수형 프로그래밍을 할때 매우 중요한데 문법적 한계로 이런 에로사항이 있다. 보완중이긴 하다..
// typescript 4.0 concat 같은 경우 개선 됐다.


