import { getLeaderboardUsers } from '../models/userModel.js';

export async function getLeaderboard(req, res) {
    const leaderboard = await getLeaderboardUsers();
    res.json(leaderboard);
}
