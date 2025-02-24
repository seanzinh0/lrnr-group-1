import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createQuiz } from './utils/quizGen.js'; // Updated import

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = path.join(__dirname, '..', '..', 'dist');

app.use(express.json());
app.use(express.static(distPath));

app.post('/api/quizgenerator', async (req, res) => {
    const { topic, difficulty, questions, style } = req.body;
    try {
        //creating quiz based off of chosen parameters from quiz gen file 
        const quiz = await createQuiz(topic, difficulty, questions, style);
        res.json(quiz);
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate quiz' });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

const port = process.env.PORT;
app.listen(3000, () => {
    console.log(`Server is running on port ${port}`);
});