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
    return `Evaluate the following answer to the question and determine if it is correct or not. Provide a detailed evaluation in a paragraph and a confidence score (0-100) based on how well the answer matches the expected response. Focus on key terms and phrases in the answer.

For example:
- If the question is "What is the capital of France?" and the answer is "Paris," it should be considered correct.
- If the answer is "Paris, France," it should also be considered correct.
- If the answer is "The capital is Paris," it should still be considered correct.

Question: ${question}
Answer: ${answer}

JSON Template:
{
  "correct": "Correct or Incorrect",
  "evaluation": "Detailed evaluation of the answer.",
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


