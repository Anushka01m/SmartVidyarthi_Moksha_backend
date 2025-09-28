import { getHomeworkForUser, assignHomeworkToStudent, submitHomeworkForReview } from '../models/homeworkModel.js';

export async function getHomeworkList(req, res) {
    const homework = await getHomeworkForUser(req.params.userId);
    res.json(homework);
}

export async function assignHomework(req, res) {
    await assignHomeworkToStudent(req.body.teacherId, req.body.studentId, req.body.homework);
    res.json({ success: true });
}

export async function submitHomework(req, res) {
    await submitHomeworkForReview(req.body.studentId, req.body.homeworkId, req.body.answers);
    res.json({ success: true });
}
