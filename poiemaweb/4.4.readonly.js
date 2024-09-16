"use strict";
class Constants {
    _PI = 3.14;
    _GoldenRatio;
    constructor() {
        this._GoldenRatio = 1.618;
    }
    log() {
        // readonly가 선언된 프로퍼티는 재할당이 금지된다.
        // this._PI = 10; // Cannot assign to '_PI' because it is a constant or a read-only property.
        // this._GoldenRatio = 'Hi'; // Cannot assign to '_GoldenRatio' because it is a constant or a read-only property.
        console.log(`_PI: ${this._PI}`); // _PI: 3.14
        console.log(`_GoldenRatio: ${this._GoldenRatio}`); // _GoldenRatio: hello
    }
}
new Constants().log();
