import { Router } from 'express';
import {
    getUser,
    updateUser,
    deleteUser,
    listAllUsers
} from '../controllers/userController.js';
import { requireAuth } from '../utils/auth.js';

const router = Router();

router.get('/:id', requireAuth, getUser);
router.put('/:id', requireAuth, updateUser);
router.delete('/:id', requireAuth, deleteUser);
router.get('/', requireAuth, listAllUsers);

export default router;
