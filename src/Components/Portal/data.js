import {
  DashboardIcon,
  ScheduleIcon,
  SettingsIcon,
  TransactionsIcon,
  UserIcon,
} from "../../Assets/svg";

export const navMenu = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Transactions",
    icon: <TransactionsIcon />,
  },
  {
    name: "Schedules",
    icon: <ScheduleIcon />,
  },
  {
    name: "Users",
    icon: <UserIcon />,
  },
  {
    name: "Settings",
    icon: <SettingsIcon />,
  },
];

export const total = [
  {
    heading: "Total Investments",
    value: "$25,000",
    color: "#DDEFE0",
  },
  {
    heading: "Total Transactions",
    value: "$500",
    color: "#F4ECDD",
  },
  {
    heading: "Total Profit",
    value: "$20",
    color: "#EFDADA",
  },
  {
    heading: "Types of Currency",
    value: "2",
    color: "#DEE0EF",
  },
];

export const updates = [
  {
    heading: "Ethereum Increase by 1%",
    subHeading: "Today at 15:20",
    color: "#9BDD7C",
  },
  {
    heading: "Bitcoin Decrease by 0.75%",
    subHeading: "Today at 12:05",
    color: "red",
  },
];
