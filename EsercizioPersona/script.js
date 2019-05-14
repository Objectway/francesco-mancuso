"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    function Persona(name, surname, age) {
        this.nome = name;
        this.cognome = surname;
        this.eta = age;
    }
    Persona.prototype.getNome = function () {
        return this.nome;
    };
    Persona.prototype.getEta = function () {
        return this.eta;
    };
    Persona.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    return Persona;
}());
exports.Persona = Persona;
