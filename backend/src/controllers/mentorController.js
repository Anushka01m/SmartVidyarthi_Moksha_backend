import { createMentorRequest, getAllMentors, sendMentorMessage } from '../models/mentorModel.js';

export async function requestMentor(req, res) {
    await createMentorRequest(req.user.id);
    res.json({ success: true });
}

export async function getMentorList(req, res) {
    const mentors = await getAllMentors();
    res.json(mentors);
}

export async function chatWithMentor(req, res) {
    const { mentorId, message } = req.body;
    await sendMentorMessage(req.user.id, mentorId, message);
    res.json({ success: true });
}
