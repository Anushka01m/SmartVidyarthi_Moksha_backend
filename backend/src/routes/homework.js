import { Router } from 'express';
import {
    getHomeworkList,
    assignHomework,
    submitHomework
} from '../controllers/homeworkController.js';
import { requireAuth } from '../utils/auth.js';

const router = Router();

router.get('/:userId', requireAuth, getHomeworkList);
router.post('/assign', requireAuth, assignHomework);
router.post('/submit', requireAuth, submitHomework);

export default router;
