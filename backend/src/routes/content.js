import { Router } from 'express';
import {
    getLessonContent,
    addLessonContent,
    updateLessonContent
} from '../controllers/contentController.js';
import { requireAuth } from '../utils/auth.js';

const router = Router();

router.get('/:lessonId', requireAuth, getLessonContent);
router.post('/', requireAuth, addLessonContent);
router.put('/:lessonId', requireAuth, updateLessonContent);

export default router;
