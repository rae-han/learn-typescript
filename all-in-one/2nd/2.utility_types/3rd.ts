class Sample {
  a: string;
  b: number;
  c: boolean;

  constructor(a: string, b: number, c: boolean) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

const sample: Sample = new Sample('abc', 123, true)

type CP = ConstructorParameters<typeof Sample>
type IT = InstanceType<typeof Sample>

// typeof Sample을 사용하는 이유는 클래스는 이름을 타입으로 사용할 수 있지만
// 클래스의 타입이 아닌 인스턴스의 타입이기 때문이다.
// 클래스 자체의 타입을 나태내려면 typeof 을 붙여야한다.

// intrinsic 은 타입스크립트로는 구현이 안돼서 뭔가 작업을 했단 뜻.

export {}