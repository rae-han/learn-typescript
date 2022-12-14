"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// # axios
const axios_1 = __importStar(require("axios"));
// ## 요즘은 브라우저는 ky, 노드는 got
// axios는 ts가 붙어 있기 때문에 별도로 @type/axios 같은 것을 설치 안해도 된다.
// 분석할 때 보통 가장 아래에 가장 중요한게 있다. export = 나 export default를 검색해서 아래에서부터 찾아나간다.
// 참고
// es5 모듈 import axios from 'axios';
// commonjs 모듈 , import * as axios from 'axios';
// 근데 esInterop을 켜면 * as를 생략 가능해서 import axios from 'axios'로 같아진다.
// axios는 XMLHttpRequest 기반.
// fetch보다 많은 기능이 있다.
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get('https://jsonplaceholder.typicode.com/posts/1');
        // console.log(response)
        console.log(response.data);
        console.log(response.data.id);
    }
    catch (error) {
    }
}))();
// 인터페이스도 무조건 객체가 아니라 함수일 수도 있다.
// 근데 객체인 인터페이스가 함수인 인터페이스를 상속 받을수도 있다.
// 왜냐면 아래와 같이 함수의 속성으로 값을 추가할수 있다. 그리고 자바스크립트에서는 함수가 일급 객체이기 때문에 값으로 사용 가능하다.
const func = () => { };
func.property = '함수도 속성과 값을 추가할 수 있다.';
// interface Post { userId: number, id: number, title: string, body: string }; // 객체지향적
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response1 = yield axios_1.default.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log(response1.data);
        console.log(response1.data.id);
        const response2 = yield axios_1.default.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            'userId': 1,
        }); // 굳이 타입을 넣어야 겟다?
        const response3 = yield axios_1.default.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            'userId': 1,
        });
    }
    catch (error) {
    }
}))();
// Error 처리
(() => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const response = yield axios_1.default.get('https://jsonplaceholder.typicode.com/posts/1');
    }
    catch (error) {
        // console.error(error.response.data);
        // 에러는 항상 기록해두는게 좋다.
        // 타입스크립트에서 try catch 에러는 기존적으로 unknown으로 돼 있다.
        // 이유는 항상 axios error 가 뜨는게 아니라 문법 에러가 뜰수도 있기 때문이다.
        console.error((_a = error.response) === null || _a === void 0 ? void 0 : _a.data);
        // // 하지만 아래에서 에러는 다시 unknown이 된다.
        // error.response?.data
        const errorResponse1 = error.response;
        console.error(errorResponse1 === null || errorResponse1 === void 0 ? void 0 : errorResponse1.data);
        errorResponse1 === null || errorResponse1 === void 0 ? void 0 : errorResponse1.data;
        // 근데 axios error 가 아닐수도 있다. catch 에서 에러가 나면 끝장난다.
        // 그때 사용하는 것이 타입가드
        if (error instanceof axios_1.AxiosError) {
            error.response; // axios error인 것이 보장된다.
            // axiosError f를 이렇게(intanceof) 쓸수 있는 이유는 클래스이기 때문에
            // 인터페이스였으면 자바스크립트에서는 타입가드를 못쓴다.
            // 실전에서는 타입가드를 사용하기 좋고 자바스크립트에 남아있기 때문에 클래스를 많이 사용한다.
            // 또는 조건문에 axios.isAxiosError(error) 를 넣어줘도 된다.
            // 내부적으로 is가 있으면 조건문에 써도 되겠다 혹은 filter 고차함수에 사용해도 되겠다.
        }
        // 에러 메세지에 데이터가 들어있을수 있다.
        // { message: '서버장에입니다' }
        if (axios_1.default.isAxiosError(error)) {
            // error === axiosError
            // isAxiosError 같은 경우 제네릭이 없기 때문에 타입을 넣어줄 수 없다.
            console.error((_b = error.response) === null || _b === void 0 ? void 0 : _b.data.message);
            // 웬만하면 as를 안쓰는 것이 좋다.
            // 조건문에 istanceof 를 써도 타입스크립트의 건방증 때문에 기억을 못한다.
        }
    }
}))();
// 타입 직접 만들기 위한 예제
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response1 = yield (0, axios_1.default)({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: {
                title: 'foo',
                body: 'bar',
                userId: 1,
            },
        });
        const response2 = yield axios_1.default.post('https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            'userId': 1,
        }); // 굳이 타입을 넣어야 겟다?
    }
    catch (error) {
    }
}))();
