const res = {
  layout: "TwoColumn",
  components: [
    {
      type: "Card",
      props: {
        key: "revenue-chart",
        className: "col-span-2",
      },
      children: [
        {
          type: "CardHeader",
          children: [
            {
              type: "h2",
              props: {
                className: "text-2xl font-bold",
              },
              children: "Revenue Overview",
            },
          ],
        },
        {
          type: "CardContent",
          children: [
            {
              type: "LineChart",
              props: {
                width: 800,
                height: 400,
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
                {
                  type: "CartesianGrid",
                  props: { strokeDasharray: "3 3" },
                },
                {
                  type: "XAxis",
                  props: { dataKey: "month" },
                },
                {
                  type: "YAxis",
                },
                {
                  type: "Tooltip",
                },
                {
                  type: "Legend",
                },
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
        key: "total-revenue",
        className: "col-span-1",
      },
      children: [
        {
          type: "CardHeader",
          children: [
            {
              type: "h3",
              props: {
                className: "text-xl font-semibold",
              },
              children: "Total Revenue",
            },
          ],
        },
        {
          type: "CardContent",
          children: [
            {
              type: "p",
              props: {
                className: "text-3xl font-bold",
              },
              children: "$28,000",
            },
            {
              type: "p",
              props: {
                className: "text-sm text-gray-500",
              },
              children: "+12% from last month",
            },
          ],
        },
      ],
    },
    {
      type: "Card",
      props: {
        key: "average-order-value",
        className: "col-span-1",
      },
      children: [
        {
          type: "CardHeader",
          children: [
            {
              type: "h3",
              props: {
                className: "text-xl font-semibold",
              },
              children: "Average Order Value",
            },
          ],
        },
        {
          type: "CardContent",
          children: [
            {
              type: "p",
              props: {
                className: "text-3xl font-bold",
              },
              children: "$250",
            },
            {
              type: "p",
              props: {
                className: "text-sm text-gray-500",
              },
              children: "+5% from last month",
            },
          ],
        },
      ],
    },
  ],
};

export default res;
