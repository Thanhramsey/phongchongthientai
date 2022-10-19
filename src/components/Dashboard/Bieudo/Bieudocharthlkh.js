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
  const { nam, cap, donvi, chitieu } = props;
  const classes = useStyles();
  const [tlhoanthanh, setTlhoanthanh] = React.useState(null);
  const [tonghoanthanh, setTonghoanthanh] = React.useState(null);
  const [htdunghan, setHtdunghan] = React.useState(null);
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
      "/api/bieudo/getdohailongkh?nam=" +
      time +
      "&cap=" +
      cap +
      "&donvi=" +
      donvi;
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setTlhoanthanh(Object.values(data[0]));
        setTonghoanthanh(Object.values(data[1]));
        setHtdunghan(Object.values(data[2]));
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
  React.useEffect(() => {
    getthoigian();
  }, [nam, donvi, cap, chitieu]);
  React.useEffect(() => {
    getthoigian();
  }, []);
  return (
    <div className={classes.chitieu_4_total}>
      Độ hài lòng khách hàng
      <Chart
        type="bar"
        data={data_thoigiantldv}
        options={options_thoigiantldv}
      />
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
