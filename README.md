# Dynamic Dashboard Generator

## Overview

This project is a Dynamic Dashboard Generator inspired by Claude's artifacts system. It allows users to create customizable, interactive dashboards using natural language prompts. The system interprets these prompts and generates a dynamic UI configuration, which is then rendered as a fully functional dashboard.

## Features

- **Natural Language Input**: Generate dashboards by describing them in plain English.
- **Dynamic Component Rendering**: Automatically render various UI components based on the generated configuration.
- **Customizable Layouts**: Support for different layout options (e.g., single column, two columns).
- **Integration with Claude API**: Utilizes the Claude API to interpret prompts and generate dashboard configurations.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Shadcn UI Components
- Recharts for data visualization

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- A Claude API key

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/vysakh0/claude-artifacts-sample.git
   cd claude-artifacts-sample
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Claude API key:

   ```
   CLAUDE_API_KEY=your_api_key_here
   ```

4. Run the development server:

   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Usage

1. Navigate to the main page of the application.
2. In the input field, describe the dashboard you want to create. For example:
   "Create a sales dashboard with monthly revenue trends and top-selling products"
3. Click the "Generate Dashboard" button.
4. The system will process your request and display the generated dashboard.

## Customization

- Modify the `tailwind.config.js` file to customize the overall theme and styles.
- Add new component types in the `DynamicComponent.tsx` file to support additional UI elements.
- Extend the prompt processing logic in the API route to handle more complex dashboard requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the Claude AI artifacts system
- UI components from Shadcn UI
- Charts powered by Recharts
