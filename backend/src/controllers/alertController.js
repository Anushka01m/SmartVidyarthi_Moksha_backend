import { getUserAlerts, clearUserAlert } from '../models/alertModel.js';

export async function getAlerts(req, res) {
    const alerts = await getUserAlerts(req.params.userId);
    res.json(alerts);
}

export async function clearAlert(req, res) {
    await clearUserAlert(req.body.alertId);
    res.json({ success: true });
}
