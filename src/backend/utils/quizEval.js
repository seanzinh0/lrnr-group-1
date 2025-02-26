import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.API_KEY;

async function evaluateQuizAnswer(question, answer) {
    try {
        const response = await axios.post('https://api.anthropic.com/v1/messages', {
            model: 'claude-3-5-sonnet-20241022',
            messages: [
                { role: 'user', content: buildEvaluationPrompt(question, answer) }
            ],
            max_tokens: 2000
        }, {
            headers: {
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'content-type': 'application/json'
            }
        });

        const evaluationData = extractJson(response.data);
        const evaluation = evaluationData.evaluation || "No evaluation provided.";
        const correctness = evaluationData.correct || "Incorrect";
        const confidence = evaluationData.confidence || 0; // Confidence score (0-100)

        console.log('Evaluation:', evaluation);
        console.log('Correctness:', correctness);
        console.log('Confidence:', confidence);

        return { correct: correctness, evaluation: evaluation, confidence: confidence };
    } catch (error) {
        handleClaudeError(error);
    }
}

function buildEvaluationPrompt(question, answer) {
    return `Evaluate the following answer to the question and determine if it is correct or not. Provide a concise, friendly, and constructive evaluation in a paragraph, dont be to direct as it can come off as mean. be sure to be helpful and say what it is that can be improved when incorrect not correct. Include a confidence score (0-100) based on how well the answer matches the expected response. Focus on key terms and phrases in the answer, and provide actionable feedback for improvement if the answer is incorrect. Also there is no partially correct or incorrect answer just strictly correct or incorrect.

For example:
- If the question is "Does Css stand for Cascading Style Sheets", and the user enter just yes or just a small answer that is correct, it should be correct.
- If the question is "What is the capital of France?" and the answer is "Paris," it should be considered correct.
- If the answer is "Paris, France," it should also be considered correct.
- If the answer is "The capital is Paris," it should still be considered correct.
- If the question is "What is the chemical formula for water?" and the answer is "H2O," it should be considered correct.
- If the answer is "Water is H2O," it should also be considered correct.
- If the answer is "H20" (with a typo), it should be considered incorrect, and the evaluation should suggest correcting the typo.

Question: ${question}
Answer: ${answer}

JSON Template:
{
  "correct": "Correct or Incorrect",
  "evaluation": "Concise, professional, and constructive evaluation of the answer.",
  "confidence": "Confidence score (0-100)"
}`;
}

function extractJson(responseData) {
    const jsonMatch = responseData?.content?.[0]?.text?.match(/{[\s\S]*}/);
    if (!jsonMatch) throw new Error('No valid JSON found in response');
    try {
        return JSON.parse(jsonMatch[0]);
    } catch (e) {
        throw new Error('Invalid JSON format from API');
    }
}

function handleClaudeError(error) {
    if (error.response) {
        console.error(`API Error ${error.response.status}: ${error.response.data.error?.message || 'Unknown error'}`);
    } else if (error.code === 'ECONNABORTED') {
        console.error('Request timed out');
    } else {
        console.error(`Network error: ${error.message}`);
    }
}

export default evaluateQuizAnswer;


