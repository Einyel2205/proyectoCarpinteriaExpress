"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, contrasenia, nombre, apellido, telefono) {
        this._email = email;
        this._contrasenia = contrasenia;
        this._nombre = nombre;
        this._apellido = apellido;
        this._telefono = telefono;
    }
    //getters
    get email() {
        return this._email;
    }
    get contrasenia() {
        return this._contrasenia;
    }
    get nombre() {
        return this._nombre;
    }
    get apellido() {
        return this._apellido;
    }
    get telefono() {
        return this._telefono;
    }
    //setters
    set email(email) {
        this._email = email;
    }
    set contrasenia(contrasenia) {
        this._contrasenia = contrasenia;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    set telefono(telefono) {
        this._telefono = telefono;
    }
}
exports.default = User;
