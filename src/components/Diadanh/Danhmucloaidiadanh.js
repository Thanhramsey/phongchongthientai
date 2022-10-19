import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "@material-ui/core/Button";
import Modal from "@mui/material/Modal";
import GridItemLogin from "components/Grid/GridItemLogin.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeadertab.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CardFooter from "components/Card/CardFooter.js";
import Config from "conFig.js";
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
const useStyles = makeStyles(styles);

const Loaidiadanh = React.memo(function Loaidiadanh(props) {
  const classes = useStyles();
  const { loaidiadanhrows, loaidiadanhcolumns } = props;
  const [selectedroleRows, setSelectedroleRows] = React.useState([]);
  const [openthemdtt, setOpenthemdtt] = React.useState(false);
  const handleClose = () => setOpenthemdtt(false);
  const selectedmenuRows = [];
  const token = localStorage.getItem("token");
  var obj = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  const capnhat = () => {
    if (selectedroleRows.length == 1) {
      var url;
      if (selectedmenuRows.length == 0) {
        url =
          Config.backend +
          "/api/phanquyenmenu/phanmenu?role=" +
          selectedroleRows[0].rolE_ID +
          "&menu=0";
        fetch(url, obj)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error("Error fetching data: ", error);
          });
      } else {
        var kq = [];
        selectedmenuRows.map((prop) => {
          kq.push(prop.id);
        });
        url =
          Config.backend +
          "/api/phanquyenmenu/phanmenu?role=" +
          selectedroleRows[0].id +
          "&menu=(" +
          kq +
          ")";
        fetch(url, obj)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error("Error fetching data: ", error);
          });
      }
    }
  };
  const themdotthientai = () => {
    setOpenthemdtt(true);
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={10} md={12}>
        <Button color="primary" variant="contained" onClick={themdotthientai}>
          Thêm mới
        </Button>
      </GridItem>
      <GridItem xs={12} sm={10} md={12}>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            getRowId={(row) => row.id}
            rows={loaidiadanhrows}
            columns={loaidiadanhcolumns}
            rowsPerPageOptions={[]}
            hideFooter={true}
            checkboxSelection={false}
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRows = loaidiadanhrows.filter((row) =>
                selectedIDs.has(row.id)
              );
              setSelectedroleRows(selectedRows);
            }}
            rowHeight={30}
            headerHeight={45}
          />
        </div>
      </GridItem>
      <Modal
        open={openthemdtt}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <GridContainer>
            <GridItemLogin xs={12} sm={12} md={3}></GridItemLogin>
            <GridItemLogin xs={12} sm={12} md={6}>
              <Card>
                <CardHeader color="primary">
                  <h6
                    className={classes.cardTitleWhite}
                    style={{ marginTop: "-5px" }}
                  >
                    Thêm địa danh
                  </h6>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <GridItem xs={12} sm={12} md={12}>
                        <CustomInput
                          labelText="Mã loại địa danh"
                          id="oldpassword"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <GridItem xs={12} sm={12} md={12}>
                        <CustomInput
                          labelText="Tên loại địa danh"
                          id="oldpassword"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <Button color="info" onClick={capnhat}>
                    Cập nhật
                  </Button>
                </CardFooter>
              </Card>
            </GridItemLogin>
            <GridItemLogin xs={12} sm={12} md={3}></GridItemLogin>
          </GridContainer>
        </div>
      </Modal>
    </GridContainer>
  );
});

Loaidiadanh.propTypes = {
  loaidiadanhrows: PropTypes.array,
  loaidiadanhcolumns: PropTypes.array,
};
export default Loaidiadanh;
