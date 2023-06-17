interface Info {
  month: string;
  value: number;
}

interface Icons {
  name: string;
  icon: string;
  bgColor: string;
}

interface Sales {
  title: string;
  subtitle: string;
  icons: Icons[];
  info: Info[];
}

interface SalesData {
  sales: Sales[];
}

export const salesData: SalesData = {
  sales: [
    {
      title: "Active Users",
      subtitle: "<strong>(+23%)</strong> than last week",
      icons: [
        {
          name: "Users",
          icon: "/public/icons/profile.svg",
          bgColor: "#6f42c1",
        },
        {
          name: "Clicks",
          icon: "/public/icons/setting.svg",
          bgColor: "#2152ff",
        },
        { name: "Sales", icon: "/public/icons/sales.svg", bgColor: "#fd7e14" },
        { name: "Items", icon: "/public/icons/items.svg", bgColor: "$danger" },
      ],
      info: [
        { month: "Apr", value: 450 },
        { month: "May", value: 200 },
        { month: "Jun", value: 100 },
        { month: "Jul", value: 220 },
        { month: "Aug", value: 500 },
        { month: "Sep", value: 100 },
        { month: "Oct", value: 400 },
        { month: "Nov", value: 230 },
        { month: "Dec", value: 500 },
      ],
    },
  ],
};
