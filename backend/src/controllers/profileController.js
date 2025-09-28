import { getUserProfile, updateUserProfile } from '../models/userModel.js';

export async function getProfile(req, res) {
    const profile = await getUserProfile(req.params.id);
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.json(profile);
}

export async function updateProfile(req, res) {
    await updateUserProfile(req.params.id, req.body);
    res.json({ success: true });
}
