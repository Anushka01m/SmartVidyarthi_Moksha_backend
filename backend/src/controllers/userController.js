import {
    getUserById,
    updateUserById,
    deleteUserById,
    getAllUsers,
    updateXP
} from '../models/userModel.js';

export async function getUser(req, res) {
    const user = await getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
}

export async function updateUser(req, res) {
    await updateUserById(req.params.id, req.body);
    res.json({ success: true });
}

export async function deleteUser(req, res) {
    await deleteUserById(req.params.id);
    res.json({ success: true });
}

export async function listAllUsers(req, res) {
    const users = await getAllUsers();
    res.json(users);
}

export async function updateUserXP(req, res) {
    const { userId, xp } = req.body;
    await updateXP(userId, xp);
    res.json({ success: true });
}
