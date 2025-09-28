import { query } from '../../db.js';

export async function getAllAssignments() {
    const res = await query('SELECT * FROM assignments ORDER BY due_date ASC', []);
    return res.rows;
}

export async function submitAssignment(userId, assignmentId, answers) {
    await query(
        'INSERT INTO assignment_submissions (user_id, assignment_id, answers, submitted_at) VALUES ($1, $2, $3, NOW())',
        [userId, assignmentId, answers]
    );
}

export async function assignAssignment(teacherId, studentId, assignment) {
    await query(
        'INSERT INTO assignments (teacher_id, student_id, title, description, due_date) VALUES ($1, $2, $3, $4, $5)',
        [teacherId, studentId, assignment.title, assignment.description, assignment.due_date]
    );
}
