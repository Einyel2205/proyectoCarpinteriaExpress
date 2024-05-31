import User from "../../Dto/users/User.Dto";
import Auth from "../../Dto/auth/auth.Dto";
import db from "../../config/config.db";
import bcrypt from "bcryptjs";
import CarpinteroDto from "../../Dto/carpintero/carpinteroDto";

class UserRepository {
  static async add(user: User) {
    const sql =
      "INSERT INTO users (email, contrasenia, nombre, apellido, telefono) VALUES (?, ?, ?, ?, ?)";
    const values = [
      user.email,
      user.contrasenia,
      user.nombre,
      user.apellido,
      user.telefono,
    ];
    return db.execute(sql, values);
  }

  static async login(auth: Auth) {
    const sql = "SELECT idUsuario, contrasenia FROM users WHERE email = ?";
    const values = [auth.email];
    const result: any = await db.execute(sql, values);
    if (result[0].length > 0) {
      const isPasswordValid = await bcrypt.compare(
        auth.contrasenia,
        result[0][0].contrasenia
      );
      if (isPasswordValid) {
        return {
          logged: true,
          status: "Successful authentication",
          id: result[0][0].id,
        };
      }
      return { logged: false, status: "Invalid username or password" };
    }
    return { logged: false, status: "Invalid username or password" };
  }
}
export default UserRepository;
