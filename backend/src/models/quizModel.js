import { query } from '../../db.js';

export async function getQuizzesByLesson(lessonId) {
    return await query('SELECT * FROM quizzes WHERE lesson_id = $1', [lessonId]);
}

export async function recordQuizSubmission(userId, quizId, score) {
    await query('INSERT INTO quiz_submissions (user_id, quiz_id, score) VALUES ($1, $2, $3)', [userId, quizId, score]);
}
