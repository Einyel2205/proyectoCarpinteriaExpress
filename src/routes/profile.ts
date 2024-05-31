import express from 'express';
import profile from '../controller/profile.controller';
import verifyToken from '../middlewares/verifyToken';
const router = express.Router();

router.get('/', verifyToken, profile);

export default router;