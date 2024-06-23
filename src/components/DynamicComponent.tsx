import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import DOMPurify from "dompurify";

interface ComponentConfig {
  type: string;
  props?: any;
  children?: ComponentConfig[] | string;
}

interface DashboardConfig {
  layout: string;
  components: ComponentConfig[];
}

// Updated type for componentMap
type ComponentMapType = {
  [key: string]:
    | React.ComponentType<any>
    | React.ForwardRefExoticComponent<any>
    | React.FC<any>;
};

const componentMap: ComponentMapType = {
  Button,
  Card,
  CardHeader,
  CardContent,
  Alert,
  AlertTitle,
  AlertDescription,
  LineChart,
  BarChart,
  PieChart,
  Line: Line as React.FC<any>,
  Bar: Bar as React.FC<any>,
  Pie: Pie as React.FC<any>,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
};

const validHtmlTags = [
  "div",
  "span",
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "a",
  "img",
  "ul",
  "ol",
  "li",
  "table",
  "tr",
  "td",
  "th",
  "form",
  "input",
  "textarea",
  "button",
  "select",
  "option",
  "label",
  "strong",
  "em",
  "code",
  "pre",
  "blockquote",
  "hr",
  "br",
  "iframe",
];

const DynamicComponent: React.FC<{ config: DashboardConfig }> = ({
  config,
}) => {
  const sanitizeProps = (props: any) => {
    if (!props || typeof props !== "object") {
      return {};
    }

    const sanitizedProps: any = {};
    for (const [key, value] of Object.entries(props)) {
      if (typeof value === "string") {
        sanitizedProps[key] = DOMPurify.sanitize(value);
      } else {
        sanitizedProps[key] = value;
      }
    }
    return sanitizedProps;
  };

  const renderChildren = (children: ComponentConfig[] | string | undefined) => {
    if (Array.isArray(children)) {
      return children.map(renderComponent);
    } else if (typeof children === "string") {
      return DOMPurify.sanitize(children);
    } else {
      return null;
    }
  };

  const renderComponent = (
    componentConfig: ComponentConfig
  ): React.ReactNode => {
    const { type, props = {}, children } = componentConfig;
    const sanitizedProps = sanitizeProps(props);

    if (validHtmlTags.includes(type.toLowerCase())) {
      return React.createElement(
        type,
        sanitizedProps,
        renderChildren(children)
      );
    }

    const Component = componentMap[type];
    if (!Component) {
      console.error(`Unknown component type: ${type}`);
      return null;
    }

    return (
      <Component {...sanitizedProps}>{renderChildren(children)}</Component>
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
