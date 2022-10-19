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
  const [dichvu_tong, setDichvu_tong] = React.useState(null);
  const [dichvu_da, setDichvu_da] = React.useState(null);
  const [dichvu_dang, setDichvu_dang] = React.useState(null);
  const [tsl_tong, setTsl_tong] = React.useState(null);
  const [tsl_da, setTsl_da] = React.useState(null);
  const [tsl_dang, setTsl_dang] = React.useState(null);
  const [fiber_tong, setFiber_tong] = React.useState(null);
  const [fiber_da, setFiber_da] = React.useState(null);
  const [fiber_dang, setFiber_dang] = React.useState(null);
  const [mytv_tong, setMytv_tong] = React.useState(null);
  const [mytv_da, setMytv_da] = React.useState(null);
  const [mytv_dang, setMytv_dang] = React.useState(null);
  const [cd_tong, setCd_tong] = React.useState(null);
  const [cd_da, setCd_da] = React.useState(null);
  const [cd_dang, setCd_dang] = React.useState(null);
  const [cntt_tong, setCntt_tong] = React.useState(null);
  const [cntt_da, setCntt_da] = React.useState(null);
  const [cntt_dang, setCntt_dang] = React.useState(null);
  const token = localStorage.getItem("token");
  var obj = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const getdichvu = () => {
    var url = Config.backend + "/api/bieudo/getthicongldtbdv?nam=";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setDichvu_tong(Object.values(data[0]));
        setDichvu_da(Object.values(data[1]));
        setDichvu_dang(Object.values(data[2]));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const gettsl = () => {
    var url = Config.backend + "/api/bieudo/getthicongldtbtsl?nam=";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setTsl_tong(Object.values(data[0]));
        setTsl_da(Object.values(data[1]));
        setTsl_dang(Object.values(data[2]));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getfiber = () => {
    var url = Config.backend + "/api/bieudo/getthicongldtbfiber?nam=";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setFiber_tong(Object.values(data[0]));
        setFiber_da(Object.values(data[1]));
        setFiber_dang(Object.values(data[2]));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getmytv = () => {
    var url = Config.backend + "/api/bieudo/getthicongldtbmytv?nam=";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setMytv_tong(Object.values(data[0]));
        setMytv_da(Object.values(data[1]));
        setMytv_dang(Object.values(data[2]));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getcodinh = () => {
    var url = Config.backend + "/api/bieudo/getthicongldtbcd?nam=";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setCd_tong(Object.values(data[0]));
        setCd_da(Object.values(data[1]));
        setCd_dang(Object.values(data[2]));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getcntt = () => {
    var url = Config.backend + "/api/bieudo/getthicongldtbcntt?nam=";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setCntt_tong(Object.values(data[0]));
        setCntt_da(Object.values(data[1]));
        setCntt_dang(Object.values(data[2]));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const data_dichvu = {
    labels: x_time,
    datasets: [
      {
        label: "Tổng yêu cầu",
        fill: true,
        backgroundColor: "#a0522d",
        borderColor: "#a0522d",
        data: dichvu_tong,
      },
      {
        label: "Đã LĐ",
        fill: true,
        backgroundColor: "#fff",
        borderColor: "#fff",
        data: dichvu_da,
      },
      {
        label: "Đang thi công",
        fill: true,
        backgroundColor: "#ff0000",
        borderColor: "#ff0000",
        data: dichvu_dang,
      },
    ],
  };
  const data_tsl = {
    labels: x_time,
    datasets: [
      {
        label: "Tổng yêu cầu",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: tsl_tong,
      },
      {
        label: "Đã LĐ",
        fill: true,
        backgroundColor: "#00f3cb",
        borderColor: "#00f3cb",
        data: tsl_da,
      },
      {
        label: "Đang thi công",
        fill: true,
        backgroundColor: "#ff0000",
        borderColor: "#ff0000",
        data: tsl_dang,
      },
    ],
  };
  const data_fiber = {
    labels: x_time,
    datasets: [
      {
        label: "Tổng yêu cầu",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: fiber_tong,
      },
      {
        label: "Đã LĐ",
        fill: true,
        backgroundColor: "#00f3cb",
        borderColor: "#00f3cb",
        data: fiber_da,
      },
      {
        label: "Đang thi công",
        fill: true,
        backgroundColor: "#ff0000",
        borderColor: "#ff0000",
        data: fiber_dang,
      },
    ],
  };
  const data_mytv = {
    labels: x_time,
    datasets: [
      {
        label: "Tổng yêu cầu",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: mytv_tong,
      },
      {
        label: "Đã LĐ",
        fill: true,
        backgroundColor: "#00f3cb",
        borderColor: "#00f3cb",
        data: mytv_da,
      },
      {
        label: "Đang thi công",
        fill: true,
        backgroundColor: "#ff0000",
        borderColor: "#ff0000",
        data: mytv_dang,
      },
    ],
  };
  const data_cd = {
    labels: x_time,
    datasets: [
      {
        label: "Tổng yêu cầu",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: cd_tong,
      },
      {
        label: "Đã LĐ",
        fill: true,
        backgroundColor: "#00f3cb",
        borderColor: "#00f3cb",
        data: cd_da,
      },
      {
        label: "Đang thi công",
        fill: true,
        backgroundColor: "#ff0000",
        borderColor: "#ff0000",
        data: cd_dang,
      },
    ],
  };
  const data_cntt = {
    labels: x_time,
    datasets: [
      {
        label: "Tổng yêu cầu",
        fill: true,
        backgroundColor: "#ff6500",
        borderColor: "#ff6500",
        data: cntt_tong,
      },
      {
        label: "Đã LĐ",
        fill: true,
        backgroundColor: "#00f3cb",
        borderColor: "#00f3cb",
        data: cntt_da,
      },
      {
        label: "Đang thi công",
        fill: true,
        backgroundColor: "#ff0000",
        borderColor: "#ff0000",
        data: cntt_dang,
      },
    ],
  };
  React.useEffect(() => {
    getdichvu();
    gettsl();
    getfiber();
    getmytv();
    getcodinh();
    getcntt();
  }, [nam, donvi, cap, chitieu]);
  React.useEffect(() => {
    getdichvu();
    gettsl();
    getfiber();
    getmytv();
    getcodinh();
    getcntt();
  }, []);
  return (
    <div>
      <div className={classes.chitieu_4_child_ptm_top}>
        Dịch vụ (brcd+ mytv+ cố định)
        <Chart type="bar" data={data_dichvu} options={options} />
      </div>
      <div className={classes.chitieu_4_child_ptm}>
        Dịch vụ TSL
        <Chart type="bar" data={data_tsl} options={options} />
      </div>
      <div className={classes.chitieu_4_child_ptm}>
        Dịch vụ Fiber
        <Chart type="bar" data={data_fiber} options={options} />
      </div>
      <div className={classes.chitieu_4_child_ptm}>
        Dịch vụ Mytv
        <Chart type="bar" data={data_mytv} options={options} />
      </div>
      <div className={classes.chitieu_4_child_ptm}>
        Dịch vụ CĐ (PSTN, GPHONE, IMS)
        <Chart type="bar" data={data_cd} options={options} />
      </div>
      <div className={classes.chitieu_4_child_ptm}>
        Dịch vụ CNTT
        <Chart type="bar" data={data_cntt} options={options} />
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
