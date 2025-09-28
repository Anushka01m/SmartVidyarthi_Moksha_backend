import { query } from '../../db.js';

export async function getAllSuggestions() {
    const res = await query('SELECT * FROM suggestions ORDER BY votes DESC', []);
    return res.rows;
}

export async function addCommunitySuggestion({ user_id, text }) {
    await query('INSERT INTO suggestions (user_id, text, votes) VALUES ($1, $2, $3)', [user_id, text, 0]);
}

export async function voteOnSuggestion(suggestionId, userId) {
    await query('UPDATE suggestions SET votes = votes + 1 WHERE id = $1', [suggestionId]);
}
