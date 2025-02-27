import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.API_KEY;

async function generateQuiz(topic, difficulty, questionAmount, style) {
  try {
    const response = await axios.post(
      "https://api.anthropic.com/v1/messages",
      {
        model: "claude-3-5-sonnet-20241022",
        messages: [
          {
            role: "user",
            content: buildQuizPrompt(topic, difficulty, questionAmount, style),
          },
        ],
        max_tokens: 2000,
      },
      {
        headers: {
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
      }
    );

    const quizData = extractJson(response.data);
    const questions = quizData.questions || [];
    console.log("Generated Questions:", questions);
    return questions;
  } catch (error) {
    handleClaudeError(error);
  }
}

function buildQuizPrompt(topic, difficulty, questionAmount, style) {
  return `Generate ${questionAmount} ${style}-style ${difficulty} questions about ${topic}.

Example #1 Selection from user: 

User: {
    "topic": "Fortnite",
    "difficulty": "Easy",
    "questionAmount": 5,
    "style": "yoda"   
}

{
  Set of Example questions #1 Generated: [
    { "id": 1, "text": "First landing spot in Fortnite, what is it?", "voice_indicators": ["mysterious", "wise"] },
    { "id": 2, "text": "Victory Royale, how to achieve, hmm?", "voice_indicators": ["curious", "inquisitive"] },
    { "id": 3, "text": "Best weapon in battle, which is it?", "voice_indicators": ["wise", "challenging"] },
    { "id": 4, "text": "Shield potions use, explain you must.", "voice_indicators": ["instructive", "guiding"] },
    { "id": 5, "text": "Storm circle, what happens if inside you are not?", "voice_indicators": ["warning", "urgent"] }
  ]
} 

Example #2 Selection from user: {
User: {
    "topic": "React",
    "difficulty": "Medium",
    "questionAmount": 5,
    "style": "yoda"
}

{
    Set of Example questions #2 Generated: [
        { "id": 1, "text": "Functional components and class components, differences what are?", "voice_indicators": ["inquisitive", "thoughtful"] },
        { "id": 2, "text": "State management, why choose Redux should you?", "voice_indicators": ["wise", "challenging"] },
        { "id": 3, "text": "UseEffect hook, its purpose explain you must.", "voice_indicators": ["curious", "guiding"] },
        { "id": 4, "text": "Props and state, how do they differ?", "voice_indicators": ["instructive", "informative"] },
        { "id": 5, "text": "Virtual DOM in React, why faster than real DOM it is?", "voice_indicators": ["mysterious", "wise"] }
    ]
}
}

Set of Example questions #3 Generated: [
  User: {
    "topic": "American History",
    "difficulty": "Hard",
    "questionAmount": 5,
    "style": "Shakespeare"
}

{
    Set of Example questions #3 Generated: [
        { "id": 1, "text": "The Constitution, noble charter of this land, for what cause was it thus penned?", "voice_indicators": ["eloquent", "thoughtful"] },
        { "id": 2, "text": "Pray, what foul discord did lead this nation to civil war's cruel embrace?", "voice_indicators": ["dramatic", "serious"] },
        { "id": 3, "text": "The Declaration of Independence, a parchment of defiance or a beacon of liberty?", "voice_indicators": ["philosophical", "grand"] },
        { "id": 4, "text": "The Louisiana Purchase, a boon most vast—how did it shape the fate of yon nation?", "voice_indicators": ["poetic", "reflective"] },
        { "id": 5, "text": "The balance of power, a game most perilous—how doth it shield us from tyranny's cruel hand?", "voice_indicators": ["wise", "dramatic"] }
    ]
}
]

JSON Template:
{
  "questions": [
    { "id": 1, "text": "...[question]...", "voice_indicators": ["attribute1", "attribute2"] }
  ]
}`;
}

function extractJson(responseData) {
  const jsonMatch = responseData?.content?.[0]?.text?.match(/{[\s\S]*}/);
  if (!jsonMatch) throw new Error("No valid JSON found in response");
  try {
    return JSON.parse(jsonMatch[0]);
  } catch (e) {
    throw new Error("Invalid JSON format from API");
  }
}

function handleClaudeError(error) {
  if (error.response) {
    console.error(
      `API Error ${error.response.status}: ${
        error.response.data.error?.message || "Unknown error"
      }`
    );
  } else if (error.code === "ECONNABORTED") {
    console.error("Request timed out");
  } else {
    console.error(`Network error: ${error.message}`);
  }
}

export default generateQuiz;
