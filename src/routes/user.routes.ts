import express from 'express';
import userCtrl from '../controllers/userController';

const router = express.Router();

router.route('/profile').post(userCtrl.profile);

export default router;
