import { Router } from 'express';
import {
    requestMentor,
    getMentorList,
    chatWithMentor
} from '../controllers/mentorController.js';
import { requireAuth } from '../utils/auth.js';

const router = Router();

router.post('/request', requireAuth, requestMentor);
router.get('/list', requireAuth, getMentorList);
router.post('/chat', requireAuth, chatWithMentor);

export default router;
