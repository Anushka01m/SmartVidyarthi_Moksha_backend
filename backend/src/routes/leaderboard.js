import { Router } from 'express';
import { getLeaderboard } from '../controllers/leaderboardController.js';
import { requireAuth } from '../utils/auth.js';

const router = Router();

router.get('/', requireAuth, getLeaderboard);

export default router;
