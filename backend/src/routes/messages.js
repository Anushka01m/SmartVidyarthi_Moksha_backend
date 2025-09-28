import { Router } from 'express';
import {
    getMessages,
    sendMessage
} from '../controllers/messageController.js';
import { requireAuth } from '../utils/auth.js';

const router = Router();

router.get('/:userId', requireAuth, getMessages);
router.post('/', requireAuth, sendMessage);

export default router;
