import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import evaluateQuizAnswer from './utils/quizEval.js';
import dotenv from 'dotenv';

dotenv.config();


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = path.join(__dirname, '..', '..', 'dist');

app.use(express.json());
app.use(express.static(distPath));

app.get('/api/quizgenerator', (req, res) => {
    res.send("for api")
})

app.post('/api/quiz', async (req, res) => {
    const { question, answer } = req.body;

    if (!question || !answer) {
        return res.status(400).send({ error: "Both 'question' and 'answer' are required in the request body." });
    }

    try {
        const result = await evaluateQuizAnswer(question, answer);
        res.send(result);
    } catch (error) {
        console.error('Error evaluating quiz answer:', error);
        res.status(500).send({ error: "An error occurred while evaluating the answer." });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})