// // express도 @types/express 를 따로 설치해줘야 한다.
//
// import cookieParser from 'cookie-parser';
// import express, { Request, RequestHandler, ErrorRequestHandler, Response, NextFunction } from 'express';
// import session from 'express-session';
// import passport from 'passport';
// import flash from 'connect-flash';
//
// const app = express();
// // express의 req, res 는 http의 모듈을 확장한 것이다.
// // 즉 분석 해보면 express는 http의 모듈을 확장한 후 별도의 모듈을 추가한 것이겠구나 하고 생각할 수 있다.
//
// // express의 디펜던시인 serve-static 같은 경우 완전 다른 모듈로 돼 있다.
// // 다 이유가 있는데 위 패키지 같은 경우 순환참조를 해결하기 위해 독립시켰다.
// // 위와 같이 핵심 로직이 빠져있는 이유는 이유가 있다.
//
// // declare global 은 뭐지?
// // 이름처럼 전역으로 선언한 것. 안에 있는 것들을 어떤 파일에서든 참조할 수 있다.
//
// // declare global, declare [namespace], declare module [name]
// // 의 중요한 특성은 여러번 서언하면 인터페이스처럼 합쳐진다.
// // 인터페이스가 합쳐져서 무슨 장점이 잇었지? 나중에 확장 가능하다. 수정 가능하다.
// // 위 3개의 declare도 마찬가지다.
//
// // express는 middleware 개념이 중요하다.
//
// app.use(express.json());
// app.use(express.urlencoded({ extended: false })); // bodyparser
// app.use('/', express.static('./public'));
// app.use(cookieParser('SECRET'));
// app.use(session({
//   secret: 'SECRET',
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());
//
// // 미들웨어는 RequestHandler 타입이다.
// const middleware: RequestHandler<{ paramType: string }, { message: string }, { bodyType: number }, { queryType: boolean }, { localType: unknown }> = (req, res, next) => {
//   // # 3
//   // RequestHandler 의 타이핑을 제대로 하고 싶다면? 들어가보면 제네릭이 있다. 타이핑을 제대로 하고 싶다면 제네릭에 타이핑 해주면 된다. 그걸 위해서 제네릭을 만들어놨다.
//   req.params.paramType
//   req.body.bodyType;
//   req.query.queryType;
//   res.locals.localType;
//   res.json({
//     message: 'hello',
//   })
// // # 1 app.get 부터
//
// // # 2
// // requestHandler 가 미들웨어
// // ...handler.~ 라고 돼 잇는 부분은 여러개를 넣을수 있다는 뜻. 실제로 미들웨어에 함수를 여러개 넣을 수 있다.
//
// // app.get 두번째 인자로 미들웨어를 넣으면 타입스크립트에서 문맥적 추론으로 미들웨어로 해주지만 만야 ㄱ미들웨어를 밖으로 빼서 변수로 넣어준다면..? 문맥적 추론이 안된다. 타입 스크립트에서는 항상 이런 것이 문제가 도니다.
// // 방법 1
//   const meddleware1 = (req: Express.Request, res: Express.Response, next: NextFunction) => {
//
//   }
// // Express는 그냥 쓰는데 e에 있는 NextFunction 는 그냥 못쓰고 불러와서 사용하는 이유는 아까 declare global 에 Express가 있기 때문.
// // Express.Re~ 대신 express에서 인포트해서 사용해도 된다.
// // 정확하게는 Express.Request랑 Request는 서로 다른걸 가르킨다. 하지만 결론적으론 같은데 이유는 namespace가 e이긴 하지만 내부 코드에 extends Express.Response가 있기 때문이다.
// // Request는 Express.Request를 extends로 확장해서 만든 것.
//
// // 여담으로 임포트한 것들은 인터페이스 합치기로 확장 가능하다.
// // interface Response {
// //
// // }
// // extends 대신 그냥 위처럼 해도 합쳐진다.
// // 근데 왜 에러가??
// // 임포트 했는데 여기다 또 선언하면 안된다는 에러가 뜨네? 합쳐지는게 아니라?
// // Response가 declare global에 있는데 그 안에서 합쳐주면 된다.
// // declare global {
// //     namespace Express {
// //       export interface Response {
// //         abc: 123
// //       }
// //     }
// // }
//
// // 방법 2
//   const middleware2: RequestHandler = (req, res, next) => {
//
//   }
//
//   req.flash('플래시메시지');
//   req.flash('1회성', '플래시메시지');
//   req.flash();
//
//   req.session
//   req.user?.name;
// };
//
// app.get('/', middleware);
// // get 같은 경우 IRouterMatcher 에 걸린다.
// // 이 인터페이스 같은 경우 인터페이스 블록문 안에 <제네릭>(함수)>가 여러개 있는데 오버로딩된 것이다.
//
//
//
//
// const errorMiddleware: ErrorRequestHandler = (err: Error, req: Request, res, next: express.NextFunction) => {
//   // RequestHandler 가 아닌 ErrorRequestHandler를 사용해요 매개변수 추론이 가능하다. 매개변수 갯수가 다르다.
//   console.log(err.status);
// };
// app.use(errorMiddleware); // 어떻게 ErrorRequestHandler를 찾았을까? use 메서드에 들어가는 값이므로 use에 뭐뭐가 들어갈 수 있는지 찾아보낟.
// // app.use 기준으로 use 메서드를 보면 use는 ApplicationRequestHandler 타입이다.
// // ApplicationRequestHandler를 다시 보면 IRouterHandler, IRouterMatcher, ((...handlers: RequestHandlerParams[]) => T) 가 있다.
// // 여기서 handler는 RequestHandlerParams 에 해당하므로 다시 보면 RequestHandler, ErrorRequestHandler 와 Array<RequestHandler<P>, ErrorRequestHandler로 구성돼 있다.
//
// // 근데 ErrorRequestHandler 의 err 가 any다? 옛날 거라 unknown 으로 안돼있을수도 있다.
// // 기본 Error 는 status가 없어서 아쉽다.
// // 이럴땐 직접 추가해주면 되는데 Error는 lib라 import 하지 않아도 쓸 수 있다.
// // 만약 import해온 Error가 있어서 에러가 난다면? declare global {} 안에 넣어주자.
// interface Error {
//   status: number
// }
// // 보통 실제 코드랑 declare global은 같이 두지 안흔다.
// // types.d.ts 파일에 타입들만 몰아 둔다.
// // 이때는 declare global 없이 위 코드만 적으면 되는데 이유는 declare global을 인식 시켜주려면 이 파일이 모듈이라는 import, export문이 있어야한다.
// // 위 방법대로하면 타입스크립트가 같은 폴더에 잇는 것들의 타입을 합쳐준다.
//
// // 그래서 보통은 타입 정의한 것을 같이 안두고 파일을 따로 빼둔다.
//
// app.listen(8080, () => {
//
// });
//
// // express 특성이 패키지를 하나 추가할 때마다 req에 들어가서 사용 가능하다.
// // req.session 을 쓰면 타입스크립트 상으론 에러는 안나지만 실제로 미들웨어로 등록(app.use(session( ... ))해야 사용 가능하다.
//
// // passport를 등록하고 interface Request를 확인하면 Request가 여러개 참조 가능한데 그 중에 passport도 있다.
// // passport를 등록하면 interface Request가 합쳐지는데 정확하게는 각 패키지의
// // declare global { ...
// //  namespcae Express { ...
// //   interfacle Request { <- 여기에 등록 돼 있다.
// // 이다.
// // passport를 등록(app.use)해서 req에 user는 생겼지만 user 안에 name 프로퍼티를 넣으려면 에러가 뜬다. user 안에 해당 프로퍼티가 없기 때문이다.
// // 그럼 아까 말한 방법으로 확장을 하면 된다.
// // index.d.ts 참조.
// // 왜 declare 해서 export 하면 될까?
// // ambient 모듈 때문 declare 밖에 import, export {} 를 한번 써줘야한다. 그래야 다른 파일에서 적용 된다.
// // 파일면은 굳이 types 일 필요 없고 그냥 .d.ts 라는 확장자가 중요하다.
//
// // declaration merging 의 인터페이스 네임스페이스 한번 볼 것
// // 여기에 declare global 에 import export가 필요한지 나와있는데 declare global 할거면 해당 파일이 모듈 시스템이여야 하고
// // 타입스크립트에서 모듈 시스템으로 만드려면 import export 키워드가 필요하다.
//
// // interface Error 는 그냥 됐던게 declare global이 아니기 때문이다.
//
// // node쪽 라이브러리들은 결국 다시 노드를 참조하는 경우가 많다.
//
// // Strategy에 첫번째 인자 값에 따라 두번째 인자인 콜백 함수가 어떻게 다르게 동작 하는걸까? 오버로딩.
// // 다만 오버로딩할 때 라우팅처럼 먼저 일치하는 것에 적용되므로 순서에 유의하던가 서로 구분되게 해야한다.
//
