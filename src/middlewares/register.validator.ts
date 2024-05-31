import { check, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const validatorParams = [
    check('email').isEmail(),
    check('contrasenia').isLength({min: 8, max: 15}).isAlphanumeric()
]

function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }
    next();
}

export {validatorParams, validator};