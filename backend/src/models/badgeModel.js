import { query } from '../../db.js';

export async function addBadgeToUser(userId, badgeId) {
    await query('INSERT INTO user_badges (user_id, badge_id) VALUES ($1, $2)', [userId, badgeId]);
}

export async function getBadgesForUser(userId) {
    const res = await query(
        'SELECT b.id, b.title, b.icon FROM badges b JOIN user_badges ub ON b.id = ub.badge_id WHERE ub.user_id = $1',
        [userId]
    );
    return res.rows;
}
