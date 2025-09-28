import { Router } from 'express';
import {
    getSuggestions,
    addSuggestion,
    voteSuggestion
} from '../controllers/suggestionController.js';
import { requireAuth } from '../utils/auth.js';

const router = Router();

router.get('/', requireAuth, getSuggestions);
router.post('/', requireAuth, addSuggestion);
router.post('/:id/vote', requireAuth, voteSuggestion);

export default router;
