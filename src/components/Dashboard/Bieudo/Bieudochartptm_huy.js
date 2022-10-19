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
  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };
  const { nam, cap, donvi, chitieu } = props;
  const classes = useStyles();
  const [ptmfiber, setPtmfiber] = React.useState(null);
  const [huyfiber, setHuyfiber] = React.useState(null);
  const [ptmmytv, setPtmmytv] = React.useState(null);
  const [huymytv, setHuymytv] = React.useState(null);
  const [ptmtsl, setPtmtsl] = React.useState(null);
  const [huytsl, setHuytsl] = React.useState(null);
  const [ptmcd, setPtmcd] = React.useState(null);
  const [huycd, setHuycd] = React.useState(null);
  const [ptmims, setPtmims] = React.useState(null);
  const [huyims, setHuyims] = React.useState(null);
  const token = localStorage.getItem("token");
  var obj = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const getfiber = () => {
    var time = nam.getFullYear();
    var url =
      Config.backend +
      "/api/bieudo/getptmhuyfiber?nam=" +
      time +
      "&cap=" +
      cap +
      "&donvi=" +
      donvi +
      "&mau=1";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setPtmfiber(Object.values(data[0]));
        setHuyfiber(Object.values(data[1]));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getmytv = () => {
    var time = nam.getFullYear();
    var url =
      Config.backend +
      "/api/bieudo/getptmhuymytv?nam=" +
      time +
      "&cap=" +
      cap +
      "&donvi=" +
      donvi +
      "&mau=2";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setPtmmytv(Object.values(data[0]));
        setHuymytv(Object.values(data[1]));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const gettsl = () => {
    var time = nam.getFullYear();
    var url =
      Config.backend +
      "/api/bieudo/getptmhuytsl?nam=" +
      time +
      "&cap=" +
      cap +
      "&donvi=" +
      donvi +
      "&mau=3";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setPtmtsl(Object.values(data[0]));
        setHuytsl(Object.values(data[1]));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getcodinh = () => {
    var time = nam.getFullYear();
    var url =
      Config.backend +
      "/api/bieudo/getptmhuycd?nam=" +
      time +
      "&cap=" +
      cap +
      "&donvi=" +
      donvi +
      "&mau=4";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setPtmcd(Object.values(data[0]));
        setHuycd(Object.values(data[1]));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getims = () => {
    var time = nam.getFullYear();
    var url =
      Config.backend +
      "/api/bieudo/getptmhuyims?nam=" +
      time +
      "&cap=" +
      cap +
      "&donvi=" +
      donvi +
      "&mau=5";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setPtmims(Object.values(data[0]));
        setHuyims(Object.values(data[1]));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const data_fiber = {
    labels: x_time,
    datasets: [
      {
        label: "Phát triển mới",
        fill: true,
        backgroundColor: "#a0522d",
        borderColor: "#a0522d",
        data: ptmfiber,
      },
      {
        label: "Hủy",
        fill: true,
        backgroundColor: "#fff",
        borderColor: "#fff",
        data: huyfiber,
      },
    ],
  };
  const data_mytv = {
    labels: x_time,
    datasets: [
      {
        label: "Phát triển mới",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: ptmmytv,
      },
      {
        label: "Hủy",
        fill: true,
        backgroundColor: "#00f3cb",
        borderColor: "#00f3cb",
        data: huymytv,
      },
    ],
  };
  const data_tsl = {
    labels: x_time,
    datasets: [
      {
        label: "Phát triển mới",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: ptmtsl,
      },
      {
        label: "Hủy",
        fill: true,
        backgroundColor: "#00f3cb",
        borderColor: "#00f3cb",
        data: huytsl,
      },
    ],
  };
  const data_codinh = {
    labels: x_time,
    datasets: [
      {
        label: "Phát triển mới",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: ptmcd,
      },
      {
        label: "Hủy",
        fill: true,
        backgroundColor: "#00f3cb",
        borderColor: "#00f3cb",
        data: huycd,
      },
    ],
  };
  const data_ims = {
    labels: x_time,
    datasets: [
      {
        label: "Phát triển mới",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: ptmims,
      },
      {
        label: "Hủy",
        fill: true,
        backgroundColor: "#00f3cb",
        borderColor: "#00f3cb",
        data: huyims,
      },
    ],
  };
  React.useEffect(() => {
    getfiber();
    getmytv();
    gettsl();
    getcodinh();
    getims();
  }, [nam, donvi, cap, chitieu]);
  React.useEffect(() => {
    getfiber();
    getmytv();
    gettsl();
    getcodinh();
    getims();
  }, []);
  return (
    <div>
      <div className={classes.chitieu_4_child_ptm_top}>
        Chỉ tiêu Fiber
        <Chart type="bar" data={data_fiber} options={options} />
      </div>
      <div className={classes.chitieu_4_child_ptm}>
        Chỉ tiêu Mytv
        <Chart type="bar" data={data_mytv} options={options} />
      </div>
      <div className={classes.chitieu_4_child_ptm}>
        Chỉ tiêu TSL
        <Chart type="bar" data={data_tsl} options={options} />
      </div>
      <div className={classes.chitieu_4_child_ptm}>
        Chỉ tiêu Cố định
        <Chart type="bar" data={data_codinh} options={options} />
      </div>
      <div className={classes.chitieu_4_child_ptm}>
        Chỉ tiêu IMS
        <Chart type="bar" data={data_ims} options={options} />
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
