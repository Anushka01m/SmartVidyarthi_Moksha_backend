import { getAllUsers, promoteUser, removeUser } from '../models/userModel.js';

export async function listUsers(req, res) {
    const users = await getAllUsers();
    res.json(users);
}

export async function promoteUserToTeacher(req, res) {
    await promoteUser(req.body.userId, "teacher");
    res.json({ success: true });
}

export async function deleteUserAccount(req, res) {
    await removeUser(req.body.userId);
    res.json({ success: true });
}
