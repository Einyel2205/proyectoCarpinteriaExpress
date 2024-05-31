import { Request, Response } from 'express';
import Auth from '../Dto/auth/auth.Dto';
import { UserService } from '../services/users/user.service';
import generateToken from '../helpers/generateToken';
import dotenv from 'dotenv';
dotenv.config();

let auth = async (req: Request, res: Response) => {
    try {
        const {
            email,
            contrasenia
        } = req.body;
        const login = await UserService.login(new Auth(email, contrasenia));
        if (login.logged) {
            return res.status(200).json({
                status: login.status,
                token: generateToken({id: login.id}, process.env.SECRET_KEY, 5)
            });
        }
        return res.status(401).json({
            status: login.status
        });
    } catch (error) {
        console.log(error);
    }
}
export default auth;