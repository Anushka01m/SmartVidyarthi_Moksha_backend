import { getUserByEmail, createUser } from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function register(req, res) {
    const { name, email, password } = req.body;
    const userExists = await getUserByEmail(email);
    if (userExists) return res.status(400).json({ error: "Email registered" });
    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(name, email, hashedPassword);
    res.json({ success: true });
}

export async function login(req, res) {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).json({ error: "Invalid login" });
    }
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '12h' });
    res.json({ token, user: { id: user.id, name: user.name, role: user.role, email: user.email } });
}

export async function forgotPassword(req, res) {
    // Implement logic: email user with reset token or magic link
    res.json({ message: "Password reset link sent (demo)." });
}

export async function resetPassword(req, res) {
    // Implement reset logic (with token validation)
    res.json({ success: true });
}
