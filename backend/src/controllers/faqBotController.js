import { getBotAnswer } from '../models/faqBotModel.js';

export async function askBot(req, res) {
    const answer = await getBotAnswer(req.body.question);
    res.json({ answer });
}
