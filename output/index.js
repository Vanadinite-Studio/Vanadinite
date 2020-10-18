"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("./core/core");
var main = /** @class */ (function () {
    function main(argv) {
        this._core = new core_1.core();
    }
    return main;
}());
var m = new main([]);
console.log(process.argv.slice(2));
