const res = {
  layout: "TwoColumn",
  components: [
    {
      type: "Card",
      props: {
        key: "revenue-card",
        className: "mb-4",
      },
      children: [
        {
          type: "CardHeader",
          props: {},
          children: [
            {
              type: "h2",
              props: {
                className: "text-2xl font-bold",
              },
              children: ["Revenue Overview"],
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
                width: 600,
                height: 300,
                data: [
                  { month: "Jan", revenue: 4000 },
                  { month: "Feb", revenue: 3000 },
                  { month: "Mar", revenue: 5000 },
                  { month: "Apr", revenue: 4500 },
                  { month: "May", revenue: 6000 },
                  { month: "Jun", revenue: 5500 },
                ],
              },
              children: [
                { type: "CartesianGrid", props: { strokeDasharray: "3 3" } },
                { type: "XAxis", props: { dataKey: "month" } },
                { type: "YAxis", props: {} },
                { type: "Tooltip", props: {} },
                { type: "Legend", props: {} },
                {
                  type: "Line",
                  props: {
                    type: "monotone",
                    dataKey: "revenue",
                    stroke: "#8884d8",
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
      props: {
        key: "transactions-card",
        className: "mb-4",
      },
      children: [
        {
          type: "CardHeader",
          props: {},
          children: [
            {
              type: "h2",
              props: {
                className: "text-2xl font-bold",
              },
              children: ["Recent Transactions"],
            },
          ],
        },
        {
          type: "CardContent",
          props: {},
          children: [
            {
              type: "div",
              props: {
                className: "space-y-2",
              },
              children: [
                {
                  type: "p",
                  props: {},
                  children: ["Transaction #1234 - $500 - Completed"],
                },
                {
                  type: "p",
                  props: {},
                  children: ["Transaction #1235 - $750 - Pending"],
                },
                {
                  type: "p",
                  props: {},
                  children: ["Transaction #1236 - $1000 - Completed"],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "Card",
      props: {
        key: "customer-stats-card",
        className: "mb-4",
      },
      children: [
        {
          type: "CardHeader",
          props: {},
          children: [
            {
              type: "h2",
              props: {
                className: "text-2xl font-bold",
              },
              children: ["Customer Statistics"],
            },
          ],
        },
        {
          type: "CardContent",
          props: {},
          children: [
            {
              type: "PieChart",
              props: {
                width: 400,
                height: 300,
              },
              children: [
                {
                  type: "Pie",
                  props: {
                    data: [
                      { name: "New", value: 400 },
                      { name: "Returning", value: 300 },
                      { name: "Inactive", value: 100 },
                    ],
                    dataKey: "value",
                    nameKey: "name",
                    cx: "50%",
                    cy: "50%",
                    outerRadius: 80,
                    fill: "#8884d8",
                  },
                },
                { type: "Tooltip", props: {} },
                { type: "Legend", props: {} },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "Alert",
      props: {
        key: "system-alert",
        variant: "default",
      },
      children: [
        {
          type: "AlertTitle",
          props: {},
          children: ["System Update"],
        },
        {
          type: "AlertDescription",
          props: {},
          children: [
            "A new version of the payment system will be deployed tonight at 2 AM UTC.",
          ],
        },
      ],
    },
    {
      type: "div",
      props: {
        key: "action-buttons",
        className: "flex space-x-4 mt-4",
      },
      children: [
        {
          type: "Button",
          props: {
            variant: "default",
          },
          children: ["Generate Report"],
        },
        {
          type: "Button",
          props: {
            variant: "outline",
          },
          children: ["View All Transactions"],
        },
      ],
    },
  ],
};
export default res;
