// src/pages/api/get-component-config.ts

import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY;
const CLAUDE_API_URL = "https://api.anthropic.com/v1/chat/completions";

const createPrompt = (userMessage: string) => `
You are a UI configuration generator for a React application. Your task is to create a configuration object based on the user's request. The configuration should be suitable for rendering a dynamic user interface.

User's request: "${userMessage}"

Generate a configuration object that fulfills the user's request. The configuration should include:

1. A 'layout' property specifying the overall layout (e.g., 'SingleColumn', 'TwoColumn', 'ThreeColumn', 'Grid').
2. A 'components' array containing top-level components to render.
3. Each component should have a 'type', 'props', and optionally 'children'.
4. Include appropriate components based on the user's request, such as charts, information displays, or interactive elements.
5. Use realistic and relevant data for any charts or metrics.
6. Ensure all necessary properties for each component are included (e.g., 'key', 'className').

Available components include:
- shadcn/ui: Card, CardHeader, CardContent, Button, Alert, AlertTitle, AlertDescription
- recharts: LineChart, BarChart, PieChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
- HTML elements: h1, h2, h3, p, div, span

The configuration should be a valid JSON object. Respond with only the JSON object, no additional explanations.
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!CLAUDE_API_KEY) {
    return res.status(500).json({ error: "Claude API key is not set" });
  }

  const userMessage = req.body.message;

  if (!userMessage) {
    return res
      .status(400)
      .json({ error: "No message provided in the request body" });
  }

  try {
    const response = await axios.post(
      CLAUDE_API_URL,
      {
        model: "claude-3-opus-20240229",
        messages: [{ role: "user", content: createPrompt(userMessage) }],
        max_tokens: 2000,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": CLAUDE_API_KEY,
        },
      }
    );

    const generatedConfig = JSON.parse(response.data.content[0].text);

    res.status(200).json(generatedConfig);
  } catch (error) {
    console.error("Error calling Claude API:", error);
    res
      .status(500)
      .json({ error: "Failed to generate component configuration" });
  }
}
