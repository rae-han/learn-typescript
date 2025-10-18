/**

문제: logMessage 함수를 만들 것입니다.
 이 함수는 두 가지 형태의 파라미터를 받을 수 있습니다.
 param1 은 string 타입이거나 LogLevel 타입이 될 수 있습니다.
 param2 는 string 타입이거나 undefined 가 될 수 있습니다.


 로그레벨은 info, warn, error 세 가지 중 하나입니다.

 예제
 
에러메시지 하나를 받는 경우
logMessage('Hello');
로그 레벨과 에러메시지를 받는 경우
logMessage('warn', 'Hello');
 */

type LogLevel = 'info' | 'warn' | 'error';

function logMessage(message: string): void;
function logMessage(level: LogLevel, message: string): void;
function logMessage(param1: string | LogLevel, param2?: string): void {
  if (typeof param1 === 'string') {
    console.log(`[INFO]: ${param1}`);
  } else {
    console.log(`[${param1}]: ${param2}`);
  }
}

// 아래는 TS 오류가 발생해야합니다.
logMessage('info');
// logMessage('Hello', 'Test');

/**
function addClass(this: HTMLAnchorElement | HTMLDivElement) {
  this.classList.add('active');
}

const links = document.querySelectorAll('.nav-link');

// listener 의 타입을 지정해주세요
function addListener(listener: any) {
  links.forEach((link) => {
    link.addEventListener('click', listener);
  });
}

addListener(addClass);
 */
// function addClass(this: HTMLAnchorElement | HTMLDivElement) {
//   this.classList.add('active');
// }

// const links = document.querySelectorAll('.nav-link');

// function addListener(listener: (this: ThisParameterType<typeof addClass>) => void) {
//   links.forEach((link) => {
//     link.addEventListener('click', listener);
//   });
// }

// addListener(addClass);

// 어떤 이유로 HTML 요소를 CustomData로 캐스팅해야 하는 특이한 상황
const div = document.createElement('div');
div.dataset.id = '42';
div.dataset.name = 'ChatGPT';

// 아래 타입단언은 불가능하다.
// 어떻게 고쳐야할까?
// 왜 그렇게 고쳐야할까?
// 제시한 방법도 어떤 한계가 있을까요?
type WithDataset<T extends Record<string, string>> = HTMLElement & {
  dataset: DOMStringMap & T;
};

const customData = div as unknown as WithDataset<{ name: string }>;

console.log(customData.dataset.id);
console.log(customData.dataset.name);

class EmailValidator {
  // 아래 isEail 타입가드 함수가 정상적으로 작동하도록 해주세요.
  static [Symbol.hasInstance](value: unknown): boolean {
    if (typeof value !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }
}

// 타입 가드 함수 (별도로 필요)
function isEmail(value: unknown): value is string {
  return value instanceof EmailValidator;
}

const email1 = 'test@test.com';
const email2 = 'test.com';
const email3 = 'test@test.com';

console.log(isEmail(email1)); // true
console.log(isEmail(email2)); // false
console.log(isEmail(email3)); // true
