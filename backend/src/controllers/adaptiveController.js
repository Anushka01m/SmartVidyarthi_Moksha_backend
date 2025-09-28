import { getAdaptivePlanForUser, updateAdaptiveProgress } from '../models/adaptiveModel.js';

export async function getAdaptivePlan(req, res) {
    const plan = await getAdaptivePlanForUser(req.params.userId);
    res.json(plan);
}

export async function updateAdaptiveProgress(req, res) {
    await updateAdaptiveProgress(req.params.userId, req.body.lessonId, req.body.newProgress);
    res.json({ success: true });
}
