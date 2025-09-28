import { query } from '../../db.js';

export async function getContentByLesson(lessonId) {
    const res = await query('SELECT * FROM lesson_content WHERE lesson_id = $1', [lessonId]);
    return res.rows;
}

export async function createContent({ lesson_id, title, body }) {
    await query('INSERT INTO lesson_content (lesson_id, title, body) VALUES ($1, $2, $3)', [lesson_id, title, body]);
}

export async function updateContent(lessonId, { title, body }) {
    await query('UPDATE lesson_content SET title = $1, body = $2 WHERE lesson_id = $3', [title, body, lessonId]);
}
