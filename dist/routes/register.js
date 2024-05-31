"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const register_controller_1 = __importDefault(require("../controller/register.controller"));
const register_validator_1 = require("../middlewares/register.validator");
const router = express_1.default.Router();
router.post('/', register_validator_1.validatorParams, register_validator_1.validator, register_controller_1.default);
exports.default = router;
