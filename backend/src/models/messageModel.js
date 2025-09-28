import { query } from '../../db.js';

export async function getMessagesBetweenUsers(user1, user2) {
    const res = await query(
        `SELECT * FROM messages WHERE (sender_id = $1 AND recipient_id = $2) OR (sender_id = $2 AND recipient_id = $1) ORDER BY sent_at ASC`,
        [user1, user2]
    );
    return res.rows;
}

export async function addMessage(senderId, recipientId, message) {
    await query(
        'INSERT INTO messages (sender_id, recipient_id, message, sent_at) VALUES ($1, $2, $3, NOW())',
        [senderId, recipientId, message]
    );
}
