import { addBadgeToUser } from '../models/badgeModel.js';

export async function awardBadge(req, res) {
    await addBadgeToUser(req.body.userId, req.body.badgeId);
    res.json({ success: true });
}
