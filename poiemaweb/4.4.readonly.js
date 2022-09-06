var Constants = /** @class */ (function () {
    function Constants() {
        this._PI = 3.14;
        this._GoldenRatio = 1.618;
    }
    Constants.prototype.log = function () {
        // readonly가 선언된 프로퍼티는 재할당이 금지된다.
        // this._PI = 10; // Cannot assign to 'MAX_LEN' because it is a constant or a read-only property.
        // this._GoldenRatio = 'Hi'; // Cannot assign to 'MSG' because it is a constant or a read-only property.
        console.log("MAX_LEN: ".concat(this._PI)); // MAX_LEN: 5
        console.log("MSG: ".concat(this._GoldenRatio)); // MSG: hello
    };
    return Constants;
}());
new Constants().log();
