import { getAllAssignments, submitAssignment, assignAssignment } from '../models/assignmentModel.js';

export async function getAssignments(req, res) {
    const assignments = await getAllAssignments();
    res.json(assignments);
}

export async function submitAssignment(req, res) {
    await submitAssignment(req.body.userId, req.body.assignmentId, req.body.answers);
    res.json({ success: true });
}

export async function assignAssignment(req, res) {
    await assignAssignment(req.body.teacherId, req.body.studentId, req.body.assignment);
    res.json({ success: true });
}
