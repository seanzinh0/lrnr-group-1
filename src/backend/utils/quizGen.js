import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.API_KEY;

async function generateQuiz() {
    const topic = "Fortnite";
    const difficulty = "Medium";
    const questionAmount = 5;
    const style = "Normal";
    
    try {
        const response = await axios.post('https://api.anthropic.com/v1/messages', {
            model: 'claude-3-5-sonnet-20241022',
            messages: [
                { role: 'user', content: buildQuizPrompt(topic, difficulty, questionAmount, style) }
            ],
            max_tokens: 2000
        }, {
            headers: {
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01',
                'content-type': 'application/json'
            }
        });
        
        const quizData = extractJson(response.data);
        const questions = quizData.questions || [];
        console.log('Generated Questions:', questions);
        return questions;
    } catch (error) {
        handleClaudeError(error);
    }
}

function buildQuizPrompt(topic, difficulty, questionAmount, style) {
    return `Generate educational questions in JSON format with character-specific voices.

Structure:
{
  "topic": "${topic}",
  "difficulty": "${difficulty}",
  "question_amount": ${questionAmount},
  "style": "${style}",
  "questions": [
    {
      "id": 1,
      "text": "...[voice-styled question]...",
      "voice_indicators": ["term", "term"]
    }
  ]
}

<parameters>
- Question amounts: Any integer from dropdown
- Voice styles: {Pirate|Professor|Robot|Detective|Normal}
- Difficulty impacts:
  • Vocabulary complexity
  • Sentence structure
  • Required analysis depth
</parameters>

<style_rules>
1. Pirate:
   - Use "Arrr!", "Ye", "Plunder"
   - Threat metaphors ("Walk the plank...")
   - Nautical references
2. Professor:
   - Formal academic jargon
   - "Analyze...", "Critically evaluate..."
   - Citation references
3. Normal:
   - Neutral professional tone
   - Clear direct questions
   - Zero colloquialisms
</style_rules>

<validation>
1. Strict voice consistency throughout
2. No markdown in JSON
3. Style must influence but not compromise accuracy
4. Voice indicators required for each question
5. Question count matches input exactly
</validation>`;
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

generateQuiz();
