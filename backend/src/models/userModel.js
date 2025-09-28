import { query } from '../../db.js';

export async function getUserById(id) {
    const res = await query('SELECT id, name, email, role, xp FROM users WHERE id = $1', [id]);
    return res.rows[0];
}

export async function getUserByEmail(email) {
    const res = await query('SELECT * FROM users WHERE email = $1', [email]);
    return res.rows[0];
}

export async function createUser(name, email, password) {
    await query('INSERT INTO users (name, email, password, role, xp) VALUES ($1, $2, $3, $4, $5)', [name, email, password, 'student', 0]);
}

export async function updateUserById(id, body) {
    await query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [body.name, body.email, id]);
}

export async function updateXP(id, xp) {
    await query('UPDATE users SET xp = $1 WHERE id = $2', [xp, id]);
}

export async function deleteUserById(id) {
    await query('DELETE FROM users WHERE id = $1', [id]);
}

export async function getAllUsers() {
    const res = await query('SELECT id, name, email, role, xp FROM users', []);
    return res.rows;
}

export async function getLeaderboardUsers() {
    const res = await query('SELECT name, xp FROM users ORDER BY xp DESC LIMIT 10', []);
    return res.rows;
}

export async function promoteUser(id, role) {
    await query('UPDATE users SET role = $1 WHERE id = $2', [role, id]);
}

export async function removeUser(id) {
    await query('DELETE FROM users WHERE id = $1', [id]);
}

export async function getUserProfile(id) {
    const res = await query('SELECT id, name, email, role, xp FROM users WHERE id = $1', [id]);
    return res.rows[0];
}

export async function updateUserProfile(id, body) {
    await query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [body.name, body.email, id]);
}
