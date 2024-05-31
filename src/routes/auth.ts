import express from 'express';
import authController from '../controller/auth.controller';
import { validatorParams, validator } from '../middlewares/register.validator';
const router = express.Router();

router.post('/', validatorParams, validator, authController);

export default router;