import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface ComponentConfig {
  type: string;
  props: any;
  children?: ComponentConfig[];
}

interface DashboardConfig {
  layout: string;
  components: ComponentConfig[];
}

const componentMap: { [key: string]: React.ComponentType<any> } = {
  Button,
  Card,
  CardHeader,
  CardContent,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
};

const DynamicComponent: React.FC<{ config: DashboardConfig }> = ({
  config,
}) => {
  const renderComponent = (
    componentConfig: ComponentConfig
  ): React.ReactNode => {
    const Component = componentMap[componentConfig.type];
    if (!Component) {
      console.error(`Unknown component type: ${componentConfig.type}`);
      return null;
    }

    return (
      <Component {...componentConfig.props}>
        {componentConfig.children?.map(renderComponent)}
      </Component>
    );
  };

  return (
    <div
      className={`grid grid-cols-${
        config.layout === "TwoColumn" ? "2" : "1"
      } gap-4`}
    >
      {config.components.map(renderComponent)}
    </div>
  );
};

export default DynamicComponent;
