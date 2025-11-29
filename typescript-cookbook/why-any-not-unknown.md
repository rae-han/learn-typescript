# 왜 any를 사용하고 unknown을 쓰면 안 되는가?

## 결론부터
```typescript
function partialRight<
  Fn extends (...args: any[]) => any,      // ✅ any 사용
  Args extends unknown[]                    // ✅ unknown 사용
>(
  fn: Fn,
  args: [...Args],
): (...rest: DropLast<Parameters<Fn>, Args>) => ReturnType<Fn> {
  return (...rest: any[]) => fn(...rest, ...args);  // ✅ any 사용
}
```

## 왜 이렇게 써야 하는가?

### 1. `Fn extends (...args: any[]) => any`에서 any 사용

❌ **`unknown` 사용 시 문제:**
```typescript
Fn extends (...args: unknown[]) => unknown
```

**문제점:**
- `ReturnType<Fn>`이 `unknown`이 됨
- 실제 함수의 반환 타입을 잃어버림
- 타입 추론이 깨짐

**예시:**
```typescript
const greet = (a: string, b: string) => a + b;  // 반환: string

// Fn extends (...args: unknown[]) => unknown 사용
ReturnType<Fn> = unknown  // ❌ string을 잃어버림!

// Fn extends (...args: any[]) => any 사용
ReturnType<Fn> = string   // ✅ 정확히 추론!
```

✅ **`any` 사용 이유:**
- 모든 함수 타입을 허용하면서도
- 실제 타입 정보(`Parameters`, `ReturnType`)는 유지
- `any`는 "타입 체크 우회"가 아니라 "제네릭 제약"으로 사용

### 2. `Args extends unknown[]`에서 unknown 사용

✅ **`unknown` 사용이 맞음:**
```typescript
Args extends unknown[]
```

**이유:**
- `Args`는 실제 값이 아니라 타입 매개변수
- `unknown[]`로 충분히 제약 가능
- `any[]`보다 더 타입 안전

**비교:**
```typescript
// Args extends any[]
type Test1<T extends any[]> = T;
// → 타입 체크가 느슨함

// Args extends unknown[]
type Test2<T extends unknown[]> = T;
// → 타입 체크가 더 엄격하지만 충분히 유연함
```

### 3. 구현부 `(...rest: any[])` 에서 any 사용

❌ **`unknown` 사용 시 문제:**
```typescript
return (...rest: unknown[]) => fn(...rest, ...args);
```

**오류:**
```
Type '(...rest: unknown[]) => unknown' is not assignable to
type '(...rest: DropLast<...>) => ReturnType<Fn>'
```

**이유:**
- `unknown[]`를 스프레드하면 `fn(...rest)`의 반환 타입이 `unknown`이 됨
- 실제 반환 타입 `ReturnType<Fn>`과 맞지 않음

✅ **`any` 사용 이유:**
- 구현부는 타입 시그니처가 이미 보장하고 있음
- 런타임 동작을 위해 타입 체크 완화 필요
- 타입 시그니처가 안전성을 보장하므로 `any` 사용이 안전

## 핵심 정리

| 위치 | 사용 | 이유 |
|------|------|------|
| `Fn extends (...args: ?) => ?` | `any` | 타입 정보 유지 위해 |
| `Args extends ?[]` | `unknown` | 타입 안전성 위해 |
| 구현부 `(...rest: ?[])` | `any` | 런타임 동작 위해 |

## any vs unknown 언제 쓰나?

### any 사용 시기
1. **제네릭 제약에서 타입 정보 보존 필요**
   ```typescript
   <T extends (...args: any[]) => any>  // ReturnType<T> 정확히 추론
   ```

2. **구현부에서 타입 체크 완화 필요**
   ```typescript
   return (...args: any[]) => fn(...args);  // 타입 시그니처가 보장
   ```

### unknown 사용 시기
1. **타입 매개변수 제약**
   ```typescript
   <Args extends unknown[]>  // any[]보다 안전
   ```

2. **실제 값의 타입을 모를 때**
   ```typescript
   function parse(input: unknown) {  // 타입 가드 후 사용
     if (typeof input === 'string') { ... }
   }
   ```

## 실전 조언

✅ **좋은 패턴:**
```typescript
// 제네릭 제약: any (타입 정보 보존)
// 타입 매개변수: unknown (안전성)
// 구현부: any (필요시만)

function wrapper<F extends (...args: any[]) => any, A extends unknown[]>(
  fn: F,
  args: A
): (...rest: any[]) => ReturnType<F> {
  return (...rest: any[]) => fn(...rest, ...args);
}
```

❌ **나쁜 패턴:**
```typescript
// 모든 곳에 any
function wrapper<F extends (...args: any[]) => any, A extends any[]>

// 모든 곳에 unknown (타입 추론 깨짐)
function wrapper<F extends (...args: unknown[]) => unknown, A extends unknown[]>
```

## 마무리

**원칙:**
- `any`: "타입 정보를 유지하면서 모든 타입 허용" (제네릭 제약)
- `unknown`: "타입 안전하게 모든 타입 허용" (값 타입)

**우리 코드에서:**
- `Fn extends (...args: any[]) => any`: 함수 타입 정보 보존 ✅
- `Args extends unknown[]`: 타입 안전성 유지 ✅
- 구현부 `any[]`: 타입 시그니처가 보장하므로 안전 ✅
