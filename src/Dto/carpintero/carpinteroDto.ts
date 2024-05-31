export default class CarpinteroDto {
  private _email: string;
  private _contrasenia: string;
  private _nombre: string;
  private _apellido: string;
  private _telefono: string;

  constructor(
    email: string,
    contrasenia: string,
    nombre: string,
    apellido: string,
    telefono: string
  ) {
    this._email = email;
    this._contrasenia = contrasenia;
    this._nombre = nombre;
    this._apellido = apellido;
    this._telefono = telefono;
  }

  //getters
  get email(): string {
    return this._email;
  }
  get contrasenia(): string {
    return this._contrasenia;
  }
  get nombre(): string {
    return this._nombre;
  }
  get apellido(): string {
    return this._apellido;
  }
  get telefono(): string {
    return this._telefono;
  }

  //setters
  set email(email: string) {
    this._email = email;
  }
  set contrasenia(contrasenia: string) {
    this._contrasenia = contrasenia;
  }
  set nombre(nombre: string) {
    this._nombre = nombre;
  }
  set apellido(apellido: string) {
    this._apellido = apellido;
  }
  set telefono(telefono: string) {
    this._telefono = telefono;
  }
}
