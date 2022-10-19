import Baocaosotandan from "views/Baocaosotan/Baocaosotandan.js";
import Baocaoptttbvt from "views/Baocaoptttbvt/Baocaoptttbvt.js";

const routebaocao = [
  {
    path: "/baocaosotandan",
    name: "Báo cáo sơ tán dân",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Baocaosotandan,
    layout: "/admin",
    sub: 0,
  },
  {
    path: "/baocaoptttbvt",
    name: "Báo cáo PT-TTB-VT",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Baocaoptttbvt,
    layout: "/admin",
    sub: 0,
  },
];

export default routebaocao;
