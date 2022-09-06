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
var Languages = /** @class */ (function () {
    function Languages() {
    }
    Languages.prototype.write = function () {
        console.log('Developer are developing');
    };
    return Languages;
}());
// new Languages();
// 추상 클래스는 직접 인스턴스를 생성할 수 없다.
// TS2511: Cannot create an instance of an abstract class. or
// TS2511: Cannot create an instance of the abstract class 'Languages'.
var Javascript = /** @class */ (function (_super) {
    __extends(Javascript, _super);
    function Javascript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Javascript.prototype.runEnvironment = function () {
        console.log('on Browser and Nodejs');
    };
    return Javascript;
}(Languages));
var js = new Javascript();
js.write();
js.runEnvironment();
