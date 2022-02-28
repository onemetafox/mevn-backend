import express from 'express';
import authCtrl from '../controllers/authController';

const router = express.Router();

router.route('/signin').post(authCtrl.signin);
router.route('/signup').post(authCtrl.signup);

export default router;
