"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.core = void 0;
var pkg_1 = require("./pkg/pkg");
var core = /** @class */ (function () {
    function core() {
        this._pkg = new pkg_1.pkg();
    }
    return core;
}());
exports.core = core;
