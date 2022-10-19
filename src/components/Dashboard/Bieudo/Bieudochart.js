import React from "react";
import styles from "assets/jss/material-dashboard-react/components/bieudo.js";
const useStyles = makeStyles(styles);
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  BarElement,
  BarController,
  Legend,
} from "chart.js";
ChartJS.register(
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  BarElement,
  BarController,
  Legend
);
import Config from "conFig.js";
const Bieudochart = React.memo(function Bieudochart(props) {
  let x_time = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let options_thoigiantldv = {
    maintainAspectRatio: false,
    color: "#fff",
    responsive: true,

    tooltips: { mode: "index", intersect: false },
    hover: { mode: "nearest", intersect: true },
    scales: {
      yAxes: {
        type: "linear",
        position: "right",
        ticks: {
          color: "#fff",
        },
      },
      xAxes: {
        ticks: {
          color: "#00fff0",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        display: true,
      },
    },
  };
  let options_thoigiantldv_tsl = {
    maintainAspectRatio: false,
    color: "#fff",
    responsive: true,

    tooltips: { mode: "index", intersect: false },
    hover: { mode: "nearest", intersect: true },
    scales: {
      yAxes: {
        type: "linear",
        position: "right",
        ticks: {
          color: "#fff",
        },
      },
      xAxes: {
        ticks: {
          color: "#00fff0",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        display: true,
      },
    },
  };
  let options_thoigiantldv_fiber = {
    maintainAspectRatio: false,
    color: "#fff",
    responsive: true,

    tooltips: { mode: "index", intersect: false },
    hover: { mode: "nearest", intersect: true },
    scales: {
      yAxes: {
        type: "linear",
        position: "right",
        ticks: {
          color: "#fff",
        },
      },
      xAxes: {
        ticks: {
          color: "#00fff0",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        display: true,
      },
    },
  };
  let options_thoigiantldv_mytv = {
    maintainAspectRatio: false,
    color: "#fff",
    responsive: true,

    tooltips: { mode: "index", intersect: false },
    hover: { mode: "nearest", intersect: true },
    scales: {
      yAxes: {
        type: "linear",
        position: "right",
        ticks: {
          color: "#fff",
        },
      },
      xAxes: {
        ticks: {
          color: "#00fff0",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        display: true,
      },
    },
  };
  let options_thoigiantldv_cd = {
    maintainAspectRatio: false,
    color: "#fff",
    responsive: true,

    tooltips: { mode: "index", intersect: false },
    hover: { mode: "nearest", intersect: true },
    scales: {
      yAxes: {
        type: "linear",
        position: "right",
        ticks: {
          color: "#fff",
        },
      },
      xAxes: {
        ticks: {
          color: "#00fff0",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        display: true,
      },
    },
  };
  let options_thoigianxlh = {
    maintainAspectRatio: false,
    color: "#fff",
    responsive: true,

    tooltips: { mode: "index", intersect: false },
    hover: { mode: "nearest", intersect: true },
    scales: {
      yAxes: {
        type: "linear",
        position: "right",
        ticks: {
          color: "#fff",
        },
      },
      xAxes: {
        ticks: {
          color: "#00fff0",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        display: true,
      },
    },
  };
  let options_thoigianxlh_tsl = {
    maintainAspectRatio: false,
    color: "#fff",
    responsive: true,

    tooltips: { mode: "index", intersect: false },
    hover: { mode: "nearest", intersect: true },
    scales: {
      yAxes: {
        type: "linear",
        position: "right",
        ticks: {
          color: "#fff",
        },
      },
      xAxes: {
        ticks: {
          color: "#00fff0",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        display: true,
      },
    },
  };
  let options_thoigianxlh_fiber = {
    maintainAspectRatio: false,
    color: "#fff",
    responsive: true,

    tooltips: { mode: "index", intersect: false },
    hover: { mode: "nearest", intersect: true },
    scales: {
      yAxes: {
        type: "linear",
        position: "right",
        ticks: {
          color: "#fff",
        },
      },
      xAxes: {
        ticks: {
          color: "#00fff0",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        display: true,
      },
    },
  };
  let options_thoigianxlh_mytv = {
    maintainAspectRatio: false,
    color: "#fff",
    responsive: true,

    tooltips: { mode: "index", intersect: false },
    hover: { mode: "nearest", intersect: true },
    scales: {
      yAxes: {
        type: "linear",
        position: "right",
        ticks: {
          color: "#fff",
        },
      },
      xAxes: {
        ticks: {
          color: "#00fff0",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        display: true,
      },
    },
  };
  let options_thoigianxlh_cd = {
    maintainAspectRatio: false,
    color: "#fff",
    responsive: true,

    tooltips: { mode: "index", intersect: false },
    hover: { mode: "nearest", intersect: true },
    scales: {
      yAxes: {
        type: "linear",
        position: "right",
        ticks: {
          color: "#fff",
        },
      },
      xAxes: {
        ticks: {
          color: "#00fff0",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        display: true,
      },
    },
  };
  const { nam, cap, donvi, chitieu } = props;
  const classes = useStyles();
  const [tlhoanthanh, setTlhoanthanh] = React.useState(null);
  const [tonghoanthanh, setTonghoanthanh] = React.useState(null);
  const [htdunghan, setHtdunghan] = React.useState(null);
  const [tlhoanthanh_tsl, setTlhoanthanh_tsl] = React.useState(null);
  const [tonghoanthanh_tsl, setTonghoanthanh_tsl] = React.useState(null);
  const [htdunghan_tsl, setHtdunghan_tsl] = React.useState(null);
  const [tlhoanthanh_fiber, setTlhoanthanh_fiber] = React.useState(null);
  const [tonghoanthanh_fiber, setTonghoanthanh_fiber] = React.useState(null);
  const [htdunghan_fiber, setHtdunghan_fiber] = React.useState(null);
  const [tlhoanthanh_mytv, setTlhoanthanh_mytv] = React.useState(null);
  const [tonghoanthanh_mytv, setTonghoanthanh_mytv] = React.useState(null);
  const [htdunghan_mytv, setHtdunghan_mytv] = React.useState(null);
  const [tlhoanthanh_cd, setTlhoanthanh_cd] = React.useState(null);
  const [tonghoanthanh_cd, setTonghoanthanh_cd] = React.useState(null);
  const [htdunghan_cd, setHtdunghan_cd] = React.useState(null);
  const [tlhoanthanhxlh, setTlhoanthanhxlh] = React.useState(null);
  const [tonghoanthanhxlh, setTonghoanthanhxlh] = React.useState(null);
  const [htdunghanxlh, setHtdunghanxlh] = React.useState(null);
  const [tlhoanthanhxlh_tsl, setTlhoanthanhxlh_tsl] = React.useState(null);
  const [tonghoanthanhxlh_tsl, setTonghoanthanhxlh_tsl] = React.useState(null);
  const [htdunghanxlh_tsl, setHtdunghanxlh_tsl] = React.useState(null);
  const [tlhoanthanhxlh_fiber, setTlhoanthanhxlh_fiber] = React.useState(null);
  const [tonghoanthanhxlh_fiber, setTonghoanthanhxlh_fiber] = React.useState(
    null
  );
  const [htdunghanxlh_fiber, setHtdunghanxlh_fiber] = React.useState(null);
  const [tlhoanthanhxlh_mytv, setTlhoanthanhxlh_mytv] = React.useState(null);
  const [tonghoanthanhxlh_mytv, setTonghoanthanhxlh_mytv] = React.useState(
    null
  );
  const [htdunghanxlh_mytv, setHtdunghanxlh_mytv] = React.useState(null);
  const [tlhoanthanhxlh_cd, setTlhoanthanhxlh_cd] = React.useState(null);
  const [tonghoanthanhxlh_cd, setTonghoanthanhxlh_cd] = React.useState(null);
  const [htdunghanxlh_cd, setHtdunghanxlh_cd] = React.useState(null);
  const token = localStorage.getItem("token");
  var obj = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const getthoigian = () => {
    var time = nam.getFullYear();
    var url = "";
    if (chitieu === 1) {
      url = "";
    } else if (chitieu === 2) {
      url = "";
    } else if (chitieu === 3) {
      url = "";
    } else if (chitieu === 4) {
      url =
        Config.backend +
        "/api/bieudo/getthoigiantldv?nam=" +
        time +
        "&cap=" +
        cap +
        "&donvi=" +
        donvi +
        "&mau=1";
    } else if (chitieu === 5) {
      url =
        Config.backend +
        "/api/bieudo/getthoigianxlh?nam=" +
        time +
        "&cap=" +
        cap +
        "&donvi=" +
        donvi +
        "&mau=1";
    } else {
      url = "";
    }
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        if (chitieu === 4) {
          setTlhoanthanh(Object.values(data[0]));
          setTonghoanthanh(Object.values(data[1]));
          setHtdunghan(Object.values(data[2]));
        } else {
          setTlhoanthanhxlh(Object.values(data[0]));
          setTonghoanthanhxlh(Object.values(data[1]));
          setHtdunghanxlh(Object.values(data[2]));
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getthoigian_tsl = () => {
    var time = nam.getFullYear();
    var url = "";
    if (chitieu === 1) {
      url = "";
    } else if (chitieu === 2) {
      url = "";
    } else if (chitieu === 3) {
      url = "";
    } else if (chitieu === 4) {
      url =
        Config.backend +
        "/api/bieudo/getthoigiantldv_tsl?nam=" +
        time +
        "&cap=" +
        cap +
        "&donvi=" +
        donvi +
        "&mau=2";
    } else if (chitieu === 5) {
      url =
        Config.backend +
        "/api/bieudo/getthoigianxlh_tsl?nam=" +
        time +
        "&cap=" +
        cap +
        "&donvi=" +
        donvi +
        "&mau=2";
    } else {
      url = "";
    }
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        if (chitieu === 4) {
          setTlhoanthanh_tsl(Object.values(data[0]));
          setTonghoanthanh_tsl(Object.values(data[1]));
          setHtdunghan_tsl(Object.values(data[2]));
        } else {
          setTlhoanthanhxlh_tsl(Object.values(data[0]));
          setTonghoanthanhxlh_tsl(Object.values(data[1]));
          setHtdunghanxlh_tsl(Object.values(data[2]));
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getthoigian_fiber = () => {
    var time = nam.getFullYear();
    var url = "";
    if (chitieu === 1) {
      url = "";
    } else if (chitieu === 2) {
      url = "";
    } else if (chitieu === 3) {
      url = "";
    } else if (chitieu === 4) {
      url =
        Config.backend +
        "/api/bieudo/getthoigiantldv_fiber?nam=" +
        time +
        "&cap=" +
        cap +
        "&donvi=" +
        donvi +
        "&mau=3";
    } else if (chitieu === 5) {
      url =
        Config.backend +
        "/api/bieudo/getthoigianxlh_fiber?nam=" +
        time +
        "&cap=" +
        cap +
        "&donvi=" +
        donvi +
        "&mau=3";
    } else {
      url = "";
    }
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        if (chitieu === 4) {
          setTlhoanthanh_fiber(Object.values(data[0]));
          setTonghoanthanh_fiber(Object.values(data[1]));
          setHtdunghan_fiber(Object.values(data[2]));
        } else {
          setTlhoanthanhxlh_fiber(Object.values(data[0]));
          setTonghoanthanhxlh_fiber(Object.values(data[1]));
          setHtdunghanxlh_fiber(Object.values(data[2]));
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getthoigian_mytv = () => {
    var time = nam.getFullYear();
    var url = "";
    if (chitieu === 1) {
      url = "";
    } else if (chitieu === 2) {
      url = "";
    } else if (chitieu === 3) {
      url = "";
    } else if (chitieu === 4) {
      url =
        Config.backend +
        "/api/bieudo/getthoigiantldv_mytv?nam=" +
        time +
        "&cap=" +
        cap +
        "&donvi=" +
        donvi +
        "&mau=4";
    } else if (chitieu === 5) {
      url =
        Config.backend +
        "/api/bieudo/getthoigianxlh_mytv?nam=" +
        time +
        "&cap=" +
        cap +
        "&donvi=" +
        donvi +
        "&mau=4";
    } else {
      url = "";
    }
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        if (chitieu === 4) {
          setTlhoanthanh_mytv(Object.values(data[0]));
          setTonghoanthanh_mytv(Object.values(data[1]));
          setHtdunghan_mytv(Object.values(data[2]));
        } else {
          setTlhoanthanhxlh_mytv(Object.values(data[0]));
          setTonghoanthanhxlh_mytv(Object.values(data[1]));
          setHtdunghanxlh_mytv(Object.values(data[2]));
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getthoigian_cd = () => {
    var time = nam.getFullYear();
    var url = "";
    if (chitieu === 1) {
      url = "";
    } else if (chitieu === 2) {
      url = "";
    } else if (chitieu === 3) {
      url = "";
    } else if (chitieu === 4) {
      url =
        Config.backend +
        "/api/bieudo/getthoigiantldv_cd?nam=" +
        time +
        "&cap=" +
        cap +
        "&donvi=" +
        donvi +
        "&mau=5";
    } else if (chitieu === 5) {
      url =
        Config.backend +
        "/api/bieudo/getthoigianxlh_cd?nam=" +
        time +
        "&cap=" +
        cap +
        "&donvi=" +
        donvi +
        "&mau=5";
    } else {
      url = "";
    }
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        if (chitieu === 4) {
          setTlhoanthanh_cd(Object.values(data[0]));
          setTonghoanthanh_cd(Object.values(data[1]));
          setHtdunghan_cd(Object.values(data[2]));
        } else {
          setTlhoanthanhxlh_cd(Object.values(data[0]));
          setTonghoanthanhxlh_cd(Object.values(data[1]));
          setHtdunghanxlh_cd(Object.values(data[2]));
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const data_thoigiantldv = {
    labels: x_time,
    datasets: [
      {
        type: "line",
        label: "TL HT đúng hạn",
        fill: true,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "#00ec00",
        data: tlhoanthanh,
        yAxisID: "left-axis",
      },
      {
        label: "Tổng phiếu đã HT",
        fill: true,
        backgroundColor: "#a0522d",
        borderColor: "#a0522d",
        data: tonghoanthanh,
      },
      {
        label: "Đã HT đúng hạn",
        fill: true,
        backgroundColor: "#fff",
        borderColor: "#fff",
        data: htdunghan,
      },
    ],
  };
  const data_thoigiantldv_tsl = {
    labels: x_time,
    datasets: [
      {
        type: "line",
        label: "TL HT đúng hạn",
        fill: true,
        backgroundColor: "#f3d500",
        borderColor: "#00ec00",
        data: tlhoanthanh_tsl,
        yAxisID: "left-axis",
      },
      {
        label: "Tổng phiếu đã HT",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: tonghoanthanh_tsl,
      },
      {
        label: "Đã HT đúng hạn",
        fill: true,
        backgroundColor: "#00f3cb",
        borderColor: "#00f3cb",
        data: htdunghan_tsl,
      },
    ],
  };
  const data_thoigiantldv_fiber = {
    labels: x_time,
    datasets: [
      {
        type: "line",
        label: "TL HT đúng hạn",
        fill: true,
        backgroundColor: "#f3d500",
        borderColor: "#00ec00",
        data: tlhoanthanh_fiber,
        yAxisID: "left-axis",
      },
      {
        label: "Tổng phiếu đã HT",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: tonghoanthanh_fiber,
      },
      {
        label: "Đã HT đúng hạn",
        fill: true,
        backgroundColor: "#00f3cb",
        borderColor: "#00f3cb",
        data: htdunghan_fiber,
      },
    ],
  };
  const data_thoigiantldv_mytv = {
    labels: x_time,
    datasets: [
      {
        type: "line",
        label: "TL HT đúng hạn",
        fill: true,
        backgroundColor: "#f3d500",
        borderColor: "#00ec00",
        data: tlhoanthanh_mytv,
        yAxisID: "left-axis",
      },
      {
        label: "Tổng phiếu đã HT",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: tonghoanthanh_mytv,
      },
      {
        label: "Đã HT đúng hạn",
        fill: true,
        backgroundColor: "#00f3cb",
        borderColor: "#00f3cb",
        data: htdunghan_mytv,
      },
    ],
  };
  const data_thoigiantldv_cd = {
    labels: x_time,
    datasets: [
      {
        type: "line",
        label: "TL HT đúng hạn",
        fill: true,
        backgroundColor: "#f3d500",
        borderColor: "#00ec00",
        data: tlhoanthanh_cd,
        yAxisID: "left-axis",
      },
      {
        label: "Tổng phiếu đã HT",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: tonghoanthanh_cd,
      },
      {
        label: "Đã HT đúng hạn",
        fill: true,
        backgroundColor: "#00f3cb",
        borderColor: "#00f3cb",
        data: htdunghan_cd,
      },
    ],
  };
  const data_thoigianxlh = {
    labels: x_time,
    datasets: [
      {
        type: "line",
        label: "TL HT đúng hạn",
        fill: true,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "#00ec00",
        data: tlhoanthanhxlh,
        yAxisID: "left-axis",
      },
      {
        label: "Tổng phiếu đã HT",
        fill: true,
        backgroundColor: "#a0522d",
        borderColor: "#a0522d",
        data: tonghoanthanhxlh,
      },
      {
        label: "Đã HT đúng hạn",
        fill: true,
        backgroundColor: "#fff",
        borderColor: "#fff",
        data: htdunghanxlh,
      },
    ],
  };
  const data_thoigianxlh_tsl = {
    labels: x_time,
    datasets: [
      {
        type: "line",
        label: "TL HT đúng hạn",
        fill: true,
        backgroundColor: "#f3d500",
        borderColor: "#00ec00",
        data: tlhoanthanhxlh_tsl,
        yAxisID: "left-axis",
      },
      {
        label: "Tổng phiếu đã HT",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: tonghoanthanhxlh_tsl,
      },
      {
        label: "Đã HT đúng hạn",
        fill: true,
        backgroundColor: "#00f3cb",
        borderColor: "#00f3cb",
        data: htdunghanxlh_tsl,
      },
    ],
  };
  const data_thoigianxlh_fiber = {
    labels: x_time,
    datasets: [
      {
        type: "line",
        label: "TL HT đúng hạn",
        fill: true,
        backgroundColor: "#f3d500",
        borderColor: "#00ec00",
        data: tlhoanthanhxlh_fiber,
        yAxisID: "left-axis",
      },
      {
        label: "Tổng phiếu đã HT",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: tonghoanthanhxlh_fiber,
      },
      {
        label: "Đã HT đúng hạn",
        fill: true,
        backgroundColor: "#00f3cb",
        borderColor: "#00f3cb",
        data: htdunghanxlh_fiber,
      },
    ],
  };
  const data_thoigianxlh_mytv = {
    labels: x_time,
    datasets: [
      {
        type: "line",
        label: "TL HT đúng hạn",
        fill: true,
        backgroundColor: "#f3d500",
        borderColor: "#00ec00",
        data: tlhoanthanhxlh_mytv,
        yAxisID: "left-axis",
      },
      {
        label: "Tổng phiếu đã HT",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: tonghoanthanhxlh_mytv,
      },
      {
        label: "Đã HT đúng hạn",
        fill: true,
        backgroundColor: "#00f3cb",
        borderColor: "#00f3cb",
        data: htdunghanxlh_mytv,
      },
    ],
  };
  const data_thoigianxlh_cd = {
    labels: x_time,
    datasets: [
      {
        type: "line",
        label: "TL HT đúng hạn",
        fill: true,
        backgroundColor: "#f3d500",
        borderColor: "#00ec00",
        data: tlhoanthanhxlh_cd,
        yAxisID: "left-axis",
      },
      {
        label: "Tổng phiếu đã HT",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: tonghoanthanhxlh_cd,
      },
      {
        label: "Đã HT đúng hạn",
        fill: true,
        backgroundColor: "#00f3cb",
        borderColor: "#00f3cb",
        data: htdunghanxlh_cd,
      },
    ],
  };
  React.useEffect(() => {
    getthoigian();
    getthoigian_tsl();
    getthoigian_fiber();
    getthoigian_mytv();
    getthoigian_cd();
  }, [nam, donvi, cap, chitieu]);
  React.useEffect(() => {
    getthoigian();
    getthoigian_tsl();
    getthoigian_fiber();
    getthoigian_mytv();
    getthoigian_cd();
  }, []);
  if (chitieu === 4) {
    return (
      <div>
        <div className={classes.chitieu_4_total}>
          Chỉ tiêu TGTLDV BSC (brcd+ mytv+ cố định)
          <Chart
            type="bar"
            data={data_thoigiantldv}
            options={options_thoigiantldv}
          />
        </div>
        <div className={classes.chitieu_4_child}>
          Chỉ tiêu TGTLDV Tsl
          <Chart
            type="bar"
            data={data_thoigiantldv_tsl}
            options={options_thoigiantldv_tsl}
          />
        </div>
        <div className={classes.chitieu_4_child}>
          Chỉ tiêu TGTLDV Fiber
          <Chart
            type="bar"
            data={data_thoigiantldv_fiber}
            options={options_thoigiantldv_fiber}
          />
        </div>
        <div className={classes.chitieu_4_child}>
          Chỉ tiêu TGTLDV Mytv
          <Chart
            type="bar"
            data={data_thoigiantldv_mytv}
            options={options_thoigiantldv_mytv}
          />
        </div>
        <div className={classes.chitieu_4_child}>
          Chỉ tiêu TGTLDV CĐ
          <Chart
            type="bar"
            data={data_thoigiantldv_cd}
            options={options_thoigiantldv_cd}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={classes.chitieu_4_total}>
          Chỉ tiêu TGXLH BSC (brcd+ mytv+ cố định)
          <Chart
            type="bar"
            data={data_thoigianxlh}
            options={options_thoigianxlh}
          />
        </div>
        <div className={classes.chitieu_4_child}>
          Chỉ tiêu TGXLH Tsl
          <Chart
            type="bar"
            data={data_thoigianxlh_tsl}
            options={options_thoigianxlh_tsl}
          />
        </div>
        <div className={classes.chitieu_4_child}>
          Chỉ tiêu TGXLH Fiber
          <Chart
            type="bar"
            data={data_thoigianxlh_fiber}
            options={options_thoigianxlh_fiber}
          />
        </div>
        <div className={classes.chitieu_4_child}>
          Chỉ tiêu TGXLH Mytv
          <Chart
            type="bar"
            data={data_thoigianxlh_mytv}
            options={options_thoigianxlh_mytv}
          />
        </div>
        <div className={classes.chitieu_4_child}>
          Chỉ tiêu TGXLH CĐ
          <Chart
            type="bar"
            data={data_thoigianxlh_cd}
            options={options_thoigianxlh_cd}
          />
        </div>
      </div>
    );
  }
});

Bieudochart.propTypes = {
  nam: PropTypes.instanceOf(Date),
  cap: PropTypes.string,
  donvi: PropTypes.string,
  chitieu: PropTypes.number,
};
export default Bieudochart;
