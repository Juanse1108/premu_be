import { Router } from 'express';
import { addUser, listUsers } from '../controllers/userController';

const router = Router();

router.post('/users', addUser);
router.get('/users', listUsers);

export default router;