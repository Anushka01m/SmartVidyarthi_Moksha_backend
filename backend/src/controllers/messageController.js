import { getMessagesBetweenUsers, addMessage } from '../models/messageModel.js';

export async function getMessages(req, res) {
    const messages = await getMessagesBetweenUsers(req.user.id, req.params.userId);
    res.json(messages);
}

export async function sendMessage(req, res) {
    const { recipientId, message } = req.body;
    await addMessage(req.user.id, recipientId, message);
    res.json({ success: true });
}
