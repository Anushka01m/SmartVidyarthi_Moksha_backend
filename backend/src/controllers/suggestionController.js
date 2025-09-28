import { getAllSuggestions, addCommunitySuggestion, voteOnSuggestion } from '../models/suggestionModel.js';

export async function getSuggestions(req, res) {
    const suggestions = await getAllSuggestions();
    res.json(suggestions);
}

export async function addSuggestion(req, res) {
    await addCommunitySuggestion(req.body);
    res.json({ success: true });
}

export async function voteSuggestion(req, res) {
    await voteOnSuggestion(req.params.id, req.user.id);
    res.json({ success: true });
}
