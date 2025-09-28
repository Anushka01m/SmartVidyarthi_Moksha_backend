import { query } from '../../db.js';

export async function getMascotForUser(userId) {
    const res = await query(
        'SELECT mascot_id FROM users WHERE id = $1',
        [userId]
    );
    return res.rows[0];
}

export async function setMascotForUser(userId, mascotId) {
    await query('UPDATE users SET mascot_id = $1 WHERE id = $2', [mascotId, userId]);
}
