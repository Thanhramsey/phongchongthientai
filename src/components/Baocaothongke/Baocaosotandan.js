import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Sotandantable from "components/Baocaothongke/Sotandantable.js";
import Config from "conFig.js";

export default function Ptttbvt() {
  const [ruiro, setRuiro] = React.useState([]);
  const [ruirovalue, setRuirovalue] = React.useState("");
  const [quanhuyen, setQuanhuyen] = React.useState([]);
  const [quanhuyenvalue, setQuanhuyenvalue] = React.useState("");
  const [xaphuong, setXaphuong] = React.useState([]);
  const [donvi, setDonvi] = React.useState("");
  const [xaphuongvalue, setXaphuongvalue] = React.useState("");
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
  const getquanhuyen = () => {
    var url = Config.backend + "/api/diadanh/getquanhuyen";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuanhuyen(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getxatuhuyen = (id) => {
    if (ruirovalue !== undefined) {
      var url = Config.backend + "/api/diadanh/getxatuhuyen?id=" + id;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setXaphuong(data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  };
  const ruiroChange = (event) => {
    setRuirovalue(event.target.value);
    getquanhuyen();
  };
  const quanhuyenChange = (event) => {
    setQuanhuyenvalue(event.target.value);
    getxatuhuyen(event.target.value);
    setDonvi(event.target.value);
  };
  const xaphuongChange = (event) => {
    setXaphuongvalue(event.target.value);
    setDonvi(event.target.value);
  };
  React.useEffect(() => {
    getruiro();
  }, []);

  return (
    <GridContainer>
      <GridItem xs={12} sm={10} md={12}>
        <FormControl style={{ width: "200px", marginTop: "10px" }}>
          <InputLabel style={{ marginTop: "-8px" }}>Chọn rủi ro</InputLabel>
          <Select value={ruirovalue} onChange={ruiroChange} size="small">
            {typeof ruiro === "object" &&
              ruiro.map((prop, i) => {
                return (
                  <MenuItem key={i} value={prop.id}>
                    {prop.ten}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <FormControl
          style={{ marginLeft: "35px", width: "200px", marginTop: "10px" }}
        >
          <InputLabel style={{ marginTop: "-8px" }}>Chọn Tp/Huyện</InputLabel>
          <Select
            value={quanhuyenvalue}
            size="small"
            onChange={quanhuyenChange}
          >
            {typeof quanhuyen === "object" &&
              quanhuyen.map((prop, i) => {
                return (
                  <MenuItem key={i} value={prop.id}>
                    {prop.ten}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <FormControl
          style={{ marginLeft: "35px", width: "200px", marginTop: "10px" }}
        >
          <InputLabel style={{ marginTop: "-8px" }}>Chọn Xã phường</InputLabel>
          <Select value={xaphuongvalue} onChange={xaphuongChange} size="small">
            {typeof xaphuong === "object" &&
              xaphuong.map((prop, i) => {
                return (
                  <MenuItem key={i} value={prop.id}>
                    {prop.ten}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </GridItem>
      <GridItem xs={12} sm={10} md={12}>
        <Sotandantable ruiro={ruirovalue} xa={donvi} />
      </GridItem>
    </GridContainer>
  );
}
