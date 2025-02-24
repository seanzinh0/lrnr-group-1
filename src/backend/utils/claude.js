import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.CLAUDE_API_KEY;
export async function generateQuiz(prompt) {
  try {
    // Send a request to the Anthropic API to generate a quiz based on the provided prompt
    const response = await axios.post(
      "https://api.anthropic.com/v1/messages",
      {
        model: "claude-3-5-sonnet-20241022",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 1000,
      },
      {
        headers: {
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error generating quiz:", error);
    throw error;
  }
}
