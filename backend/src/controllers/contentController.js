import { getContentByLesson, createContent, updateContent } from '../models/contentModel.js';

export async function getLessonContent(req, res) {
    const content = await getContentByLesson(req.params.lessonId);
    res.json(content);
}

export async function addLessonContent(req, res) {
    await createContent(req.body);
    res.json({ success: true });
}

export async function updateLessonContent(req, res) {
    await updateContent(req.params.lessonId, req.body);
    res.json({ success: true });
}
