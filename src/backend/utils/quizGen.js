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
