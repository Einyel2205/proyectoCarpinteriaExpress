import express from 'express';
import registerController from '../controller/register.controller';
import {validatorParams, validator} from '../middlewares/register.validator';
const router = express.Router();


router.post('/', validatorParams, validator ,registerController);

export default router;