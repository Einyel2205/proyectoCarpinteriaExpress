"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = exports.validatorParams = void 0;
const express_validator_1 = require("express-validator");
const validatorParams = [
    (0, express_validator_1.check)('email').isEmail(),
    (0, express_validator_1.check)('contrasenia').isLength({ min: 8, max: 15 }).isAlphanumeric()
];
exports.validatorParams = validatorParams;
function validator(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }
    next();
}
exports.validator = validator;
