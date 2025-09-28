import jwt from 'jsonwebtoken';

export function requireAuth(req, res, next) {
    const auth = req.headers['authorization'];
    if (!auth) return res.status(401).json({ message: "Unauthorized" });
    try {
        const decoded = jwt.verify(auth.replace('Bearer ', ''), process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch {
        res.status(401).json({ message: "Invalid token" });
    }
}

export function requireAdmin(req, res, next) {
    if (req.user && req.user.role === 'admin') next();
    else res.status(403).json({ message: "Admins only" });
}
