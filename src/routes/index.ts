import express from 'express';
const router = express.Router();

import userRoutes from './user.routes';
import authRoutes from './auth.routes';

router.use('/user', userRoutes);
router.use('/auth', authRoutes);

export default router;