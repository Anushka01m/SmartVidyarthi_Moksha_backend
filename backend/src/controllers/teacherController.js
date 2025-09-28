import { getStudents, reviewHomework, sendAlert } from '../models/teacherModel.js';

export async function getStudentsList(req, res) {
    const students = await getStudents();
    res.json(students);
}

export async function reviewHomeworkSubmission(req, res) {
    await reviewHomework(req.body.homeworkId, req.body.feedback);
    res.json({ success: true });
}

export async function sendProgressAlert(req, res) {
    await sendAlert(req.body.studentId, req.body.message);
    res.json({ success: true });
}
