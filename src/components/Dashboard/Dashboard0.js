import React from "react";
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Mapsplitter from "views/Maps/Mapspliter.js";
import Mapcot from "views/Maps/Mapcot.js";
import Mapbecap from "views/Maps/Mapbecap.js";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField from "@material-ui/core/TextField";
import Button from "components/CustomButtons/Button.js";
import FormControl from "@mui/material/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TreeView from "components/TreeView/TreeFilterdb.js";
import Xephangtltc from "components/Dashboard/Xephangtylethucuoc/Xephangtltc.js";
import Tylethucuoc from "components/Dashboard/Xephangtylethucuoc/Tylethucuoc.js";
import Xephangdoanhthu from "components/Dashboard/Xephangdoanhthu/Xephangdoanhthu.js";
import Chitieukythuat from "components/Dashboard/Chitieu/Chitieukythuat.js";
import Phantichdichvu from "components/Dashboard/Chitieu/Phantichdichvu.js";
import Phantichtrainghiem from "components/Dashboard/Chitieu/Phantichtrainghiem.js";
import Phantichthanhtoan from "components/Dashboard/Chitieu/Phantichthanhtoan.js";
import Thuebao from "components/Dashboard/Thuebao/Thuebao.js";
import Doanhthuluyke from "components/Dashboard/Doanhthu/Doanhthuluyke.js";
import Bieudocharttcldtb from "components/Dashboard/Bieudo/Bieudocharttcldtb.js";
import Doanhthuchart from "components/Dashboard/Doanhthu/Doanhthuchart.js";
import Bieudocharttldv from "components/Dashboard/Bieudo/Bieudocharttldv.js";
import Bieudochartxlh from "components/Dashboard/Bieudo/Bieudochartxlh.js";
import Bieudocharthlkh from "components/Dashboard/Bieudo/Bieudocharthlkh.js";
import Bieudochartptm_huy from "components/Dashboard/Bieudo/Bieudochartptm_huy.js";
//import Background from "assets/img/map.png";
//<img className={classes.backgound} src={Background}></img>
import Homeimg from "assets/img/home.png";
import Config from "conFig.js";
import styles from "assets/jss/material-dashboard-react/components/dashBoardth.js";
const useStyles = makeStyles(styles);
import { makeStyles } from "@material-ui/core/styles";
const color = "#fff";
const theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        sizeMedium: {
          color,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color,
        },
      },
    },
  },
});
export default function Dashboard() {
  const [dichvudt, setDichvudt] = React.useState("4");
  const [dichvuxhkt, setDichvuxhkt] = React.useState("1");
  const [dichvutb, setDichvutb] = React.useState("4");
  const [dichvuxhdt, setDichvuxhdt] = React.useState("4");
  const [tendonvi, setTendonvi] = React.useState("VIỄN THÔNG BÌNH ĐỊNH");
  const [tendvtb, setTendvtb] = React.useState("Băng rộng cố định");
  const [thangnam, setThangnam] = React.useState(new Date());
  const [chitieu, setChitieu] = React.useState(1);
  const [tree, setTree] = React.useState([]);
  const [capdv, setCapdv] = React.useState("0");
  const [donvi, setDonvi] = React.useState("1");
  const [capxhdt, setCapxhdt] = React.useState("1");
  const [map_option, setMap_option] = React.useState("1");
  const handle = useFullScreenHandle();
  const classes = useStyles();
  const setcapxhdt = (cap) => {
    setCapxhdt(cap);
  };
  const dichvudtChange = (event) => {
    setDichvudt(event.target.value);
  };
  const dichvutbChange = (event) => {
    setTendvtb(event.target.options[event.target.selectedIndex].text);
    setDichvutb(event.target.value);
  };
  const dichvuxhktChange = (event) => {
    setDichvuxhkt(event.target.value);
  };
  const chitieuChange = (event) => {
    setChitieu(event.target.value);
  };
  const dichvuxhdtChange = (event) => {
    setDichvuxhdt(event.target.value);
  };
  const map_optionChange = (event) => {
    setMap_option(event.target.value);
  };
  const gettreeview = () => {
    var url = Config.backend + "/api/treeview";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTree(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const treeviewchange = (nodes) => {
    setCapdv(nodes.cap);
    setDonvi(nodes.id);
    setTendonvi(nodes.value);
  };
  let history = useHistory();
  React.useEffect(() => {
    gettreeview();
  }, []);
  const gotohome = () => {
    history.push("/");
  };
  return (
    <div className={classes.dashboard_th}>
      <div className={classes.dashboard_header}>
        <div className={classes.header_title}>
          <span>{tendonvi.toUpperCase()}</span>
        </div>
        <div className={classes.header_home_button}>
          <img src={Homeimg} className={classes.img} onClick={gotohome}></img>
        </div>
        <div className={classes.header_title_right}>
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                inputFormat="MM-yyyy"
                views={["year", "month"]}
                minDate={new Date("2020-01-01")}
                maxDate={new Date("2030-12-01")}
                value={thangnam}
                onChange={setThangnam}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    helperText={null}
                    className={classes.root}
                  />
                )}
              />
            </LocalizationProvider>
          </ThemeProvider>
        </div>
        <div className={classes.header_title_right_tree}>
          <div className={classes.map_header}>
            <TreeView tree={tree} onChange={treeviewchange} />
          </div>
        </div>
      </div>
      <div className={classes.dashboard_main}>
        <div className={classes.row}>
          <GridContainer
            style={{
              marginTop: "-10px",
              marginLeft: "15px",
              width: "100%",
            }}
          >
            <GridItem
              xs={12}
              sm={10}
              md={5}
              style={{ marginLeft: "12px", marginRight: "12px" }}
            >
              <div className={classes.row}>
                <div className={classes.card}>
                  <div className={classes.card_header_left}>
                    <div className={classes.card_header_map}>
                      <Button
                        color="info"
                        onClick={handle.enter}
                        style={{
                          height: "30px",
                          marginLeft: "1px",
                          width: "90px",
                        }}
                      >
                        fullscreen
                      </Button>
                    </div>
                    <div className={classes.card_header_map}>
                      <select
                        className={classes.dichvu}
                        onChange={map_optionChange}
                        value={map_option}
                      >
                        <option value={1}>Cột</option>
                        <option value={2}>Bể cáp</option>
                        <option value={3}>Splitter</option>
                      </select>
                    </div>
                  </div>
                  <div className={classes.card_body_map}>
                    <div className={classes.map_content}>
                      <FullScreen handle={handle}>
                        {map_option === "1" && (
                          <Mapcot capdv={capdv} donvi={donvi} />
                        )}
                        {map_option === "2" && (
                          <Mapbecap capdv={capdv} donvi={donvi} />
                        )}
                        {map_option === "3" && (
                          <Mapsplitter capdv={capdv} donvi={donvi} />
                        )}
                      </FullScreen>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.row}>
                <div className={classes.card}>
                  <div className={classes.card_header_left}>
                    <div className={classes.thuebao_header}>
                      <span>THUÊ BAO</span>
                    </div>
                    <div className={classes.thuebao_header}>
                      <select
                        className={classes.dichvu}
                        onChange={dichvutbChange}
                        value={dichvutb}
                      >
                        <option value={4}>Băng rộng cố định</option>
                        <option value={5}>MyTV</option>
                        <option value={1}>Cố định</option>
                        <option value={6}>Internet TT</option>
                        <option value={7}>TSL</option>
                        <option value={15}>Dịch vụ số doanh nghiệp</option>
                      </select>
                    </div>
                  </div>
                  <div className={classes.card_body_tb}>
                    <div className={classes.thongtin_tb}>
                      <Thuebao
                        thangnam={thangnam}
                        capdv={capdv}
                        donvi={donvi}
                        dichvu={dichvutb}
                        tendichvu={tendvtb}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </GridItem>
            <GridItem
              xs={12}
              sm={10}
              md={4}
              style={{ marginLeft: "-10px", marginRight: "1px" }}
            >
              <div className={classes.row}>
                <div className={classes.card}>
                  <div className={classes.card_header_center}>
                    <div className={classes.thuebao_header}>
                      <span>DOANH THU (Triệu VNĐ)</span>
                    </div>
                    <div className={classes.thuebao_header}>
                      <select
                        className={classes.doanhthu}
                        onChange={dichvudtChange}
                        value={dichvudt}
                      >
                        <option value={4}>Băng rộng cố định</option>
                        <option value={5}>MyTV</option>
                        <option value={1}>Cố định</option>
                        <option value={6}>Internet TT</option>
                        <option value={7}>TSL</option>
                        <option value={15}>Dịch vụ số doanh nghiệp</option>
                      </select>
                    </div>
                  </div>
                  <div className={classes.card_body_dt}>
                    <div className={classes.card}>
                      <GridItem
                        xs={12}
                        sm={10}
                        md={12}
                        style={{ marginLeft: "10px", marginRight: "1px" }}
                      >
                        <Doanhthuluyke
                          thangnam={thangnam}
                          dichvu={dichvudt}
                          donvi={donvi}
                          cap={capdv}
                        />
                      </GridItem>
                    </div>
                    <div className={classes.card}>
                      <GridItem xs={12} sm={10} md={12}>
                        <Doanhthuchart
                          thangnam={thangnam}
                          capdv={capdv}
                          donvi={donvi}
                          dichvu={dichvudt}
                        />
                      </GridItem>
                    </div>
                  </div>
                </div>
              </div>
            </GridItem>
            <GridItem
              xs={12}
              sm={10}
              md={3}
              style={{
                marginLeft: "-16px",
                marginRight: "1px",
                position: "relative",
                left: "20px",
              }}
            >
              <div className={classes.row}>
                <div className={classes.card}>
                  <div className={classes.card_header_right}>
                    <div className={classes.card_header_tltc}>
                      <span>TỶ LỆ THU CƯỚC</span>
                    </div>
                  </div>
                </div>
              </div>
              <Tylethucuoc thangnam={thangnam} />
              <div className={classes.row}>
                <div className={classes.card}>
                  <div className={classes.card_body_xhc}>
                    <a style={{ color: "#fff" }}> Xếp hạng tỷ lệ thu cước </a>
                    <Xephangtltc thangthu={thangnam} />
                  </div>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.row}>
          <GridContainer
            style={{
              marginTop: "5px",
              marginLeft: "26px",
              width: "100%",
            }}
          >
            <GridItem xs={12} sm={10} md={4}>
              <div className={classes.row}>
                <div className={classes.card}>
                  <div className={classes.card_header_bottom}>
                    <div className={classes.xhdoanhthu_header}>
                      <span>XH DOANH THU</span>
                      <Button
                        color="info"
                        onClick={() => setcapxhdt("1")}
                        style={{
                          height: "30px",
                          marginLeft: "5px",
                          width: "25px",
                        }}
                      >
                        Tháng
                      </Button>
                      <Button
                        color="info"
                        onClick={() => setcapxhdt("2")}
                        style={{
                          height: "30px",
                          marginLeft: "5px",
                          width: "25px",
                        }}
                      >
                        Năm
                      </Button>
                    </div>
                    <div className={classes.xhdoanhthu_header_right}>
                      <select
                        className={classes.dichvu_xhdt}
                        onChange={dichvuxhdtChange}
                        value={dichvuxhdt}
                      >
                        <option value={4}>Băng rộng cố định</option>
                        <option value={5}>MyTV</option>
                        <option value={1}>Cố định</option>
                        <option value={6}>Internet TT</option>
                        <option value={7}>TSL</option>
                        <option value={15}>Dịch vụ số doanh nghiệp</option>
                      </select>
                    </div>
                  </div>
                  <div className={classes.card_body_bottom}>
                    <Xephangdoanhthu
                      thangnam={thangnam}
                      dichvu={dichvuxhdt}
                      cap={capxhdt}
                    />
                  </div>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={10} md={5}>
              <div className={classes.row}>
                <div className={classes.card}>
                  <div className={classes.card_header_bottom}>
                    <div className={classes.xephangkt_header}>
                      <span>CHỈ TIÊU</span>
                    </div>
                    <div className={classes.xephangkt_header}>
                      <select
                        className={classes.xhkythuat_select}
                        onChange={dichvuxhktChange}
                        value={dichvuxhkt}
                      >
                        <option value={1}>Xử lý dịch vụ</option>
                        <option value={2}>Không hài lòng CLDV sau TLDV</option>
                        <option value={3}>Thiết lập dịch vụ</option>
                        <option value={4}>
                          Không hài lòng chất lượng PVSC, XLSC
                        </option>
                        <option value={5}>
                          Phân tích dịch vụ theo thuê bao Fiber
                        </option>
                        <option value={6}>
                          Phân tích dịch vụ theo thuê bao Mytv
                        </option>
                        <option value={7}>
                          Phân tích trải nghiệm KH Fiber
                        </option>
                        <option value={8}>Phân tích trải nghiệm KH Mytv</option>
                        <option value={9}>
                          Phân tích thanh toán và thu cước DV Fiber
                        </option>
                        <option value={10}>
                          Phân tích thanh toán và thu cước DV MyTV
                        </option>
                      </select>
                    </div>
                    <div className={classes.xephangkt_header}></div>
                  </div>
                  <div className={classes.card_body_bottom}>
                    {dichvuxhkt === "1" && (
                      <Chitieukythuat
                        thangnam={thangnam}
                        donvi={donvi}
                        cap={capdv}
                        maubc={dichvuxhkt}
                      />
                    )}
                    {dichvuxhkt === "2" && (
                      <Chitieukythuat
                        thangnam={thangnam}
                        donvi={donvi}
                        cap={capdv}
                        maubc={dichvuxhkt}
                      />
                    )}
                    {dichvuxhkt === "3" && (
                      <Chitieukythuat
                        thangnam={thangnam}
                        donvi={donvi}
                        cap={capdv}
                        maubc={dichvuxhkt}
                      />
                    )}
                    {dichvuxhkt === "4" && (
                      <Chitieukythuat
                        thangnam={thangnam}
                        donvi={donvi}
                        cap={capdv}
                        maubc={dichvuxhkt}
                      />
                    )}
                    {dichvuxhkt === "5" && (
                      <Phantichdichvu thangnam={thangnam} maubc={"1"} />
                    )}
                    {dichvuxhkt === "6" && (
                      <Phantichdichvu thangnam={thangnam} maubc={"2"} />
                    )}
                    {dichvuxhkt === "7" && (
                      <Phantichtrainghiem thangnam={thangnam} maubc={"1"} />
                    )}
                    {dichvuxhkt === "8" && (
                      <Phantichtrainghiem thangnam={thangnam} maubc={"2"} />
                    )}
                    {dichvuxhkt === "9" && (
                      <Phantichthanhtoan thangnam={thangnam} dichvu={4} />
                    )}
                    {dichvuxhkt === "10" && (
                      <Phantichthanhtoan thangnam={thangnam} dichvu={5} />
                    )}
                  </div>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={10} md={3}>
              <div className={classes.row} style={{ marginRight: "2px" }}>
                <div className={classes.card}>
                  <div className={classes.card_header_bottom}>
                    <div className={classes.chitieu_header}>
                      <span>BIỂU ĐỒ</span>
                    </div>
                    <div className={classes.chitieu_header}>
                      <FormControl>
                        <Select
                          value={chitieu}
                          onChange={chitieuChange}
                          className={classes.chitieu_select}
                        >
                          <MenuItem value={1}>Theo dõi lắp đặt TB</MenuItem>
                          <MenuItem value={3}>Theo dõi TB PTM và Hủy</MenuItem>
                          <MenuItem value={4}>Thời gian TLDV</MenuItem>
                          <MenuItem value={5}>Thời gian XLH</MenuItem>
                          <MenuItem value={6}>Độ hài lòng khách hàng</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className={classes.card_body_bottom}>
                    <div className={classes.chitieu_content}>
                      {chitieu === 1 && (
                        <Bieudocharttcldtb
                          nam={thangnam}
                          cap={capdv}
                          donvi={donvi}
                          chitieu={chitieu}
                        />
                      )}
                      {chitieu === 3 && (
                        <Bieudochartptm_huy
                          nam={thangnam}
                          cap={capdv}
                          donvi={donvi}
                          chitieu={chitieu}
                        />
                      )}
                      {chitieu === 4 && (
                        <Bieudocharttldv
                          nam={thangnam}
                          cap={capdv}
                          donvi={donvi}
                          chitieu={chitieu}
                        />
                      )}
                      {chitieu === 5 && (
                        <Bieudochartxlh
                          nam={thangnam}
                          cap={capdv}
                          donvi={donvi}
                          chitieu={chitieu}
                        />
                      )}
                      {chitieu === 6 && (
                        <Bieudocharthlkh
                          nam={thangnam}
                          cap={capdv}
                          donvi={donvi}
                          chitieu={chitieu}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
