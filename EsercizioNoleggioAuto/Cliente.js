"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
///<reference path="./test.d.ts"/>
var data = require("./clienti.json");
var Cliente = /** @class */ (function () {
    function Cliente(id, name, surname) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
    Cliente.prototype.verificaBusiness = function () {
        console.log(data[0]);
    };
    return Cliente;
}());
exports.Cliente = Cliente;
var ClienteBusiness = /** @class */ (function (_super) {
    __extends(ClienteBusiness, _super);
    function ClienteBusiness(id, name, surname, spesaannua) {
        var _this = _super.call(this, id, name, surname) || this;
        _this.spesaannua = spesaannua;
        return _this;
    }
    ClienteBusiness.prototype.getSconto = function () {
        return (0.1 * this.spesaannua);
    };
    return ClienteBusiness;
}(Cliente));
exports.ClienteBusiness = ClienteBusiness;
