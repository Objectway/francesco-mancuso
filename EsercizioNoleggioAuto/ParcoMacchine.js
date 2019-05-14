"use strict";
exports.__esModule = true;
var ParcoMacchine = /** @class */ (function () {
    function ParcoMacchine() {
        this.autoarray = [];
    }
    ParcoMacchine.prototype.addAuto = function (auto) {
        this.autoarray.push(auto);
    };
    ParcoMacchine.prototype.mostraAuto = function () {
        return this.autoarray;
    };
    return ParcoMacchine;
}());
exports.ParcoMacchine = ParcoMacchine;
