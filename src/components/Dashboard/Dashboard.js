import React from "react";
import { useHistory } from "react-router-dom";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
//import FormControl from "@mui/material/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
//import Lucluongphuongtien from "components/Dashboard/Lucluongphuongtien/Lucluongphuongtien.js";
import Ptttbvttable from "components/Dashboard/Lucluongphuongtien/Ptttbvttable.js";
import Luongthucthucpham from "components/Dashboard/Luongthucthucpham/Luongthucthucpham.js";
//import Thuebao from "components/Dashboard/Thuebao/Thuebao.js";
import Thiethai from "components/Dashboard/Thiethai/Thiethai.js";
import Sotanlucluongphuongtien from "components/Dashboard/Sotanlucluongphuongtien/Sotanlucluong.js";
import Bieudochartsotandan from "components/Dashboard/Sotandan/Bieudochartsotandan.js";
import Solieusotandan from "components/Dashboard/Sotandan/Solieusotandan.js";
import Nhiemvuthuchien from "components/Dashboard/Nhiemvu/Nhiemvuthuchien.js";
import Homeimg from "assets/img/home.png";
import Cameras from "components/Dashboard/Camera/Camera.js";
import Config from "conFig.js";
import styles from "assets/jss/material-dashboard-react/components/dashBoardth.js";
const useStyles = makeStyles(styles);
import { makeStyles } from "@material-ui/core/styles";

