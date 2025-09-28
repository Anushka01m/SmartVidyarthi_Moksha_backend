import { Router } from 'express';
import {
    getProfile,
    updateProfile
} from '../controllers/profileController.js';
import { requireAuth } from '../utils/auth.js';

const router = Router();

router.get('/:id', requireAuth, getProfile);
router.put('/:id', requireAuth, updateProfile);

export default router;
