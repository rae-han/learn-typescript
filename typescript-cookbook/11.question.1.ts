/**
 * 파일 1
 */
// class 관련된 모든 사항을 적용해볼 수 있도록 해보자.
// 조건을 확인하고 필요한 코드들을 추가해주세요.

// 문제의 의도는 클래스에 접근자, 제네릭, 상속, 오버라이딩 등등의 기법들을 적절하게 활용하여, 재사용성 높은 코드를 만들어 내는지 입니다.

type FuelType = 'gasoline' | 'electric';
// 연료 시스템 인터페이스
interface FuelSystem {
  refill(current: number, input: number, max: number): number;
}

class SilentFuelSystem implements FuelSystem {
  refill(current: number, input: number, max: number): number {
    if (current + input > max) return current;
    return current + input;
  }
}

class StrictFuelSystem implements FuelSystem {
  refill(current: number, input: number, max: number): number {
    if (current + input > max) {
      throw new Error('최대 충전량을 초과했습니다.');
    }
    return current + input;
  }
}

abstract class MCar {
  public brand: string;
  public model: string;
  public fuelType: FuelType;
  protected currentFuel: number;
  protected maxFuel = 100;
  private _price: number;

  // 합성: FuelSystem을 주입받아 사용
  protected fuelSystem: FuelSystem;

  constructor(brand: string, model: string, fuelType: FuelType, price: number, fuelSystem: FuelSystem) {
    this.brand = brand;
    this.model = model;
    this.fuelType = fuelType;
    this._price = price;
    this.currentFuel = 0;
    this.fuelSystem = fuelSystem;
  }

  // 조건 >
  // drive() 함수와 stop() 함수는 Car 클래스 내부에 구현하지 마세요.
  // 그 외 나머지 필요한 함수들을 구현해주세요.

  movingNoise(): void {
    if (this.fuelType === 'gasoline') {
      console.log(`Vroom Vroom....`);
    } else if (this.fuelType === 'electric') {
      console.log(`Whirring~~~~`);
    }
  }

  // 추상 메서드: 자식 클래스에서 반드시 구현해야 함
  abstract drive(): void;
  abstract stop(): void;

  // 합성 패턴: FuelSystem에 위임
  refill(input: number): void {
    this.currentFuel = this.fuelSystem.refill(this.currentFuel, input, this.maxFuel);
  }

  // 기본 구현: 자식에서 override 가능
  info(): string {
    return `${this.brand} ${this.model}`;
  }

  // getter: private _price 접근용
  get price(): number {
    return this._price;
  }
}

// 자식 class조건 >
// drive() 함수와 stop() 함수는 자식 클래스에서 필수로 구현되어야 합니다.
// info() 함수는 필수가 아니지만 재정의를 했다면, 부모클래스에서 변경됐을 시 자식 클래스에서 빌드 오류를 인지 할 수 있어야 합니다.
// refill() 함수는 합성 패턴으로 FuelSystem에 위임됨
class PastCar extends MCar {
  constructor(brand: string, model: string, fuelType: FuelType, price: number) {
    super(brand, model, fuelType, price, new SilentFuelSystem());
  }

  drive(): void {
    console.log(`${this.brand} ${this.model} is driving...`);
  }
  stop(): void {
    console.log(`${this.brand} ${this.model} is stopping...`);
  }
}

class FutureCar extends MCar {
  constructor(brand: string, model: string, fuelType: FuelType, price: number) {
    super(brand, model, fuelType, price, new StrictFuelSystem());
  }

  drive(): void {
    console.log(`${this.brand} ${this.model} is driving...`);
  }
  stop(): void {
    console.log(`${this.brand} ${this.model} is stopping...`);
  }

  override info(): string {
    return `${this.brand} ${this.model} 미래차`;
  }
}

/**
 * 파일 2
 */
// 결론 >
// 위에 로그 찍는 코드들이 모두 완성되면, 아래의 코드가 정상 동작해야합니다.
const oldCar = new PastCar('현대', '소나타', 'gasoline', 800000);
console.log(oldCar.refill(200));
// undefined
console.log(oldCar.movingNoise());
// Vroom Vroom....
console.log(oldCar.price);
// 출력: 800000
console.log(oldCar.info());
// 출력: 현대 소나타

