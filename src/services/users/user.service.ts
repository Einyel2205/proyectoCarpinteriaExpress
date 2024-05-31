import UserRepository from "../../repositories/user/User.repository";
import User from "../../Dto/users/User.Dto";
import generateHash from "../../helpers/generateHash";
import Auth from "../../Dto/auth/auth.Dto";

export class UserService{
    static async register(user: User){
        user.contrasenia = await generateHash(user.contrasenia);
        return await UserRepository.add(user);
    }

    static async login(auth: Auth){
        return await UserRepository.login(auth)
    }
}