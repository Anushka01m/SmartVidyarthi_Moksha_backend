import { Router } from 'express';
import { getQuizzes, submitQuiz } from '../controllers/quizController.js';
import { requireAuth } from '../utils/auth.js';
const router = Router();
router.get('/:lessonId', requireAuth, getQuizzes);
router.post('/submit', requireAuth, submitQuiz);
export default router;