export default function Dashboard() {
  const [dichvuxhdt, setDichvuxhdt] = React.useState("4");
  const [tinhhuyen, setTinhhuyen] = React.useState([]);
  const [tinhhuyenvalue, setTinhhuyenvalue] = React.useState(1);
  const [ruiro, setRuiro] = React.useState([]);
  const [ruirovalue, setRuirovalue] = React.useState(1);
  const classes = useStyles();
  const dichvuxhdtChange = (event) => {
    setDichvuxhdt(event.target.value);
  };
  const getruiro = () => {
    var url = Config.backend + "/api/ruiro/getdanhsachruiro";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRuiro(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const gettinhhuyen = () => {
    var url = Config.backend + "/api/diadanh/gettinhhuyen";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTinhhuyen(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const ruiroChange = (event) => {
    setRuirovalue(event.target.value);
  };
  const tinhhuyenChange = (event) => {
    setTinhhuyenvalue(event.target.value);
  };
  let history = useHistory();
  React.useEffect(() => {
    getruiro();
    gettinhhuyen();
  }, []);
  const gotohome = () => {
    history.push("/");
  };
  return (
    <div className={classes.dashboard_th}>
      <div className={classes.dashboard_header}>
        <div className={classes.header_title}>
          <span>DASHBOARD ĐIỀU HÀNH</span>
        </div>
        <div className={classes.header_home_button}>
          <img src={Homeimg} className={classes.img} onClick={gotohome}></img>
        </div>
        <div className={classes.header_title_left}>
          <Select
            value={ruirovalue}
            onChange={ruiroChange}
            className={classes.ruiro_select}
          >
            {typeof ruiro === "object" &&
              ruiro.map((prop, i) => {
                return (
                  <MenuItem key={i} value={prop.id}>
                    {prop.ten}
                  </MenuItem>
                );
              })}
          </Select>
        </div>
        <div className={classes.header_title_right_tree}>
          <div className={classes.tinhhuyen_header}>
            <Select
              value={tinhhuyenvalue}
              onChange={tinhhuyenChange}
              className={classes.ruiro_select}
            >
              {typeof tinhhuyen === "object" &&
                tinhhuyen.map((prop, i) => {
                  return (
                    <MenuItem key={i} value={prop.id}>
                      {prop.ten}
                    </MenuItem>
                  );
                })}
            </Select>
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
                  <div className={classes.card_body_map}>
                    <div className={classes.map_content}>
                      <GridItem
                        xs={12}
                        sm={10}
                        md={12}
                        style={{ marginLeft: "10px", marginRight: "1px" }}
                      >
                        <Sotanlucluongphuongtien
                          ruiro={ruirovalue}
                          tinhhuyen={tinhhuyenvalue}
                        />
                      </GridItem>
                    </div>
                  </div>
                </div>
              </div>
              <GridContainer style={{ marginTop: "10px" }}>
                <GridItem
                  xs={12}
                  sm={10}
                  md={9}
                  style={{ marginLeft: "-5px", marginRight: "0px" }}
                >
                  <div className={classes.row}>
                    <div className={classes.card}>
                      <div className={classes.card_header_left}>
                        <div className={classes.bieudosotan_header}>
                          <span>BIỂU ĐỒ SƠ TÁN DÂN</span>
                        </div>
                      </div>
                      <div className={classes.card_body_bdst}>
                        <div className={classes.thongtin_header}>
                          <Bieudochartsotandan
                            ruiro={ruirovalue}
                            tinhhuyen={tinhhuyenvalue}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </GridItem>
                <GridItem
                  xs={12}
                  sm={10}
                  md={3}
                  style={{ marginLeft: "5px", marginRight: "0px" }}
                >
                  <div className={classes.row}>
                    <div className={classes.card}>
                      <div className={classes.card_header_left}>
                        <div className={classes.bieudosotan_header}>
                          <span>HỒ THỦY LỢI</span>
                        </div>
                      </div>
                      <div className={classes.card_body_bdst}>
                        <div className={classes.thongtin_header}></div>
                      </div>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
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
                    <div className={classes.bieudosotan_header}>
                      <span>SỐ LIỆU SƠ TÁN DÂN</span>
                    </div>
                    <div className={classes.bieudosotan_header}></div>
                  </div>
                  <div className={classes.card_body_slst}>
                    <Solieusotandan
                      ruiro={ruirovalue}
                      tinhhuyen={tinhhuyenvalue}
                    />
                  </div>
                </div>
              </div>
              <div className={classes.row}>
                <Cameras />
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
                      <span>NHIỆM VỤ</span>
                    </div>
                  </div>
                  <div className={classes.card_body_nhiemvu}>
                    <Nhiemvuthuchien
                      ruiro={ruirovalue}
                      tinhhuyen={tinhhuyenvalue}
                    />
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
            <GridItem xs={12} sm={10} md={9}>
              <div className={classes.row}>
                <div className={classes.card}>
                  <div className={classes.card_header_left}>
                    <div className={classes.thiethai_header}>
                      <span>THIỆT HẠI</span>
                    </div>
                  </div>
                  <div className={classes.card_body_thiethai}>
                    <div className={classes.thongtin_header}>
                      <Thiethai ruiro={ruirovalue} tinhhuyen={tinhhuyenvalue} />
                    </div>
                  </div>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={10} md={3}>
              <div className={classes.row}>
                <div className={classes.card}>
                  <div className={classes.card_header_left}>
                    <div className={classes.thiethai_header}>
                      <span>CÔNG TRÌNH</span>
                    </div>
                  </div>
                  <div className={classes.card_body_thiethai}>
                    <div className={classes.thongtin_header}></div>
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
            <GridItem xs={12} sm={10} md={6}>
              <div className={classes.row}>
                <div className={classes.card}>
                  <div className={classes.card_header_bottom}>
                    <div className={classes.xhdoanhthu_header}>
                      <span>LỰC LƯỢNG PHƯƠNG TIỆN</span>
                    </div>
                    <div className={classes.xhdoanhthu_header_right}>
                      <select
                        className={classes.dichvu_xhdt}
                        onChange={dichvuxhdtChange}
                        value={dichvuxhdt}
                      >
                        <option value={1}>Phương tiện, TTB, VT</option>
                        <option value={2}>Lực lượng ứng phó</option>
                      </select>
                    </div>
                  </div>
                  <div className={classes.card_body_bottom}>
                    <Ptttbvttable ruiro={ruirovalue} />
                  </div>
                </div>
              </div>
            </GridItem>
            <GridItem xs={12} sm={10} md={6}>
              <div className={classes.row}>
                <div className={classes.card}>
                  <div className={classes.card_header_bottom}>
                    <div className={classes.lttp_header}>
                      <span>LƯƠNG THỰC, THỰC PHẨM</span>
                    </div>
                  </div>
                  <div className={classes.card_body_bottom}>
                    <Luongthucthucpham
                      ruiro={ruirovalue}
                      tinhhuyen={tinhhuyenvalue}
                    />
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
