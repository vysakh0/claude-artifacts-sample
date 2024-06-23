import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    layout: "TwoColumn",
    components: [
      {
        type: "Card",
        props: { className: "p-4 bg-white shadow rounded" },
        children: [
          {
            type: "CardHeader",
            props: { className: "pb-4" },
            children: [
              {
                type: "h2",
                props: { className: "text-lg font-bold" },
                children: [
                  { type: "text", props: { children: "Sales Overview" } },
                ],
              },
            ],
          },
          {
            type: "CardContent",
            props: {},
            children: [
              {
                type: "LineChart",
                props: {
                  width: 500,
                  height: 300,
                  data: [
                    { name: "Jan", sales: 4000, revenue: 2400 },
                    { name: "Feb", sales: 3000, revenue: 1398 },
                    { name: "Mar", sales: 5000, revenue: 3000 },
                    { name: "Apr", sales: 2780, revenue: 3908 },
                    { name: "May", sales: 1890, revenue: 4800 },
                    { name: "Jun", sales: 2390, revenue: 3800 },
                  ],
                  margin: { top: 5, right: 30, left: 20, bottom: 5 },
                },
                children: [
                  { type: "XAxis", props: { dataKey: "name" } },
                  { type: "YAxis", props: {} },
                  { type: "CartesianGrid", props: { strokeDasharray: "3 3" } },
                  { type: "Tooltip", props: {} },
                  { type: "Legend", props: {} },
                  {
                    type: "Line",
                    props: {
                      type: "monotone",
                      dataKey: "sales",
                      stroke: "#8884d8",
                    },
                  },
                  {
                    type: "Line",
                    props: {
                      type: "monotone",
                      dataKey: "revenue",
                      stroke: "#82ca9d",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "Card",
        props: { className: "p-4 bg-white shadow rounded" },
        children: [
          {
            type: "CardHeader",
            props: { className: "pb-4" },
            children: [
              {
                type: "h2",
                props: { className: "text-lg font-bold" },
                children: [{ type: "text", props: { children: "Actions" } }],
              },
            ],
          },
          {
            type: "CardContent",
            props: {},
            children: [
              {
                type: "Button",
                props: { variant: "outline", className: "mr-2" },
                children: [
                  { type: "text", props: { children: "View Report" } },
                ],
              },
              {
                type: "Button",
                props: {},
                children: [
                  { type: "text", props: { children: "Download Data" } },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
}