const newCar = new FutureCar('현대', '아이오닉', 'electric', 10000000);
console.log(newCar.refill(200));
// 에러 발생: 최대 충전량을 초과했습니다.
console.log(newCar.movingNoise());
// Whirring~~~~
console.log(newCar.price);
// 출력: 10000000
console.log(newCar.info());
// 출력: 현대 아이오닉 미래차

/**
 * TODO LIST
 *
 * ========================================
 * 수정 내용 및 이유 (11장 클래스 개념 적용)
 * ========================================
 *
 * 1. MCar 클래스에 추상 메서드 추가 (abstract drive, stop)
 *    - 이유: 자식 클래스에서 반드시 구현하도록 강제하기 위함
 *    - 11장 개념: 추상 클래스와 추상 메서드 (11.3, 11.5절)
 *    - 효과: 추상 메서드를 구현하지 않으면 컴파일 에러 발생
 *
 * 2. MCar 클래스에 info() 메서드 추가 (기본 구현)
 *    - 이유: 자식 클래스에서 선택적으로 재정의(override) 가능하도록
 *    - 11장 개념: 메서드 재정의와 override 키워드 (11.2절)
 *    - 효과: 부모의 info() 이름/시그니처 변경 시 자식에서 빌드 오류 감지
 *
 * 3. MCar 클래스에 price getter 추가
 *    - 이유: private _price 필드에 읽기 전용 접근 제공
 *    - 11장 개념: 가시성 변경자와 캡슐화 (11.1절)
 *    - 효과: 외부에서 price 값을 읽을 수 있지만 직접 수정은 불가
 *
 * 4. PastCar, FutureCar에 'extends MCar' 추가
 *    - 이유: 부모 클래스의 프로퍼티(brand, model 등)와 메서드 상속
 *    - 11장 개념: 클래스 상속과 코드 재사용 (11.3절)
 *    - 효과: this.brand, this.model, movingNoise() 등 접근 가능
 *
 * 5. FutureCar.info()에 override 키워드 사용
 *    - 이유: 부모 메서드를 재정의함을 명시적으로 표현
 *    - 11장 개념: noImplicitOverride 플래그와 override (11.2절)
 *    - 효과: 부모의 info() 삭제/변경 시 컴파일 에러로 즉시 인지
 *
 * ========================================
 * 합성(Composition) 패턴 적용 (리팩토링)
 * ========================================
 *
 * 6. FuelSystem 인터페이스 도입
 *    - 이유: 연료 충전 정책을 추상화하여 다양한 전략으로 교체 가능하도록
 *    - 개념: 전략 패턴 (Strategy Pattern)
 *    - 효과: 새로운 연료 정책 추가 시 클래스 상속 없이 구현체만 추가
 *
 * 7. SilentFuelSystem, StrictFuelSystem 구현
 *    - SilentFuelSystem: 초과 시 조용히 무시 (PastCar용)
 *    - StrictFuelSystem: 초과 시 에러 발생 (FutureCar용)
 *    - 효과: 연료 정책 로직이 별도 클래스로 분리되어 테스트 용이
 *
 * 8. MCar에서 FuelSystem을 생성자 주입으로 받음
 *    - 이유: 의존성 주입(DI)으로 결합도 감소
 *    - 효과: 런타임에 연료 정책 교체 가능, Mock 테스트 용이
 *
 * 9. refill() 메서드가 FuelSystem에 위임
 *    - 이유: "상속보다 합성(Composition over Inheritance)" 원칙
 *    - 효과: 자식 클래스에서 refill 로직을 직접 구현할 필요 없음
 *
 * ========================================
 * 적용된 가시성 변경자 정리
 * ========================================
 * - public: brand, model, fuelType (외부 접근 허용)
 * - protected: currentFuel, maxFuel, fuelSystem (자식 클래스에서 접근 허용)
 * - private: _price (클래스 내부에서만 접근, getter로 읽기 제공)
 *
 * ========================================
 * 합성 vs 상속 비교
 * ========================================
 * | 상속 방식                | 합성 방식                    |
 * |-------------------------|------------------------------|
 * | 자식 클래스에서 직접 구현 | FuelSystem 구현체에 위임      |
 * | 컴파일 타임에 고정        | 런타임에 교체 가능            |
 * | 클래스 계층 증가          | 객체 조합으로 유연성 확보      |
 * | 테스트 시 전체 클래스 필요 | FuelSystem만 Mock 가능        |
 */
