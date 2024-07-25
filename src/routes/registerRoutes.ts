import { Router } from 'express';
import { register } from '../controllers/registerControler';

const router = Router();

router.post('/register', register);

export default router;