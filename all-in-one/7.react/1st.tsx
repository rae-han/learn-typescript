// 모듈 명 밑에(import)가 에러가 나면 해당 모듈을 사용하는 코드는 모두 에러가 안나므로 모듈에 에러가 없는지 먼저 확인해야한다.
import * as React from 'react';
import {useState, useCallback, useRef, useEffect, FunctionComponent, FC, FormEvent, MouseEvent} from 'react';
// react 들어가보면 export = 로 돼 있다 왜냐면 commonjs 모듈이기 때문에.
// esModuleInterop 덕분에 import React from 'react'를 사용해도 된다.
// jsx를 인식해주려면 해당하ㅡㄴ 설정을 해줘야한다. tsconfig에서는 jsx를 react로 해준다.

// ReactElement의 type, props, key는 DevTools에서 사용하는 것이라 흐린눈 해도 괜찮다.
// 사용자는 JSX의 완성된 문법을 사용하는 것이다.

interface P {
  name: string,
  title: string,
}

// const WordRelay: FunctionComponent = () => {
  // (props) => JSX
  // WordRelay가 React.Element 에서 JSX.Element 로 바꼈다. 사실상 타고 올라가면 같은 것이다.
  // JSX.Element를 굳이 사용할때 네임스페이스라 JSX를 import 안해도 된다.

// const WordRelay = (props: P) => {
  // props에 부모로부터 값이 들어온다면 위에 인터페이스를 만들어서 타입을 만들어주면 된다. (interface P)
  // 함수 반환 값은 정해져 있어서 굳이 안해도 되지만 하고 싶다면 해도 된다.

// const WordRelay: FunctionComponent<P> = (props) => {
  // FunctionComponent의 porps는 기본이 빈 배열이라 매개변수를 선언한다면 에러가 난다.
  // 가장 조흔 방법은 제네릭을 이용하는 방법

// const WordRelay: FC<P> = (props) => {
  // 자체적으로 FC로 축약된 값이 있다.
// VFC는 칠드런이 없고 FC는 칠드런이 있다. 17버전까진 그랬는데 지금은 FC로 통일 됐다.
// 이제 children을 받고 싶다면, props 타입에 children?: ReactNode | undefined 를 추가해 줘야한다.

