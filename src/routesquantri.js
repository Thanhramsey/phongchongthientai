import RolesMenuPermission from "views/RolesMenuPermission/RolesMenuPermission.js";
import Danhmucdonvi from "views/Danhmucdonvi/Danhmucdonvi.js";
import Danhmucdiadanh from "views/Danhmucdiadanh/Danhmucdiadanh.js";
import Phuongtienttbvt from "views/Phuongtienttbvt/Phuongtienttbvt.js";

const dashboardquantri = [
  {
    path: "/phuongtienttbvt",
    name: "Phương tiện, TTB, VT",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Phuongtienttbvt,
    layout: "/admin",
    sub: 0,
  },
  {
    path: "/danhmucdiadanh",
    name: "Danh mục địa danh",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Danhmucdiadanh,
    layout: "/admin",
    sub: 0,
  },
  {
    path: "/rolesmenupermission",
    name: "Role And Permission",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: RolesMenuPermission,
    layout: "/admin",
    sub: 0,
  },
  {
    path: "/Danhmucdonvi",
    name: "Danh mục đơn vị",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Danhmucdonvi,
    layout: "/admin",
    sub: 0,
  },
];

export default dashboardquantri;
