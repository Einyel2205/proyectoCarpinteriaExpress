"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db = mysql2_1.default.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 10,
    queueLimit: 0
});
db.getConnection((err, connection) => {
    if (err) {
        console.log('Error en la conxeion a la base de datos');
        if (connection) {
            connection.release;
        }
        return;
    }
    console.log('conexion exitosa a la base de datos');
});
exports.default = db.promise();
