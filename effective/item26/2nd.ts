// # 객체 사용 시 주의점.
// 문액에서 값을 뽑아내는 문제는 문자열 리터럴이나 튜플을 포함하는 큰 객체에서 상수를 뽑아낼 때도 발생한다.

type Language = 'JS' | 'TS' | 'ELX';
interface GovernedLanguage {
  language: Language;
  organization: string;
}

function complain(language: GovernedLanguage) {}

// complain({
//   language: 'TS',
//   organization: 'MS',
// });
//
// const ts = {
//   language: 'TS',
//   organization: 'MS',
// };
//
// complain(ts);
// TS2345: Argument of type '{ language: string; organization: string; }' is not assignable to parameter of type 'GovernedLanguage'.
// Types of property 'language' are incompatible.
// Type 'string' is not assignable to type 'Language'.

// ts.language 는 string으로 추론되기 때문에 위와 같은 문제가 발생한다.
// 이 역시 타입 선언을 추가하거나 상수 단언을 사용하면 된다.

// ## 1
// const ts: GovernedLanguage = {
//   language: 'TS',
//   organization: 'MS',
// };
//
// complain(ts);

// ## 2
const ts = {
  language: 'TS',
  organization: 'MS',
} as const;

complain(ts);

export {};
