import { getQuizzesByLesson, recordQuizSubmission } from '../models/quizModel.js';

export async function getQuizzes(req, res) {
    const { lessonId } = req.params;
    const { rows } = await getQuizzesByLesson(lessonId);
    res.json(rows);
}
export async function submitQuiz(req, res) {
    const { userId, quizId, score } = req.body;
    await recordQuizSubmission(userId, quizId, score);
    res.json({ success: true });
}
