import Dieuphoiptttbvt from "views/Dieuphoiptttbvt/Dieuphoiptttbvt.js";
import Dieudonglucluong from "views/Dieudonglucluong/Dieudonglucluong.js";
import Didanghepho from "views/Didanghepho/Didanghepho.js";
import Dotthientai from "views/Dotthientai/Dotthientai.js";
import Kichhoatcapdothientai from "views/Kichhoatcapdothientai/Kichhoatcapdothientai.js";
import Giamsatcamera from "views/Giamsatcamera/Giamsatcamera.js";
import Nhiemvu from "views/Nhiemvu/Nhiemvu.js";

const ungphoroutes = [
  {
    path: "/dotthientai",
    name: "Đợt thiên tai",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Dotthientai,
    layout: "/admin",
    sub: 0,
  },
  {
    path: "/kichhoatcapdothientai",
    name: "Kích hoạt cấp độ thiên tai",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Kichhoatcapdothientai,
    layout: "/admin",
    sub: 0,
  },
  {
    path: "/didanghepho",
    name: "Sơ tán dân",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Didanghepho,
    layout: "/admin",
    sub: 0,
  },
  {
    path: "/dieudonglucluong",
    name: "Lực lượng ứng phó",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Dieudonglucluong,
    layout: "/admin",
    sub: 0,
  },
  {
    path: "/dieuphoiptttbvt",
    name: "Điều phối PT, TTB, VT",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Dieuphoiptttbvt,
    layout: "/admin",
    sub: 0,
  },
  {
    path: "/giamsatcamera",
    name: "Giám sát Camera",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Giamsatcamera,
    layout: "/admin",
    sub: 0,
  },
  {
    path: "/nhiemvu",
    name: "Nhiệm vụ",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Nhiemvu,
    layout: "/admin",
    sub: 0,
  },
];

export default ungphoroutes;
