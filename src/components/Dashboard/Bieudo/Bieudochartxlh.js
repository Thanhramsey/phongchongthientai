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
    var url =
      Config.backend +
      "/api/bieudo/getthoigianxlh?nam=" +
      time +
      "&cap=" +
      cap +
      "&donvi=" +
      donvi +
      "&mau=1";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setTlhoanthanhxlh(Object.values(data[0]));
        setTonghoanthanhxlh(Object.values(data[1]));
        setHtdunghanxlh(Object.values(data[2]));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getthoigian_tsl = () => {
    var time = nam.getFullYear();
    var url =
      Config.backend +
      "/api/bieudo/getthoigianxlh_tsl?nam=" +
      time +
      "&cap=" +
      cap +
      "&donvi=" +
      donvi +
      "&mau=2";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setTlhoanthanhxlh_tsl(Object.values(data[0]));
        setTonghoanthanhxlh_tsl(Object.values(data[1]));
        setHtdunghanxlh_tsl(Object.values(data[2]));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getthoigian_fiber = () => {
    var time = nam.getFullYear();
    var url =
      Config.backend +
      "/api/bieudo/getthoigianxlh_fiber?nam=" +
      time +
      "&cap=" +
      cap +
      "&donvi=" +
      donvi +
      "&mau=3";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setTlhoanthanhxlh_fiber(Object.values(data[0]));
        setTonghoanthanhxlh_fiber(Object.values(data[1]));
        setHtdunghanxlh_fiber(Object.values(data[2]));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getthoigian_mytv = () => {
    var time = nam.getFullYear();
    var url =
      Config.backend +
      "/api/bieudo/getthoigianxlh_mytv?nam=" +
      time +
      "&cap=" +
      cap +
      "&donvi=" +
      donvi +
      "&mau=4";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setTlhoanthanhxlh_mytv(Object.values(data[0]));
        setTonghoanthanhxlh_mytv(Object.values(data[1]));
        setHtdunghanxlh_mytv(Object.values(data[2]));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getthoigian_cd = () => {
    var time = nam.getFullYear();
    var url =
      Config.backend +
      "/api/bieudo/getthoigianxlh_cd?nam=" +
      time +
      "&cap=" +
      cap +
      "&donvi=" +
      donvi +
      "&mau=5";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setTlhoanthanhxlh_cd(Object.values(data[0]));
        setTonghoanthanhxlh_cd(Object.values(data[1]));
        setHtdunghanxlh_cd(Object.values(data[2]));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const data_thoigianxlh = {
    labels: x_time,
    datasets: [
      {
        type: "line",
        label: "TL HT ????ng h???n",
        fill: true,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "#00ec00",
        data: tlhoanthanhxlh,
        yAxisID: "left-axis",
      },
      {
        label: "T???ng phi???u ???? HT",
        fill: true,
        backgroundColor: "#a0522d",
        borderColor: "#a0522d",
        data: tonghoanthanhxlh,
      },
      {
        label: "???? HT ????ng h???n",
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
        label: "TL HT ????ng h???n",
        fill: true,
        backgroundColor: "#f3d500",
        borderColor: "#00ec00",
        data: tlhoanthanhxlh_tsl,
        yAxisID: "left-axis",
      },
      {
        label: "T???ng phi???u ???? HT",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: tonghoanthanhxlh_tsl,
      },
      {
        label: "???? HT ????ng h???n",
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
        label: "TL HT ????ng h???n",
        fill: true,
        backgroundColor: "#f3d500",
        borderColor: "#00ec00",
        data: tlhoanthanhxlh_fiber,
        yAxisID: "left-axis",
      },
      {
        label: "T???ng phi???u ???? HT",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: tonghoanthanhxlh_fiber,
      },
      {
        label: "???? HT ????ng h???n",
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
        label: "TL HT ????ng h???n",
        fill: true,
        backgroundColor: "#f3d500",
        borderColor: "#00ec00",
        data: tlhoanthanhxlh_mytv,
        yAxisID: "left-axis",
      },
      {
        label: "T???ng phi???u ???? HT",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: tonghoanthanhxlh_mytv,
      },
      {
        label: "???? HT ????ng h???n",
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
        label: "TL HT ????ng h???n",
        fill: true,
        backgroundColor: "#f3d500",
        borderColor: "#00ec00",
        data: tlhoanthanhxlh_cd,
        yAxisID: "left-axis",
      },
      {
        label: "T???ng phi???u ???? HT",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: tonghoanthanhxlh_cd,
      },
      {
        label: "???? HT ????ng h???n",
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
  return (
    <div>
      <div className={classes.chitieu_4_total}>
        Ch??? ti??u TGXLH BSC (brcd+ mytv+ c??? ?????nh)
        <Chart
          type="bar"
          data={data_thoigianxlh}
          options={options_thoigianxlh}
        />
      </div>
      <div className={classes.chitieu_4_child}>
        Ch??? ti??u TGXLH Tsl
        <Chart
          type="bar"
          data={data_thoigianxlh_tsl}
          options={options_thoigianxlh_tsl}
        />
      </div>
      <div className={classes.chitieu_4_child}>
        Ch??? ti??u TGXLH Fiber
        <Chart
          type="bar"
          data={data_thoigianxlh_fiber}
          options={options_thoigianxlh_fiber}
        />
      </div>
      <div className={classes.chitieu_4_child}>
        Ch??? ti??u TGXLH Mytv
        <Chart
          type="bar"
          data={data_thoigianxlh_mytv}
          options={options_thoigianxlh_mytv}
        />
      </div>
      <div className={classes.chitieu_4_child}>
        Ch??? ti??u TGXLH C??
        <Chart
          type="bar"
          data={data_thoigianxlh_cd}
          options={options_thoigianxlh_cd}
        />
      </div>
    </div>
  );
});

Bieudochart.propTypes = {
  nam: PropTypes.instanceOf(Date),
  cap: PropTypes.string,
  donvi: PropTypes.string,
  chitieu: PropTypes.number,
};
export default Bieudochart;
