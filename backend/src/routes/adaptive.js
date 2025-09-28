import { Router } from 'express';
import {
    getAdaptivePlan,
    updateAdaptiveProgress
} from '../controllers/adaptiveController.js';
import { requireAuth } from '../utils/auth.js';

const router = Router();

router.get('/:userId', requireAuth, getAdaptivePlan);
router.put('/:userId/progress', requireAuth, updateAdaptiveProgress);

export default router;
