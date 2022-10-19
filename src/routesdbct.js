import Dashboard from "@material-ui/icons/Dashboard";
import DashboardBangRong from "views/DashboardBangRong/DashboardBangRong.js";
import DashboardMyTv from "views/DashboardMyTv/DashboardMyTv.js";

const dashboardChitiet = [
  {
    path: "/dashboardbangrong",
    name: "Dashboard Băng rộng",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardBangRong,
    layout: "/admin",
    sub: 0,
    role: ["admin"],
  },
  {
    path: "/dashboardmytv",
    name: "Dashboard MyTv",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardMyTv,
    layout: "/admin",
    sub: 0,
    role: ["user"],
  },
];

export default dashboardChitiet;
