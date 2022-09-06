var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Foo = /** @class */ (function () {
    function Foo(a, b, c) {
        if (a === void 0) { a = 1; }
        if (b === void 0) { b = 2; }
        if (c === void 0) { c = 3; }
        this.a = a;
        this.b = b;
        this.c = c;
        // public, protected, private 접근 제한자 모드 클래스 내부에서 참조 가능.
    }
    return Foo;
}());
var foo = new Foo(1, 2, 3);
console.log(foo.a);
// public 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조 가능하다.
// console.log(foo.b); // Error! TS2445: Property 'b' is protected and only accessible within class 'Foo' and its subclasses.
// console.log(foo.c); // Error! TS2341: Property 'c' is private and only accessible within class 'Foo'.
// protected, private 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할 수 없다.
var Bar = /** @class */ (function (_super) {
    __extends(Bar, _super);
    function Bar(a, b, c) {
        var _this = _super.call(this, a, b, c) || this;
        console.log(_this.a);
        console.log(_this.b);
        return _this;
        // public, protected 접근 제한자는 자식 클래스 내부에서 참조 가능하다.
        // console.log(this.c); // Error! TS2341: Property 'c' is private and only accessible within class 'Foo'.
        // private 접근 제한자는 자식 클래스 내부에서 참조할 수 없다.
    }
    return Bar;
}(Foo));
