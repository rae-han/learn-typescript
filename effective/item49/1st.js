"use strict";
exports.__esModule = true;
var ResetButton = /** @class */ (function () {
    function ResetButton() {
        var _this = this;
        this.onClick = function () {
            alert("Reset ".concat(_this)); // "this" always refers to the ResetButton instance.
        };
    }
    ResetButton.prototype.render = function () {
        return makeButton({ text: 'Reset', onClick: this.onClick });
    };
    return ResetButton;
}());
exports["default"] = {};
