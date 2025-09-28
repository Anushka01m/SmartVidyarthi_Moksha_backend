import { Router } from 'express';
import {
    getAlerts,
    clearAlert
} from '../controllers/alertController.js';
import { requireAuth } from '../utils/auth.js';

const router = Router();

router.get('/:userId', requireAuth, getAlerts);
