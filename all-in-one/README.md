# 초기화
npx tsc -init

package.json, tsconfig.json 이 핵심

```
// tsconfig.json
"allowJs": true,    
"strict": true,    // 반드시
```

4주차

이번주는 Utility Types 분석과 Promise 객체를 사용할 그에 따른 타입, bind, flat 메소드의 타입을 분석 했습니다.
코드나 자세한 설명은 아래 (링크)[https://github.com/rae-han/learn-typescript/tree/main/all-in-one/3.utility_types]로 대체하겠습니다.
그 중 기억에 남는 내용은 아래와 같습니다.

1. 유틸리티 타입은 타입스크립트에서 타입 변환을 보다 쉽게하기 위해서 만든 것으로 전역으로 사용 가능합니다.
2. 타입을 작성할 때 제네릭을 사용한다면 제네릭 간 제한 조건을 먼저 적어준 후에 구현하는 것이 좋습니다.
3. 새로 배운 키워드인 -은 뒤에 오는 것을 빼버려라는 뜻입니다. 예를 들면 -readonly 를 하면 readonly를 빼라는 뜻이며 ?이 붙은 키에 -?를 하면 옵셔널을 빼란 뜻입니다. +도 사용 가능하지만 사실 사용하나 안하나 같은 뜻이기에 의미는 없습니다. 앞과 같이 사용 가능한 이유는 키를 가져올 때 키 값만 가져오는 것이 아닌 ? 까지 그대로 가져오기 때문입니다.
4. 함수 이름 같은 경우 변수이기 때문에 바로 타입으로 사용하지 못하고 typeof 키워드를 붙여주어야 합니다. 
5. infer 키워드는 extends 안에서 사용 가능한 예약어로 타입스크립트가 알아서 매개변수 자리를 추론하란 뜻 입니다.
6. 클래스 이름은 클래스의 타입이 아닌 인스턴스의 타입이란 걸 한번 더 강조하셨습니다.
7. Uppercase, Lowercase, Capitalize 같은 것들은 타입스크립트로 구현할 수 없어서 내부적으로 처리만 해 뒀습니다. 
8. Awaited 에서는 내부적으로 재귀를 해서 여러 중첩된 then을 계산하여 타입을 구합니다.
9. 추가로 then이 있는 객체 thenable도 promise라고 인정해 줍니다.
10. 덕타이핑 언급이 있었는데 덕 타이핑은 타입 체크에서 중요한 것은 값을 실제로 가지고 있는 것이냐지 구현하였다는 것만이 타입 체크를 통과하는 유일한 방법은 아니라는 것입니다.
11. infer 키워드와 컨디셔널 오퍼레이터는 타입을 만들수 있는 강력한 도구입니다.
12. infer 키워드 같은 경우 추론하는 키워드라 생각할 수 있지만 어떻게 보면 새로운 타입 변수를 만들어내는 셈입니다.
13. bind 같은 메서드가 오버로딩이 많이 돼 있는 이유는 타입스크립트의 문법적 한계로 매개변수 갯수에 따라 적당히 여러개 만들어 놨기 때문입니다. 다만 concat처럼 개선될 여지는 있습니다.
14. flat 강의 중 타입을 집합으로 생각하면 편하다 하셨는데 그렇기 때문에 number | number 는 number 라는 타입으로 퉁치게 됩니다.

추가로 질문이 있습니다.
1. {}와 관련된 강의를 추가해 주셨는데 NotNullable를 구현할 때 아래와 같이 구현해도 괜찮을까요?
```typescript
type MyNotNullable<T> = T extends {} ? T : never
```
2. 제로초님 강의를 듣다가 웹스톰을 결제해서 사용 중인데 강의때는 vscode를 사용 하시더라고요. 이건 상관 없는데 가끔 강의할 때 IDE에서 다른 내용이 나오던데 vscode를 따라 쓰는 것이 좋을까요? 아니면 이것과 관련된 설정이 있을까요? 
   지금은 불편함 없이 번갈아 가면서 쓰고 있습니다. 
   문제 되는 부분은 NonNullable을 사용할 때 null, undefined를 제대로 제외 안시켜준다던가 NoThis 구현하실 때나 강의중 keyof typeof [1, 2, 3] 같은 경우 제대로 타입 추론을 못해줬습니다. 지금은 강의와 다르면 vscode로 한번 확인하고 넘어가고 있습니다.


npm 에서 ts는 타입스크립트를 지원해주는 라이브러리 dt(d.ts)는 자바스크립트지만 타입스크립트 사용자들을 위해서 타입 정의만 해둔 라이브러리 실제 구혀은 없다.

dt 로 된 프로젝트(예시로 axios)의 package.json 파일 types, typings에 index.d.ts 가 명시 돼 있다. 그게 메인 타이핑 파일이다.

axios 같은 경우에는 index.d.ts, redux 같은 경우 main 즉 가장 중요한 파일은 lib/redux.js 고 타이핑 파일은 types/index.d.ts이다.

redux가 깃헙에 있는 파일과 실제 설치한 파일이 다른 이유
타입스크립트는 결국 자바스크립트로 변환돼야 노드에서 브라우저에서 돌릴수 있다. 즉 결국 자바스크립트로 변환 돼야하고 npm i 했을때 설치했을 때 나오는 파일이 최종적으로 js여야한다.
다만 d.ts가 있어야 사용자들이 타입을 참조 가능하다. 그래서 ts프로젝트들은 js, d.ts로 나눠져서 들어온다.

jquery 는 types가 없다? 즉 js로 된 프로젝트, npm에 들어가면 dt 벳지가 있는데 이걸 누르면 @types/jquery로 간다.
jquery가 js로 된 프로젝트인데 ts로 됑 ㅣㅆ는 이유는 dt 벳지를 눌렸을 때 나오는 프로젝트까지 같이 설치하면 타이핑이 돼 있단 뜻.

위에 나온 axios, redux는 ts로 작성돼 있어서 그것만 설치하면 되지만 jquery는 같이 설치해줘야 한다.
@types/jquery에 들어가면 definitelyTyped 라는게 있는데 그건 누군가가 오픈소스에 기여를 함으로 같이 완성해 나가는 것.



1. npm 패키지에서 ts로 표시되어 있다면 타입스크립트로 작성 돼 있고, dt로 돼 있다면 자바스크립트로 작성 됐지만 타입스크립트 사용자를 위해서 타입 정의해둔 패키지로 실제 타입스크립트로 구현된 것은 없다.
2. 패키지의 타입을 확일할 때는 package.json 파일에 기록돼 있는 메인 타이핑 파일을 보는 것이 좋다.
3. 깃헙에 있는 패키지 파일과 실제 설치 파일이 다를수 있는데, 타입스크립트는 결국 자바스크립트로 변환되야 자바스크립트 런타임에서 실행시킬수 있기 때문이다. 결국 패키지 설치시 있어야 하는 파일은 최종적으로 자바스크립트여야 한다.(ex. redux)
4. jquery 같은 경우 package.json 파일에 types 프로퍼티가 없는데 자바스크립트로 된 프로젝트이기 때문이다. 해당 패키지의 npm  패키지 주소에서 dt 뱃지를 누르면 @types/jquery 로 가는데 여기에 타입이 있다. 주소가 definitelyTyped라 돼 있는데 이건 오픈소스라는 의미로 받아들여도 된다.
5. 분석을 자세하게 해보거나 전체적인 흐름을 읽고 싶다면 npm 메인파일에 있는 깃허브 들어가서 index.d.ts 파일을 확인하면 좋다. 맨 아래에 호환되는 타입스크립트 버전도 명시 돼 있다.
6. export 키워드만 있다고 당황하지 말고 위에 reference된 파일을 보면 된다.
7. 보통 노드는 commonjs, 나머지는 ES2015(es6) 모듈 시스템을 쓰는데 타입스크립트에서 commonjs 모듈 시스템을 사용할 때 문법이 약간 다르다.(자세한건 깃헙)

    ```tsx
    const $ = require('jquery');
    
    export = jQuery // module.export = jQuery
    
    import * as $ from 'jquery'; // == import $ = require('jquery')
    ```

8. import, export 키워드가 있으면 모듈 시스템으로 인식하고 없다면 전역 시스템으로 인식한다.
9. 네임 스페이스는 src로 불러오는 라이브러리에서 주로 사용한다(전역). 다린 라이브러리에서 같은 이름을 사용하면 충돌이 나는데 이를 방지하기 위한 방법이다.
10. 타입스크립트에서 첫번째 매개변수가 this면 빼고 구현해야한다. 실제 매개변수가 아닌 this를 타이핑 했단 뜻이다.
11. 타입을 만들때 처음부터 완벽하게 만드려고 하지 말고, 천천히 만들어가면서 필요하면 하나하나 추가해주는 것이 좋다.(애자일?)
12. 아래 코드에 html 메소드는 index, oldHtml을 매개변수로 받는데 작성 안해도 에러가 안난다. 직접 호출하여 인수가 부족한 상황이라면 에러가 뜨지만 매개변수 자리는 안쓰면 생략해도 된다.
13. 라이브러리를 분석할 때 보통 가장 아래에 중요한 것이 있다. export = 나 export default 키워드를 찾은 후 아래에서부터 차례대로 찾아나간다.
14. 인터페이스도 무조건 객체가 아니라 함수일 수도 있다. 추가로 객체인 인터페이스가 함수인 인터페이스를 상속 받을수도 있다. 이유는 함수의 속성으로 값을 추가할수 있고, 자바스크립트에서는 함수가 일급 객체이기 때문에 값으로 사용 가능하다.

    ```tsx
    // 분석 해보면 axios는 클래스면서, 함수면서, 객체이다.
    new axios(); // 클래스
    axios(); // 함수
    axios.get() // 객체
    ```

15. axios 라이브러리를 사용했을 때 reponse.data.[property] 를 해도 에러가 뜨지 않는다. 기본 적으로 타입이 any로 지정돼 있기 때문이다. 이러면 타입스크립트를 사용하는 의미가 없는데 라이브러리를 분석하여 제네릭 자리나 기타 방법으로 타입을 넣어주는 것이 좋다.

    ```tsx
    type Post = { userId: number, id: number, title: string, body: string }; // 간단
    // interface Post { userId: number, id: number, title: string, body: string }; // 객체지향적
    
    (async () => {
      try {
        const response = await axios.get<Post>('https://jsonplaceholder.typicode.com/posts/1')
      } catch (error) { }
    })();
    ```

16. 타입스크립트에서 try-catch의 error의 타입은 기본적으로 unknown으로 돼 있다. 이유는 라이브러리 에러 뿐 안라 문법 에러가 뜰수도 있고 에러의 형식이 정해져 있지 않기 때문이다. as 키워드나 타입 가드를 이용하여 잘 컨트롤 해줘야한다. 만약 에러 메세지가 필요하다면 as 키워드를 이용하여 타입을 지정해주는 방법도 있다.

[jQuery](https://github.com/rae-han/learn-typescript/blob/main/all-in-one/5.jquery/1st.ts)

[Axios](https://github.com/rae-han/learn-typescript/blob/main/all-in-one/6.axios/1st.ts)