export default class Auth{

    private _email: string;
    private _contrasenia: string;

    constructor(
        email: string,
        contrasenia: string
    ){
        this._email = email;
        this._contrasenia = contrasenia;
    }

    //getters 

    get email(): string{
        return this._email;
    }
    get contrasenia(): string{
        return this._contrasenia;
    }
    
    //setters

    set email(email: string){
        this._email = email;
    }
    set contrasenia(contrasenia: string){
        this._contrasenia = contrasenia;
    }
}