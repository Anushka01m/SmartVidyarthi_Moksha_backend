import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { query } from './db.js';

// Import all routes
import authRoutes from './src/routes/auth.js';
import usersRoutes from './src/routes/users.js';
import mentorRoutes from './src/routes/mentor.js';
import contentRoutes from './src/routes/content.js';
import quizRoutes from './src/routes/quiz.js';
import messagesRoutes from './src/routes/messages.js';
import leaderboardRoutes from './src/routes/leaderboard.js';
import profileRoutes from './src/routes/profile.js';
import adaptiveRoutes from './src/routes/adaptive.js';
import suggestionsRoutes from './src/routes/suggestions.js';
import homeworkRoutes from './src/routes/homework.js';
import faqBotRoutes from './src/routes/faq_bot.js';
import alertsRoutes from './src/routes/alerts.js';
import assignmentsRoutes from './src/routes/assignments.js';
import teacherRoutes from './src/routes/teacher.js';
import adminRoutes from './src/routes/admin.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/mentor', mentorRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/adaptive', adaptiveRoutes);
app.use('/api/suggestions', suggestionsRoutes);
app.use('/api/homework', homeworkRoutes);
app.use('/api/faq_bot', faqBotRoutes);
app.use('/api/alerts', alertsRoutes);
app.use('/api/assignments', assignmentsRoutes);
app.use('/api/teacher', teacherRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
