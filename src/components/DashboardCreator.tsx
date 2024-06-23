// src/components/DashboardGenerator.tsx

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DynamicComponent from "./DynamicComponent";

const DashboardGenerator: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [dashboardConfig, setDashboardConfig] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const generateDashboard = async () => {
    if (!userInput.trim()) {
      setError("Please enter a description for your dashboard.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/get-component-config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate dashboard configuration");
      }

      const config = await response.json();
      setDashboardConfig(config);
    } catch (err) {
      setError(
        "An error occurred while generating the dashboard. Please try again."
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dynamic Dashboard Generator</h1>
      <div className="flex gap-2 mb-4">
        <Input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Describe your dashboard (e.g., 'Create a sales performance dashboard')"
          className="flex-grow"
        />
        <Button onClick={generateDashboard} disabled={isLoading}>
          {isLoading ? "Generating..." : "Generate Dashboard"}
        </Button>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {dashboardConfig && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Generated Dashboard</h2>
          <DynamicComponent config={dashboardConfig} />
        </div>
      )}
    </div>
  );
};

export default DashboardGenerator;
