"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//* ROUTES
const register_1 = __importDefault(require("./routes/register"));
const auth_1 = __importDefault(require("./routes/auth"));
const profile_controller_1 = __importDefault(require("./controller/profile.controller"));
const app = (0, express_1.default)().use(body_parser_1.default.json());
app.use('/register', register_1.default);
app.use('/auth', auth_1.default);
app.use('/profile', profile_controller_1.default);
const PORT = process.env.PORT || 10101;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}).on('error', (error) => {
    throw new Error(error.message);
});
