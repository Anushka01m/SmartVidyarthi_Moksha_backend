import { Router } from 'express';
import { askBot } from '../controllers/faqBotController.js';
import { requireAuth } from '../utils/auth.js';

const router = Router();

router.post('/ask', requireAuth, askBot);

export default router;
