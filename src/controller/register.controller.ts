import { Request, Response } from "express";
import User from "../Dto/users/User.Dto";
import { UserService } from "../services/users/user.service";

let registerUser = async (req: Request, res: Response) => {
  try {
    const { email, contrasenia, nombre, apellido, telefono } = req.body;
    
    const registerUser = await UserService.register(
      new User(email, contrasenia, nombre, apellido, telefono)
    );
    return res.status(201).json({
      status: "register ok",
    });
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage });
    }
  }
};

export default registerUser;
