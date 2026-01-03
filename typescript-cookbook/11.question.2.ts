type LogLevel = 'ERROR' | 'INFO' | 'WARN';

/**
 * 메서드 데코레이터 팩토리
 * @param level - 로그 레벨 ('ERROR' | 'INFO' | 'WARN')
 * @returns 메서드 데코레이터
 */
function log(level: LogLevel) {
  return function <This, Args extends unknown[], Return>(
    value: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext,
  ) {
    const methodName = context.name.toString();

    return function (this: This, ...args: Args): Return {
      console.log(`[${level}-START] ${methodName}`, args);
      const result = value.call(this, ...args);
      console.log(`[${level}-END] ${methodName}`, result);
      return result;
    };
  };
}

class UserService {
  @log('INFO')
  getUser(id: number) {
    return { id, name: 'Alice' };
  }

  @log('INFO')
  getUsers() {
    return [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];
  }

  @log('WARN')
  deleteUser(id: number) {
    return { id, name: 'Alice' };
  }
}

const service = new UserService();

service.getUser(1);
service.getUsers();
service.deleteUser(1);

/**
[INFO-START] getUser [ 1 ]
[INFO-END] getUser { id: 1, name: 'Alice' }

[INFO-START] getUsers []
[INFO-END] getUsers [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ]

[WARN-START] deleteUser [ 1 ]
[WARN-END] deleteUser { id: 1, name: 'Alice' }
 */

/**
 * TODO LIST
 *
 * ========================================
 * 수정 내용 및 이유 (11장 데코레이터 개념 적용)
 * ========================================
 *
 * 1. 데코레이터 팩토리 함수 log(level) 구현
 *    - 이유: @log('INFO') 형태로 인자를 받아 동작을 커스터마이즈하기 위함
 *    - 11장 개념: 데코레이터 팩토리 (11.9절)
 *    - 효과: 로그 레벨을 동적으로 지정 가능 (INFO, WARN, ERROR)
 *
 * 2. ClassMethodDecoratorContext 타입 사용
 *    - 이유: 메서드 데코레이터의 컨텍스트 정보(이름, 종류 등)를 얻기 위함
 *    - 11장 개념: 데코레이터 컨텍스트와 kind 프로퍼티 (11.9절)
 *    - 효과: context.name으로 데코레이팅된 메서드 이름 접근
 *
 * 3. 제네릭 타입 매개변수 <This, Args, Return> 적용
 *    - 이유: 어떤 메서드에도 적용 가능하도록 타입 안전성 확보
 *    - 11장 개념: 제네릭으로 형식 강화 (11.9절)
 *    - 효과: 원본 메서드의 this, 인자, 반환값 타입 유지
 *
 * 4. value.call(this, ...args)로 원본 메서드 호출
 *    - 이유: 데코레이터 내부에서 this 컨텍스트를 올바르게 유지하기 위함
 *    - 11장 개념: 래퍼 함수에서 원본 메서드 실행 (11.9절)
 *    - 효과: 클래스 인스턴스의 this가 원본 메서드에서 정상 동작
 *
 * 5. 메서드 실행 전후 로그 출력 추가
 *    - 이유: 텔레메트리/디버깅 목적으로 메서드 호출 추적
 *    - 11장 개념: 비동기 메서드 처리 전 동기 버전 구현 (11.9절)
 *    - 효과: [LEVEL-START]와 [LEVEL-END]로 메서드 진입/종료 시점 파악
 *
 * ========================================
 * 데코레이터 구조 분석
 * ========================================
 *
 * log(level)                    ← 1단계: 데코레이터 팩토리 (level 인자 받음)
 *   └─ return function(value, context)  ← 2단계: 실제 데코레이터
 *        └─ return function(...args)    ← 3단계: 래퍼 함수 (원본 메서드 대체)
 *
 * ========================================
 * 적용된 개념 정리 (TypeScript Cookbook 11.9절)
 * ========================================
 *
 * | 개념                        | 코드                         | 설명                            |
 * |-----------------------------|------------------------------|---------------------------------|
 * | 데코레이터 팩토리           | log(level)                   | 인자를 받아 데코레이터 반환     |
 * | ClassMethodDecoratorContext | context 파라미터             | 메서드 데코레이터 컨텍스트 타입 |
 * | context.name                | context.name.toString()      | 메서드 이름 얻기                |
 * | 제네릭 This/Args/Return     | <This, Args, Return>         | 타입 안전성 확보                |
 * | value.call(this, ...args)   | 원본 메서드 호출             | this 컨텍스트 유지              |
 *
 * ========================================
 * TypeScript 5.0+ 표준 데코레이터 vs 레거시
 * ========================================
 *
 * | 특성                 | experimentalDecorators | 표준 데코레이터 (TS 5.0+) |
 * |----------------------|------------------------|---------------------------|
 * | 플래그 필요          | O                      | X                         |
 * | 메타데이터 API       | reflect-metadata 필요  | 내장 context 제공         |
 * | 매개변수 데코레이터  | O                      | X (아직 미지원)           |
 * | Angular/NestJS 호환  | O                      | 마이그레이션 필요         |
 *
 * - ClassMethodDecoratorContext는 lib.decorators.d.ts에 정의됨
 * - ECMAScript 표준 데코레이터 (TC39 Stage 3 → 채택)
 */
