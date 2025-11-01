type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type StripSeparators<T extends string> = T extends `${infer A}-${infer B}`
  ? StripSeparators<`${A}${B}`>
  : T extends `${infer A} ${infer B}`
  ? StripSeparators<`${A}${B}`>
  : T;

type CollectDigits<
  T extends string,
  Acc extends unknown[] = []
> = T extends `${infer D}${infer Rest}`
  ? D extends Digit // 조건 1. 숫자가 아닌 문자가 있는지 확인
    ? CollectDigits<Rest, [...Acc, D]>
    : never
  : Acc;

type IsKoreanMobile<T extends string> =
  StripSeparators<T> extends `010${infer Rest}`
    ? CollectDigits<Rest> extends infer Digits
      ? Digits extends never
        ? never
        : Digits extends unknown[] // 길이 검사를 위해 배열인지 확인, 사실 없어도 되는데... never가 아니라면 배열이라는 것을 보장하기 위해 추가, 뺄 방법 있는지 고민해 봐야할 듯.
        ? Digits["length"] extends 8 // 조건 2. 010 다음엔 정확히 8자리여야 함
          ? T
          : never
        : never
      : never
    : never;

// 사용 예시
type OK = IsKoreanMobile<"01012345678">; // "01012345678"
type OKWithDashes = IsKoreanMobile<"010-1234-5678">; // "010-1234-5678"
type FailPrefix = IsKoreanMobile<"01112345678">; // never
type FailLength = IsKoreanMobile<"0101234567">; // never
type FailChar = IsKoreanMobile<"01012a45678">; // never

declare function sendSMS<T extends string>(
  to: IsKoreanMobile<T>,
  message: string
): void;

sendSMS("01012345678", "안녕하세요");
sendSMS("010-1234-5678", "구분자 있어도 OK");
sendSMS("01123456789", "안 됩니다");
sendSMS("0101234567", "테스트");
sendSMS("010o2345678", "테스트");