function WordRelay(props: P) {
  const [word, setWord] = useState<string>('제로초');
  // <string> 은 자동으로 초론된다.
  // function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log('useEffect');
  }, []);

  useEffect(() => {
    setWord((prev) => {
      // setWord 함수는 비동기지만, 반환 값이 promise가 아닌 void이기 때문에 async를 붙일 수 없다.
      return prev + '2';
    });
  }, [])

  // useEffect(async () => { await ~ }, [])
  // useEffect는 구조가 고정돼 있다.
  // EffectCallback의 리턴 값은 void | Destructor
  // Destructor는 clean up 함수
  // 그래서 async 값을 사용할 수 없다. 사용하려면 값이 promise여야 한다.
  // useEffect(async () => {
  //   await axios.post()
  //   return 'str'
  // }, [])
  // 다만 감싸도 오류가 나진 않는다. 다만 리턴 값에 따라서 Promise<Type>이 된다.

  // 타입 스크립트는 아래 코드가 강제되다.
  // useEffect(() => {
  //   const func = async () => { await axios.post() };
  //   func();
  // })

  // 번외로 Destructor는 리턴 값이 void 뿐 아니라 [UNDEFINED_VOID_ONLY]: never 가 있는데 이건 뭘까?
  // 히스토리 가서 찾아봐야한다.
  // 깃 찾아가서 해당 줄에서 git blame을 찾아보자.

  // 브랜딩 기법
  const usd = 10;
  const eur = 10;
  const krw = 2000;
  function euroToUsd(euro: number): number {
    return (euro * 1.1)
  }

  console.log(`USD: ${euroToUsd(100)}`)

  euroToUsd(krw); // 유로만 들어가야 하는데 타입이 number라는 원시 값이라 막아줄 수가 없다.

  type Brand<K, T> = K & { __brand: T }

  type EUR = Brand<number, 'EUR'>;
  type USD = Brand<number, 'USD'>;
  type KRW = Brand<number, 'KRW'>;

  const usd2 = 10 as USD;
  const eur2 = 10 as EUR;
  const krw2 = 10 as KRW;
  // as는 되도록이면 안쓰는게 좋지만 실제로 없는 타입이라 어쩔수 없이 강제로 바꿔줘야 한다.

  function euroToUsd2(euro: EUR): number {
    return (euro * 1.1)
  }
  euroToUsd2(krw); // 막힌다! number 라는 원시 값인데도 새로운 값을 만들어 낸 것.
  // 새로 타입을 만들수 있지만, 문제는 진짜 진재하는 말이 되는 타입은 아니다.
  // K & { __brand: T } -> 말이 안된다.
  // number 는 원시 값인데 객체처럼 표현한다? number & brand?
  // as로 강제 형변환 하면 이게 된다.

  // const deps: any[] = [] // 1
  const deps: readonly any[] = [] // 1

  useEffect(() => {
    return () => {
      // clean up 함수는 리턴 값이 없어야한다.
    }
    // }, [])

    // deps(훅 뒤에 들어가는 배열)은 ReaconlyArray이다.
    // 읽기 전용 어레이란 뜻이다. 위 deps가 예시
  }, deps)
  // 위에 any[] 말고 readyonly any[] 참고
  // 하지만 deps 말고 그냥 배열 값 [] 을 넣어주면 두번째 배열이 컨텍추얼 인퍼런스 문맥적 추론으로 자동으로 리드온리 어레이로 추론이 된다.

  // useCallback의 첫번째 매개변수는 any[] => any 에서 Function 으로 바꼈다.
  // 전자는 매개변수, 리턴값이 애니로 타이핑 돼 잇는데 Function은 없어서 타이핑을 따로 해줘야한다.
  useCallback((e: FormEvent) => {}, []); // e의 타입을 안적어주면 에러가 난다.
  useCallback((e: MouseEvent<HTMLButtonElement>) => {}, []);
  // 마우스일 경우 제네릭이 다르다.
  // 만약 마우스 이벤트를 react 가 아닌 다른 파일에서 가져온다면 맨 위 import에 명확하게 적어주면 제대로 코드에 연결된다. 실제 동작에는 문제 없다.

  const onSubmitForm = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputEl.current;
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
      if (input) {
        input.focus();
        // input의 초기화 값이 null일 때도 있어서 에러가 난다. input이 never로 고정돼 있다.
        // useRef는 기본적으로 MutableRefObject에 걸리는데 그건 값을 저장하는데 사용된다.
        // 스테이트는 화면을 리렌더링 시키고 Ref는 리렌더링 안시킨다.
        // RefObject에 걸려야 하는데 제네릭으로 주는 수 밖에 없다.
        // 이 코드 기준 useRef<HTMLInputElement> 를 작성해 주면 된다.
        // 저기에 걸리는 이유는 타입 선언부에 제네릭을 넣어주고 초기 값을 null로 하는 것과 제네릭과 초기 값의 타입이 다린 타입 선언이 해당하는거 하나 밖에 없기 때문이다.
      }

      // 참고로 타입스크립트를 사용하면 JSX의 태그에 실제로 없는 속성을 넣었을 때 에러가 난다.
    } else {
      setResult('땡');
      setValue('');
      if (input) {
        input.focus();
      }
    }
  }, [word, value]);

  const onChange = useCallback((e) => {
    setValue(e.currentTarget.value)
  }, []);

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          value={value}
          onChange={onChange}
        />
        <button>입력!</button>
    </form>
    <div>{result}</div>
  </>
);
};

export default WordRelay;