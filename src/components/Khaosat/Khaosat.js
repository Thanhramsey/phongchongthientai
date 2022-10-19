import React from "react";
import ReactPivot from "components/Pivot/ReactPivotkqks.js";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@material-ui/core/TextField";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import AddAlert from "@material-ui/icons/AddAlert";
import LoadingOverlay from "react-loading-overlay-ts";
import { makeStyles } from "@material-ui/core/styles";
import Config from "conFig.js";
//var data = require("./data2.json");
import styles from "assets/jss/material-dashboard-react/components/piVot.js";
const useStyles = makeStyles(styles);

var dimensions = [
  { value: "teN_TTVT", title: "TTVT" },
  { value: "teN_TOKT", title: "Tổ Kt" },
  { value: "teN_KHUVUC", title: "Địa bàn" },
];

var reduce = function (row, memo) {
  memo.hoaN_CONGTotal =
    (memo.hoaN_CONGTotal || 0) + parseFloat(row.transaction.hoaN_CONG);
  memo.thanH_CONGTotal =
    (memo.thanH_CONGTotal || 0) + parseFloat(row.transaction.thanH_CONG);
  memo.haI_LONGTotal =
    (memo.haI_LONGTotal || 0) + parseFloat(row.transaction.haI_LONG);
  memo.khlTotal = (memo.khlTotal || 0) + parseFloat(row.transaction.khl);
  memo.khlkdTotal = (memo.khlkdTotal || 0) + parseFloat(row.transaction.khlkd);
  memo.khlktTotal = (memo.khlktTotal || 0) + parseFloat(row.transaction.khlkt);
  memo.khlkdktTotal =
    (memo.khlkdktTotal || 0) + parseFloat(row.transaction.khlkdkt);
  memo.khlnetTotal =
    (memo.khlnetTotal || 0) + parseFloat(row.transaction.khlnet);
  memo.khlmediaTotal =
    (memo.khlmediaTotal || 0) + parseFloat(row.transaction.khlmedia);
  memo.khltdTotal = (memo.khltdTotal || 0) + parseFloat(row.transaction.khltd);
  return memo;
};

var calculations = [
  {
    title: "Tổng số KH lắp mới + sữa chữa hoàn công trong kỳ",
    value: "hoaN_CONGTotal",
    template: function (val) {
      return val.toFixed(2);
    },
    className: "alignRight",
  },
  {
    title: "Tổng số KH khảo sát thành công",
    value: "thanH_CONGTotal",
    template: function (val) {
      return val.toFixed(2);
    },
    className: "alignRight",
  },
  {
    title: "Số lượng KH hài lòng",
    value: "haI_LONGTotal",
    template: function (val) {
      return val.toFixed(2);
    },
    className: "alignRight",
  },
  {
    title: "Tổng số KH không hài lòng",
    value: "khlTotal",
    template: function (val) {
      return val.toFixed(2);
    },
    className: "alignRight",
  },
  {
    title: "Kinh doanh",
    value: "khlkdTotal",
    template: function (val) {
      return val.toFixed(2);
    },
    className: "alignRight",
  },
  {
    title: "Kỹ thuật",
    value: "khlktTotal",
    className: "alignCenter",
  },
  {
    title: "Kinh doanh+Kỹ thuật",
    value: "khlkdktTotal",
    className: "alignCenter",
  },
  {
    title: "VNPT Net",
    value: "khlnetTotal",
    className: "alignCenter",
  },
  {
    title: "VNPT Media",
    value: "khlmediaTotal",
    className: "alignCenter",
  },
  {
    title: "Hỗ trợ khách hàng",
    value: "khltdTotal",
    className: "alignCenter",
  },
];
var hideRows = (row) => {
  return row.kh_namTotal < 1;
};
export default function Khaosat() {
  const token = localStorage.getItem("token");
  var obj = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const classes = useStyles();
  const showInput = false;
  const [data, setData] = React.useState([]);
  const [khachhang, setKhachhang] = React.useState("");
  const [thangnam, setThangnam] = React.useState(new Date());
  const [alert, setAlert] = React.useState(false);
  const [alert1, setAlert1] = React.useState(false);
  const [isActive, setActive] = React.useState(false);
  const handleButtonClicked = () => {
    setActive((value) => !value);
    setTimeout(() => setActive(false), 1000);
  };
  const showNotification1 = () => {
    setAlert1(true);
    setTimeout(function () {
      setAlert1(false);
    }, 6000);
  };
  const loaddata = () => {
    if (typeof khachhang == "number") {
      handleButtonClicked();
      var month = ("0" + (thangnam.getMonth() + 1)).slice(-2);
      var time = "01/" + month + "/" + thangnam.getFullYear();
      var url =
        Config.backend +
        "/api/khaosat/getkhaosat?thangnam=" +
        time +
        "&khachhang=" +
        khachhang +
        "&cap=3";
      fetch(url, obj)
        .then((res) => res.json())
        .then((data) => {
          if (data.length === 0) showNotification1();
          setData(data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    } else {
      showNotification();
    }
  };
  const khachhangChange = (event) => {
    setKhachhang(event.target.value);
  };
  const showNotification = () => {
    setAlert(true);
    setTimeout(function () {
      setAlert(false);
    }, 6000);
  };
  return (
    <div className={classes.demo}>
      <GridContainer>
        <GridItem xs={4} sm={12} md={2}>
          <FormControl className={classes.selectbox}>
            <InputLabel>Khách hàng</InputLabel>
            <Select value={khachhang} onChange={khachhangChange}>
              <MenuItem value={0}>Tất cả</MenuItem>
              <MenuItem value={1}>Cá nhân</MenuItem>
              <MenuItem value={2}>Doanh nghiệp</MenuItem>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem xs={4} sm={12} md={2}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              inputFormat="MM-yyyy"
              views={["year", "month"]}
              label="Tháng năm"
              minDate={new Date("2020-01-01")}
              maxDate={new Date("2030-12-01")}
              value={thangnam}
              onChange={setThangnam}
              renderInput={(params) => (
                <TextField {...params} helperText={null} />
              )}
            />
          </LocalizationProvider>
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
          <Button color="primary" variant="contained" onClick={loaddata}>
            Xem
          </Button>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={10} lg={8}>
          <Snackbar
            place="tc"
            color="warning"
            icon={AddAlert}
            message="Vui lòng chọn loại khách hàng"
            open={alert}
            closeNotification={() => setAlert(false)}
            close
          />
        </GridItem>
      </GridContainer>
      <div className={showInput ? classes.hide : ""}>
        <LoadingOverlay active={isActive} spinner={true} text="Loading data...">
          <ReactPivot
            rows={data}
            dimensions={dimensions}
            calculations={calculations}
            reduce={reduce}
            activeDimensions={["TTVT"]}
            hideRows={hideRows}
            nPaginateRows={1000}
          />
        </LoadingOverlay>
        <GridContainer>
          <GridItem xs={12} sm={12} md={10} lg={8}>
            <Snackbar
              place="tc"
              color="warning"
              icon={AddAlert}
              message="Không có dữ liệu"
              open={alert1}
              closeNotification={() => setAlert1(false)}
              close
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
