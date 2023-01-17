"use strict";
// jquery 설치 하고 @types/jquery 는 개발용으로 설치한다.
// 이유는 타입은 결구 개발할 때 사용하고 빌드한 파일은 js파일이기 때문이다. 개발할 때만 필요하고 배포할 때는 필요 없다.
// npm i -D @types/jquery 를 하면 아래 코드 에러나는게 사라진다.
// $는 jquery의 변수 명
// 분석을 자세하게 전체적인 흐름을 알고 싶다면 npm에 메인파일(detail)에 있는 깃허브 들어가서 index.d.ts를 확인하면 좋다.
// 핵심 파일(index.d.ts)에 호환되는 타입스크립트 버전도 명시 돼 있다.
// 그리고 참조하고 있는 파일들도 명시 돼 있다.
// 여기에 만약 export 만 있다고해도 reference 된 파일 중 하나가 갔다고 생각하면 된다.
// 보통 노드는 common js, 나머지는 es2015 모듈 시스템은 쓰는데
// ts에서는 common js 모듈 시스템을 사용할 때 문법이 약간 다르다.
// jquery를 common js 로 쓰여져서 export 로 돼 있다.
// const $ = require('jquery');
// import $ = require('jquery');
// module.export = jQuery
// export = jQuery
// 아래와 같이 하나로 통일해서 사용 가능
// import * as $ from 'jquery';
// 아래와 같다.
// import $ = require('jquery')
// $ 에 커서 올리고 command option b 누르면 구현부로 간다.
// 거기서 한번 더 누르던가 $에 서 command shift b 누르면 타입 선언부로 바로 간다.
// 정의로 이동은 command b
// npm i react -and npm i -D @types/react -and 대신 &&
// 근데 리액트 ts에서는 import React from 'react'; 로 돼 있다?
// 위는 잘못된 것으로 원칙적으로 import * as React from 'react' 가 맞다.
// tsconfig 의 esModuleInterop 이 true기 때문에 가능한 것.
// 그럼 import $ = require('module') === import * as  $ from 'jquery' 의 * as를 작성 안하고 사용 가능핟.
// export = jQuery 도 마찬가지 원래는 module.export = jQuery
// export as namespcae React 는 엄밀히 말하면 UMD 모듈 시스템
// 그렇다고 esmodule 시스템을 사용 못하는 것은 아니다. 아래 두개는 같다.ㅏ
// export defualt [module name];
// export = [module name];
// import [module name] from 'jquery' 는 공
// 추가로 import, export 키워드가 있으면 모듈 시스템으로 인식하고, 없다면 전역 스크립트로 인식한다.
// declare namespace JQuery { ... }
// 네임스페이스는 script src로 불러오는 라이브러리에서 주로 사용한다(전역)
// 다른 라이브러리에서 같은 이름을 사용하면 충돌이 나게되는데 이걸 방지하기 위한 방법으로 가상의 그립이라 생각하면 좋다.
// 현재 파일 23~25번째 줄 이용하여 정의로 이동후 분석 중 리턴 값을 보면 jQuery<TElement> 가 있는데 마우스 올리면 interface, namespace 두개가 뜬다.
// 이럴 땐 제네렉이 붙어 있으므로 해당 구조가 같은 것을 보면 된다.
$("p").removeClass("myClass noClass").addClass("yourClass");
// removeClass(className_function?: JQuery.TypeOrArray<string> | ((this: TElement, index: number, className: string) => string)): this;
// className_function? - 있어도 그만 없어도 그만 이라는 뜻.
// JQuery.TypeOrArray<string> - TypeOrArray 들어가 보면 T | T[] 로 돼 있다 즉 string | string[]
// -> 아 "myClass noClass" 대신 ["myClass", "noClass"] 도 되겠구나
// ((this: TElement, index: number, className: string) => string) - 함수를 쓸수도 있구나
// 타입스크립트에서 첫번째 매개변수가 this다? 이건 없는 것!! 그걸 빼고 구현해야 한다.
// 실제 매개변수가 아니라 this를 타이핑 했다는 것.
const $p = $("p");
$p.removeClass((index, className) => {
    return 'myClass';
});
// removeClass 에서 메서드 체이닝이 가능한 이유는?
// removeClass의 리턴 값이 this이기 때문이다. 여기서 this는 $p
$(["p", "t"]).text("hello");
const tag = $("ul li").addClass('hello').addClass(function (index) {
    return "item-" + index;
});
$(tag).html(function (i) {
    console.log(this);
    return $(this).data('name') + '입니다';
});
const $tag = $(["p", "t"]);
$tag.text("123");
$tag.text(123);
$tag.text(function (index) {
    console.log(this, index);
    return true;
});
$tag.text().html(document);
// 타입을 만들때 처음부터 완벽하게 만드려고 하지 말고, 천천히 만들어가면서 필요하면 하나하나 추가해주는 것이 좋다.
// 공부할 때 가짜 타입 만들어서 만들어보면 좋다.
$(tag).html(function (i) {
    console.log(this);
    return $(this).data('name') + '입니다';
});
// 응? html 메소드 매개변수 함수에 index, 말고 oldHtml도 있는데 안썻는데 에러가 안뜨네?
// 직접 호출할때 매개변수가 부족하다면 에러가 뜨지만, 매개변수에 함수를 넣어줄 때 그 함수의 매개변수가 부족하다면 에러가 뜨지 않는다.
// 자바스크립트에서도 안쓰면 undefined로 들어간다.
// 인수는 생략할 수 없지만 매개변 자리는 안쓰면 생략해도 된다.
// 직접 호출할때는 인수, 메서드 안에 매개변수로 함수를 입력할 때의 함수의 값(위에서 i: number)은 인수가 아니라 매개변수이다.
// 요약
// reference로 다른 패키지 파일 들어왔고
// 모듈 시스템의 차이들
// 네임스페이스
