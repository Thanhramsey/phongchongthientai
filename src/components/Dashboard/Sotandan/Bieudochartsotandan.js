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
const tyle = [20, 45, 30, 40, 40, 95, 75, 45, 50, 33];
const kehoach = [50, 70, 100, 210, 70, 120, 150, 170, 80, 30];
const thuchien = [10, 30, 30, 100, 40, 110, 100, 90, 40, 10];
const Bieudochart = React.memo(function Bieudochart(props) {
  let x_time = ["QNN", "AN", "HN", "AL", "HA", "PM", "PC", "TP", "VC", "TS"];
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
  const { ruiro, tinhhuyen } = props;
  const classes = useStyles();
  //const [tlhoanthanh, setTlhoanthanh] = React.useState(null);
  //const [tonghoanthanh, setTonghoanthanh] = React.useState(null);
  //const [htdunghan, setHtdunghan] = React.useState(null);
  const token = localStorage.getItem("token");
  var obj = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const getdata = () => {
    var url = Config.backend + "/api/bieudo/getdohailongkh?nam=";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        //setTlhoanthanh(Object.values(data[0]));
        //setTonghoanthanh(Object.values(data[1]));
        //setHtdunghan(Object.values(data[2]));
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const data_solieu= {
    labels: x_time,
    datasets: [
      {
        type: "line",
        label: "Tỷ lệ",
        fill: true,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "#00ec00",
        data: tyle,
        yAxisID: "left-axis",
      },
      {
        label: "Kế hoạch",
        fill: true,
        backgroundColor: "#a0522d",
        borderColor: "#a0522d",
        data: kehoach,
      },
      {
        label: "Thực hiện",
        fill: true,
        backgroundColor: "#fff",
        borderColor: "#fff",
        data: thuchien,
      },
    ],
  };
  React.useEffect(() => {
    getdata();
  }, [ruiro, tinhhuyen]);
  React.useEffect(() => {
    getdata();
  }, []);
  return (
    <div className={classes.chitieu_4_total}>
      <Chart
        type="bar"
        data={data_solieu}
        options={options_thoigiantldv}
      />
    </div>
  );
});
Bieudochart.propTypes = {
  ruiro: PropTypes.string,
  tinhhuyen: PropTypes.string,
};
export default Bieudochart;
