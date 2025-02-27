import { render, screen, fireEvent } from "@testing-library/react";
import QuizGenerator from "./QuizGenerator";

test("renders Quiz Generator page with correct options", () => {
  render(<QuizGenerator />);

  // Check if dropdown displays topics
  const topicDropdown = screen.getByText(/Topic/i);
  expect(topicDropdown).toBeInTheDocument();

  // Check if submit button is clickable
  const button = screen.getByText(/Submit/i);
  expect(button).toBeInTheDocument();
});
